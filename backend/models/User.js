// backend/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  githubId: { type: String, required: true, unique: true },
  email: { type: String },
});

export default mongoose.model('User', userSchema);