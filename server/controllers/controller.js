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

//*GET controllers
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

//*POST controllers
exports.createStory = async (req, res) => {
  try {
    console.log(req.body);
    const story = await Story.create(req.body);
    res.status(201).send(story);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const newuser = await User.create(req.body);
    res.status(201).send(newuser);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

exports.createArticle = async (req, res) => {
  try {
    console.log(req.body);
    const newarticle = await Article.create(req.body);
    res.status(201).send(newarticle);
  } catch (err) {
    console.log(error);
    res.sendStatus(400);
  }
};

exports.saveArticleUserlog = async (req, res) => {
  try {
    console.log('req', req);
    
    const userId = req.params.googleid;
    const update = {article: req.body};
    const filter = {googleId: `${userId}`};
    const newArticle = await User.findOneAndUpdate(filter, {$addToSet: update});
    res.status(201).send(newArticle);
  } catch {
    console.log(error);
    res.sendStatus(400);
  }
};