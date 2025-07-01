# Question Bank Module

## Overview
The Question Bank Module is designed to manage a repository of categorized questions for the online exam portal. This module allows administrators to add, edit, delete, and organize questions based on categories and difficulty levels.

## Features
- **Question Management**: Create, update, and delete questions.
- **Import/Export Functionality**: Bulk import and export of questions.
- **Categorization**: Organize questions by category and difficulty level.

## File Structure
The Question Bank Module consists of the following key files:

- **public/index.html**: The main HTML file for the question bank module.
- **src/components/QuestionList.tsx**: Component to display a list of questions.
- **src/components/ImportExport.tsx**: Component to handle the import and export of questions.
- **src/pages/QuestionBank.tsx**: The main page for managing the question bank.
- **src/services/api.ts**: Functions to interact with the backend API for question management.
- **src/App.tsx**: The main application component for the question bank module.
- **src/index.tsx**: The entry point for the question bank module's React application.

## Setup Instructions
1. **Clone the Repository**: Clone the online exam portal repository to your local machine.
2. **Navigate to the Question Bank Module**: Change directory to `question-bank-module`.
3. **Install Dependencies**: Run `npm install` to install the required dependencies.
4. **Start the Application**: Use `npm start` to run the application locally.

## API Endpoints
The Question Bank Module interacts with the backend through the following API endpoints:
- `GET /api/questions`: Fetch all questions.
- `POST /api/questions`: Add a new question.
- `PUT /api/questions/:id`: Update an existing question.
- `DELETE /api/questions/:id`: Delete a question.

## Usage
- Access the Question Bank Module through the designated route in the application.
- Use the provided components to manage questions effectively.

## Future Enhancements
- Implement advanced search and filtering options for questions.
- Add user roles and permissions for question management.

## License
This project is licensed under the MIT License.