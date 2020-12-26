const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');

const User = require('./server/models/User');

passport.serializeUser((user, done) => {
  done(null, user.googleId);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findOne({ googleId: id });
  done(null, user.googleId);
});

// Set up new Google Auth Passport strategy, fetch keys from .env file
passport.use(
  new Strategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.AUTH_PATH,
      scope: ['profile', 'email']
    },

    async (accessToken, refreshToken, profile, done) => {

      // Verify if user exists in MongoDB
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      // If not, create new user in MongoDB
      const user = await User.create({
        googleId: profile.id,
        username: profile.displayName,
        email: profile._json.email,
        photo: profile._json.picture
      });

      done(null, user);
    }
  )
);

