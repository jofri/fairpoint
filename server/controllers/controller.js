const Article = require('../models/Article');
const User = require('../models/User');
const Story = require('../models/Story');
const Business = require('../models/Business');
const Sports = require('../models/Sports');
const Entertainment  = require('../models/Entertainment');
const Health = require('../models/Health');
const Science = require('../models/Science');
const Technology = require('../models/Technology');
const World = require('../models/World');

// Get controllers (user, UK news, categories)
exports.getUser = async (req, res) => {
  const googleid = req.params.googleid;
  const result = await User.find({googleId: `${googleid}`});
  res.status(200).send(result);
};

exports.getStories = async (req, res) => {
  const result = await Story.find({});
  res.status(200).send(result);
};

exports.getBusiness = async (req, res) => {
  const result = await Business.find({});
  res.status(200).send(result);
};

exports.getSports = async (req, res) => {
  const result = await Sports.find({});
  res.status(200).send(result);
};

exports.getEntertainment = async (req, res) => {
  const result = await Entertainment.find({});
  res.status(200).send(result);
};

exports.getHealth = async (req, res) => {
  const result = await Health.find({});
  res.status(200).send(result);
};

exports.getScience = async (req, res) => {
  const result = await Science.find({});
  res.status(200).send(result);
};

exports.getTechnology = async (req, res) => {
  const result = await Technology.find({});
  res.status(200).send(result);
};

exports.getWorld = async (req, res) => {
  const result = await World.find({});
  res.status(200).send(result);
};

exports.getArticle = async (req, res) => {
  const articleid = req.params.articleid;
  const result = await Article.find({_id: `${articleid}`});
  res.status(200).send(result);
};

// Post controllers (create story, article, user)
exports.createStory = async (req, res) => {
  try {
    const story = await Story.create(req.body);
    res.status(201).send(story);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

exports.createUser = async (req, res) => {
  try {
    const newuser = await User.create(req.body);
    res.status(201).send(newuser);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

exports.createArticle = async (req, res) => {
  try {
    const {title, subtitle, link, source, stance} = await req.body;

    const uniqueLink = await Article.findOne({link: `${link}`});

    if (!uniqueLink) {
      const newarticle = await Article.create({title, subtitle, link, source, stance});
      res.status(201).send(newarticle);
    } else {
      uniqueLink.clicked ++;
      const response = await uniqueLink.save();
      res.status(200).send(response);
    }
  } catch (err) {
    console.log('err', err);
    res.sendStatus(400);
  }
};


// Update article history of user
exports.updateUserHistory = async (req, res) => {
  try {
    const {userId, articleInfo} = await req.body;
    const filter = {googleId: `${userId}`};
    const update = {_id: articleInfo._id, title: articleInfo.title, source: articleInfo.source, stance: articleInfo.stance};
    const newArticle = await User.findOneAndUpdate(filter, {'$push': {'article': update}}, {new: true});
    res.status(201).send(newArticle);
  } catch (err) {
    console.log('err', err);
    res.sendStatus(500);
  }
};

// Update settings / preferences for specific user
exports.updateUserNewsSettings = async (req, res) => {
  try {
    const { userId, settings} = await req.body;
    const filter = {googleId: `${userId}`};
    const newSettings = await User.findOneAndUpdate(filter, {settings:{newssettings: settings}}, {new: true});
    res.status(201).send(newSettings);
  } catch (err) {
    console.log('err', err);
    res.sendStatus(500);
  }
};