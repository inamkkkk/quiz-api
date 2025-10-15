const express = require('express');
const quizController = require('../controllers/quizController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', quizController.getAllQuizzes);
router.get('/:id', quizController.getQuiz);
router.post('/', authenticate, quizController.createQuiz);
router.put('/:id', authenticate, quizController.updateQuiz);
router.delete('/:id', authenticate, quizController.deleteQuiz);

router.get('/:quizId/questions', quizController.getQuizQuestions);
router.get('/:quizId/questions/:questionId', quizController.getQuizQuestion);
router.post('/:quizId/questions', authenticate, quizController.createQuizQuestion);
router.put('/:quizId/questions/:questionId', authenticate, quizController.updateQuizQuestion);
router.delete('/:quizId/questions/:questionId', authenticate, quizController.deleteQuizQuestion);

module.exports = router;