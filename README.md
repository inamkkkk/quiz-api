# Quiz API

A REST API built with Node.js to manage quizzes and questions.

## Features

*   Create, read, update, and delete quizzes.
*   Add, read, update, and delete questions for each quiz.
*   User authentication with JWT.

## Technologies

*   Node.js
*   Express.js
*   MongoDB (Mongoose)
*   JSON Web Tokens (JWT)
*   bcrypt

## Installation

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Configure environment variables (see `.env.example`).
4.  Start the server: `npm start`

## API Endpoints

### Authentication

*   `POST /api/auth/register`: Register a new user.
*   `POST /api/auth/login`: Log in an existing user.

### Quizzes

*   `GET /api/quizzes`: Get all quizzes.
*   `GET /api/quizzes/:id`: Get a specific quiz.
*   `POST /api/quizzes`: Create a new quiz.
*   `PUT /api/quizzes/:id`: Update a quiz.
*   `DELETE /api/quizzes/:id`: Delete a quiz.

### Questions

*   `GET /api/quizzes/:quizId/questions`: Get all questions for a quiz.
*   `GET /api/quizzes/:quizId/questions/:questionId`: Get a specific question for a quiz.
*   `POST /api/quizzes/:quizId/questions`: Create a new question for a quiz.
*   `PUT /api/quizzes/:quizId/questions/:questionId`: Update a question.
*   `DELETE /api/quizzes/:quizId/questions/:questionId`: Delete a question.

## Environment Variables

Create a `.env` file with the following variables:

*   `PORT`: The port the server will listen on (e.g., `3000`).
*   `MONGODB_URI`: The MongoDB connection string.
*   `JWT_SECRET`: A secret key for signing JWTs.
