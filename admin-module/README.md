# Admin Module Documentation

## Overview
The Admin Module of the Online Exam Portal is designed to facilitate the management of exams, questions, and user roles. This module provides an interface for administrators to create, update, and delete exams and questions, as well as assign roles to users.

## Features
- **Exam Management**: Create, update, and delete exams.
- **Question Management**: Add, edit, and delete questions.
- **Role Assignment**: Assign roles to users (e.g., Admin, Examiner, Student).
- **Dashboard**: Overview of exams and user roles.

## File Structure
The Admin Module consists of the following key components:

- **public/index.html**: The main HTML file serving as the entry point for the React application.
- **src/components/**: Contains reusable components for the admin module.
  - **ExamForm.tsx**: Component for creating and editing exam details.
  - **QuestionForm.tsx**: Component for adding and editing questions.
  - **RoleAssignment.tsx**: Component for assigning roles to users.
- **src/pages/**: Contains page components for the admin module.
  - **Dashboard.tsx**: Displays the admin dashboard.
  - **ExamsList.tsx**: Lists all exams created by the admin.
- **src/services/api.ts**: Contains functions to interact with the backend API.
- **src/App.tsx**: Main application component that sets up routing.
- **src/index.tsx**: Entry point for the React application.

## Setup Instructions
1. **Clone the Repository**: Clone the Online Exam Portal repository to your local machine.
2. **Navigate to Admin Module**: Change directory to the `admin-module` folder.
3. **Install Dependencies**: Run `npm install` to install the required dependencies.
4. **Start the Application**: Use `npm start` to run the application locally.

## API Integration
The Admin Module interacts with the backend through REST APIs defined in `src/services/api.ts`. Ensure that the backend services are running and accessible to the frontend.

## Contribution
Contributions to the Admin Module are welcome. Please follow the standard procedure for submitting pull requests and ensure that your code adheres to the project's coding standards.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.