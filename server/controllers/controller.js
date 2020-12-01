const Article = require('../models/Article');
const User = require('../models/User');
const Story = require('../models/Story');

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