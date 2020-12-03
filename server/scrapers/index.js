const scraper = require('./googlescrape');
const Story = require('../models/Story');
const mongoose = require('mongoose');
const stance = require('./stance');

const newsScraper = async () => {
  console.log('Start Headline');
  console.time('Headline');

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
        'https://news.google.com/rss?hl=en-GB&gl=GB&ceid=GB:en'
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
      conn.dropCollection('stories');
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

      await Story.create(db.stories[i]);
    }
    console.timeEnd('Headline');
    console.log('Finished Headlines');
  })();

};

module.exports = newsScraper;