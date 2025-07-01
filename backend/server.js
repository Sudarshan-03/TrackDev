
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/task.js';


dotenv.config();
const app = express();
const port =  5001; 
app.use(cors());
app.use(express.json());

import session from 'express-session';
import passport from 'passport';
import './config/passport.js';
app.use(session({ secret: 'trackdev', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
import authRoutes from './routes/auth.js';
app.use('/api/auth', authRoutes);


mongoose.connect(process.env.MONGO_URI)
 .then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

 app.use('/api/tasks', router);

  app.get('/', (req, res) => {
  res.send('🚀 TrackDev API is running!');
});


app.listen(port ,()=>{
    console.log(`server is running on http://localhost:${port}`)
})
  
  export default app;