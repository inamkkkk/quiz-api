const Quiz = require('../models/Quiz');
const Question = require('../models/Question');

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createQuiz = async (req, res) => {
  const quiz = new Quiz({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const newQuiz = await quiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    quiz.title = req.body.title || quiz.title;
    quiz.description = req.body.description || quiz.description;
    const updatedQuiz = await quiz.save();
    res.json(updatedQuiz);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    await Question.deleteMany({ quizId: req.params.id });
    res.json({ message: 'Quiz and associated questions deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getQuizQuestions = async (req, res) => {
  try {
    const questions = await Question.find({ quizId: req.params.quizId });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getQuizQuestion = async (req, res) => {
  try {
    const question = await Question.findOne({ quizId: req.params.quizId, _id: req.params.questionId });
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createQuizQuestion = async (req, res) => {
  const question = new Question({
    quizId: req.params.quizId,
    text: req.body.text,
    options: req.body.options,
    correctAnswer: req.body.correctAnswer,
  });
  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateQuizQuestion = async (req, res) => {
  try {
    const question = await Question.findOne({ quizId: req.params.quizId, _id: req.params.questionId });
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    question.text = req.body.text || question.text;
    question.options = req.body.options || question.options;
    question.correctAnswer = req.body.correctAnswer || question.correctAnswer;
    const updatedQuestion = await question.save();
    res.json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteQuizQuestion = async (req, res) => {
  try {
    const question = await Question.findOneAndDelete({ quizId: req.params.quizId, _id: req.params.questionId });
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json({ message: 'Question deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};