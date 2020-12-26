const router = require('express').Router();
const passport = require('passport');
require('../../passport');

const { login, logout, currentUser } = require('../controllers/auth_controller');

// Send user to sign in page
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// After login, authenticate user and execute login function
router.get('/google/callback', passport.authenticate('google'), login);
router.get('/logout', logout);
router.get('/current-user', currentUser);


module.exports = router;
