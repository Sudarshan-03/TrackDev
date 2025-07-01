import passport from 'passport';
import GitHubStrategy from 'passport-github2';
import User from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => User.findById(id).then(user => done(null, user)));
console.log("✅ GITHUB_CLIENT_ID:", process.env.GITHUB_CLIENT_ID);
console.log("✅ GITHUB_CLIENT_SECRET:", process.env.GITHUB_CLIENT_SECRET);
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "/api/auth/github/callback"
}, async (accessToken, refreshToken, profile, done) => {
  let user = await User.findOne({ githubId: profile.id });
  if (!user) {
    user = await User.create({
      githubId: profile.id,
      email: (profile.emails && profile.emails.length > 0 && profile.emails[0].value) ? profile.emails[0].value : `${profile.username || profile.id}@github`,
    });
  }
  return done(null, user);
}));