const router = require('express').Router();
const controller = require('../controllers/controller');

// router.get('/api/getUser/:googleid', controller.getUser);
router.get('/getStories', controller.getStories);
router.get('/getArticle/:articleid', controller.getArticle);
/* router.get('/getBusiness', controller.getBusiness);
router.get('/getSports', controller.getSports);
router.get('/getScience', controller.getScience);
router.get('/getHealth', controller.getHealth);
router.get('/getEntertainment', controller.getEntertainment);
router.get('/getTechnology', controller.getTechnology);
router.get('/getWorld', controller.getWorld); */

router.post('/newstories', controller.createStory);
router.post('/newuser', controller.createUser);
router.post('/newarticle', controller.createArticle);
router.post('/saveUserlog/:googleid', controller.saveArticleUserlog);


module.exports = router;