const User = require('../models/User');

// If user is authenticated, redirect to home page
exports.login = (req, res) => {
  res.redirect('/');
};

// When user logsout, redirect to home page
exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

// Retrive current user
exports.currentUser = async (req, res) => {
  if (!req.user) {
    return res.sendStatus(402);
  } else {
    const googleid = await req.user;
    const userData = await User.findOne({googleId: `${googleid}`});
    res.status(200).send(userData);
  }
};