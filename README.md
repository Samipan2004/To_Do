# To-Do Application

This project is a full-stack To-Do application built with React for the frontend and Node.js with Express for the backend. It allows users to register, log in, and manage their to-do tasks.

## Features

- User registration and login
- Add, update, and delete to-do tasks
- Mark tasks as completed
- Responsive design

## Technologies Used

### Frontend

- React
- React Router
- Axios
- CSS

### Backend

- Node.js
- Express
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Navigate to the project directory:
    ```sh
    cd to-do-app
    ```
2. Install dependencies for the frontend:
    ```sh
    cd frontend
    npm install
    ```
3. Install dependencies for the backend:
    ```sh
    cd ../backend
    npm install
    ```

### Running the Application

1. Start the backend server:
    ```sh
    cd backend
    npm start
    ```

2. Start the frontend server:
    ```sh
    cd frontend
    npm start
    ```

3. Open your browser and navigate to http://localhost:3000.

## API Endpoints

### User Routes

1. POST /register - Register a new user

2. POST /login - Login a user

### Todo Routes

1. GET /todos/:userId - Get all todos for a user

2. POST /todos/:userId - Add a new todo

3. PATCH /todos/:userId/:todoId - Update a todo

4. DELETE /todos/:userId/:todoId - Delete a todo
