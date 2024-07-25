const express = require('express');
const router = express.Router();
const Result = require('../models/Result');
const User = require('../models/user');
const Quiz = require('../models/Quiz');


router.post('/store-result', async (req, res) => {
  const { userId, quizId, selectedAnswers, marks } = req.body;

  try {
    if (!userId || !quizId || !selectedAnswers || !marks) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const user = await user.findById(userId);
    const quiz = await Quiz.findById(quizId);
    if (!user || !quiz) {
      return res.status(404).json({ error: 'User or Quiz not found.' });
    }
    const newResult = new Result({
      user: userId,
      quiz: quizId,
      selectedAnswers,
      marks
    });
    await newResult.save();

    res.status(201).json({ message: 'Result stored successfully.', result: newResult });
  } catch (error) {
    console.error('Error storing result:', error);
    res.status(500).json({ error: 'Failed to store result.', message: error.message });
  }
});

router.get('/results/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const results = await Result.find({ user: userId }).exec();
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching results', error: error });
  }
});


module.exports = router;
