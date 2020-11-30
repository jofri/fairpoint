// Import model
const Article = require('../models/Article');
const User = require('../models/User');
const Story = require('../models/Story');

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
    await User.create(req.body);
    res.status(201).send(story);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

exports.createArticle = async (req, res) => {
  try {
    console.log(req.body);
    await Article.create(req.body);
    res.status(201).send(story);
  } catch (err) {
    console.log(error);
    res.sendStatus(400);
  }
};