const router = require('express').Router();
const controller = require('../controllers/controller');

router.post('/newstories', controller.createStory);
router.post('/newuser', controller.createUser);
router.post('/newarticle', controller.createArticle);

module.exports = router;