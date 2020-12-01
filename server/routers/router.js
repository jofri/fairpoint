const router = require('express').Router();
const controller = require('../controllers/controller');

// router.get('/api/getUser/:googleid', controller.getUser);
router.get('/getStories', controller.getStories);
router.get('/getArticle/:articleid', controller.getArticle);

router.post('/newstories', controller.createStory);
router.post('/newuser', controller.createUser);
router.post('/newarticle', controller.createArticle);


module.exports = router;