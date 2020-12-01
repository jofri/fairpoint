const router = require('express').Router();
const controller = require('../controllers/controller');

router.get('/api/getUser/:googleid', controller.getUser);
router.get('/api/getStories', controller.getStories);
router.get('/api/getArticle/:articleid', controller.getArticle);

router.post('/api/newstories', controller.createStory);
router.post('/api/newuser', controller.createUser);
router.post('/api/newarticle', controller.createArticle);


module.exports = router;