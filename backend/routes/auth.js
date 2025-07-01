import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'trackdev123';
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    // Check if req.user exists
    if (!req.user || !req.user._id) {
      return res.redirect('/?error=UserNotFound');
    }
    //  Generate JWT from GitHub user
    const token = jwt.sign({ id: req.user._id }, JWT_SECRET, { expiresIn: '7d' });

    //  Redirect to frontend with token
    res.redirect(`http://localhost:5173/github-success?token=${token}`);
  }
);

export default router;