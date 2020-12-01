const scraper = require('./googlescrape');
const Story = require('../models/Story');
const mongoose = require('mongoose');

const newsScraper = async () => {

  async function getarticles (story) {
    const articles = await scraper({
      searchTerm: story,
      prettyURLs: false,
      timeframe: '5d',
      puppeteerArgs: []
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
          console.log('inside');
          itemobj.articles = await getarticles(story);
        } else {
          itemobj.articles = [];
        }
        db.stories.push(itemobj);
      }    
      const conn = await mongoose.createConnection('mongodb://localhost:27017/front_pages_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });
      conn.dropCollection('stories');
    } catch (err) {
      console.log('Scarpping failed', err);
    }

    for (let i = 0; i< db.stories.length; i++) {
      await Story.create(db.stories[i]);
    }
    
    console.log('Finished');
  })();

};

module.exports = newsScraper;