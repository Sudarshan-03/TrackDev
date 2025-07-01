// backend/routes/tasks.js
import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// GET all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
});

// POST a task
router.post('/', async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

// PATCH complete toggle
router.patch('/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// DELETE a task
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

export default router;