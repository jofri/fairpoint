const scraper = require('./googlescrape');
const Business = require('../models/Business');
const Entertainment= require('../models/Entertainment');
const Health= require('../models/Health');
const Science= require('../models/Science');
const Sports= require('../models/Sports');
const Technology= require('../models/Technology');
const World= require('../models/World');
const mongoose = require('mongoose');
const stance = require('./stance');

const categoriesScraper = async (category) => {

  console.log('start', category);
  console.time(`${category}`);

  let categoryhash;
  let categoryModel;
  let plural;

  switch (category) {

  case 'World':
    categoryhash = 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pIUWlnQVAB';
    categoryModel = World;
    plural = 'worlds';
    break;
  case 'Business':
    categoryhash = 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pIUWlnQVAB';
    categoryModel = Business;
    plural = 'businesses';
    break;
  case 'Technology':
    categoryhash = 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pIUWlnQVAB';
    categoryModel = Technology;
    plural = 'technologies';
    break;
  case 'Entertainment':
    categoryhash = 'CAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pIUWlnQVAB';
    categoryModel = Entertainment;
    plural = 'entertainments';
    break;
  case 'Sports':
    categoryhash = 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pIUWlnQVAB';
    categoryModel = Sports;
    plural = 'sports';
    break;
  case 'Science':
    categoryhash = 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp0Y1RjU0FtVnVHZ0pIUWlnQVAB';
    categoryModel = Science;
    plural = 'sciences';
    break;
  case 'Health':
    categoryhash = 'CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ';
    categoryModel = Health;
    plural = 'health';
    break;
  default:
    categoryhash = 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pIUWlnQVAB';
    categoryModel = World;
    plural = 'worlds';
    break;
  }

  async function getarticles (story) {
    const articles = await scraper({
      searchTerm: story,
      prettyURLs: false,
      timeframe: '5d',
      puppeteerArgs: ['--single-process', '--no-zygote', '--no-sandbox']
    });
    return articles;
  }
  let Parser = require('rss-parser');
  let parser = new Parser({
    customFields: {
      feed: ['otherTitle', 'extendedDescription'],
      item: ['coAuthor', 'subtitle']
    }
  });

  (async () => {
    const db = { stories: [] };
    try {
      let feed = await parser.parseURL(
        `https://news.google.com/rss/topics/${categoryhash}?hl=en-GB&gl=GB&ceid=GB%3Aen`
      );
      for (let i = 0; i < feed.items.length; i++) {
        const item = feed.items[i];
        const itemobj = {};
        const links = item.content.split(/ /).filter((word) => word.includes('href')).map(el => el.slice(6, -1));
        const story = links.slice(-1)[0].replace('https://news.google.com/', '');
        itemobj.title = item.title;
        itemobj.pubDate = item.pubDate;
        itemobj.contentSnippet = item.contentSnippet;
        itemobj.links = links;
        itemobj.story = story[0] === '_' ? false : true;
        if (itemobj.story === true) {
          // console.log(item.title);
          itemobj.articles = await getarticles(story);
        } else {
          itemobj.articles = [];
        }
        db.stories.push(itemobj);
      }
      const conn = await mongoose.createConnection(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });
      await conn.dropCollection(plural);
    } catch (err) {
      console.log('Scraping failed', err);
    }

    for (let i = 0; i< db.stories.length; i++) {
      // console.log('insideforloop');
      for (let j = 0; j < db.stories[i].articles.length; j++) {
        if (stance[db.stories[i].articles[j].source]) {
          db.stories[i].articles[j].stance = stance[db.stories[i].articles[j].source];
          // console.log('on list: ', db.stories[i].articles[j].source);
        } else {
          db.stories[i].articles[j].stance = 11;
          // console.log('NOT on list: ', db.stories[i].articles[j].source);
        }
      }

      await categoryModel.create(db.stories[i]);
    }
    console.timeEnd(`${category}`);
    console.log('Finished', category);
  })();

};

module.exports = categoriesScraper;