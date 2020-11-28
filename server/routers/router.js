
// Import express router & controller file
const router = require('express').Router();
const controller = require('../controllers/controller');


// Route that invokes get function in controller
router.get('/api/get', controller.get);
// Route that invokes post function in controller
router.post('/api/post', controller.post);
// Route that invokes delete function in controller
router.delete('/api/delete', controller.delete);

module.exports = router;