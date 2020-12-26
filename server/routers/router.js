const router = require('express').Router();
const controller = require('../controllers/controller');

// Get all UK news stories
router.get('/getStories', controller.getStories);
// Get article
router.get('/getArticle/:articleid', controller.getArticle);

// Get category of news stories
router.get('/getBusiness', controller.getBusiness);
router.get('/getSports', controller.getSports);
router.get('/getScience', controller.getScience);
router.get('/getHealth', controller.getHealth);
router.get('/getEntertainment', controller.getEntertainment);
router.get('/getTechnology', controller.getTechnology);
router.get('/getWorld', controller.getWorld);

// Create new story, user, aricle
router.post('/newstories', controller.createStory);
router.post('/newuser', controller.createUser);
router.post('/newarticle', controller.createArticle);

// Update user history & settings
router.post('/createUserHistory', controller.updateUserHistory);
router.post('/updateUserNewsSettings', controller.updateUserNewsSettings);

module.exports = router;