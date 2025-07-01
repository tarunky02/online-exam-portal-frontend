# Online Exam Portal Frontend

This repository contains the frontend implementation for the Online Exam Portal, which is designed to facilitate the creation, management, and evaluation of online assessments. The frontend is built using React and is structured into multiple modules, each serving a specific purpose within the application.

## Project Structure

The project is organized into the following modules:

- **Admin Module**: 
  - Manages exams, questions, and user roles.
  - Contains components for creating and editing exams and questions, as well as assigning roles to users.
  
- **User Module**: 
  - Handles user registration, login, and profile management.
  - Provides interfaces for users to register, log in, and view their profiles.
  
- **Exam Management Module**: 
  - Allows users to attempt exams and view their results.
  - Contains components for displaying exam questions and results.
  
- **Question Bank Module**: 
  - Manages a repository of categorized questions.
  - Provides functionality for importing and exporting questions.
  
- **Analytics and Reporting Module**: 
  - Generates performance reports and insights for users and admins.
  - Displays analytics dashboards and performance metrics.

## Setup Instructions

To set up the project locally, follow these steps:

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd online-exam-portal-frontend
   ```

2. **Install Dependencies**:
   For each module, navigate to the module directory and install the dependencies:
   ```
   cd admin-module
   npm install
   cd ../user-module
   npm install
   cd ../exam-management-module
   npm install
   cd ../question-bank-module
   npm install
   cd ../analytics-reporting-module
   npm install
   ```

3. **Run the Modules**:
   Each module can be run independently. Navigate to the module directory and start the development server:
   ```
   cd admin-module
   npm start
   ```

   Repeat for other modules as needed.

## Module Descriptions

- **Admin Module**: 
  - Contains functionalities for creating and managing exams and questions.
  
- **User Module**: 
  - Provides user authentication and profile management features.
  
- **Exam Management Module**: 
  - Facilitates the exam-taking process and displays results.
  
- **Question Bank Module**: 
  - Allows admins to manage questions and categories.
  
- **Analytics and Reporting Module**: 
  - Offers insights into user performance and exam statistics.

## Non-Functional Requirements

- The portal is designed to handle up to 500 concurrent users.
- It is scalable to accommodate multiple institutes and large user bases.
- Security measures are implemented for secure authentication and access control.
- The user interface is designed to be intuitive and responsive.

## Contribution

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.