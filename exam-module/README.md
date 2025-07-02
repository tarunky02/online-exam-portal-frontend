# React Exam App

This project is a simple React application that allows users to view a list of exams and attend them. Each exam consists of multiple-choice questions.

## Project Structure

```
react-exam-app
├── src
│   ├── components
│   │   ├── Navbar.js        # Contains the navigation bar with links
│   │   ├── Home.js          # Displays the list of exams
│   │   └── Exam.js          # Displays the exam name and questions
│   ├── App.js               # Main application component
│   └── index.js             # Entry point of the React application
├── public
│   └── index.html           # Main HTML file for the application
├── package.json             # Configuration file for npm
└── README.md                # Documentation for the project
```

## Features

- **Home Page**: Displays a list of available exams with an "Attend" button for each exam.
- **Exam Page**: Shows the exam name and a list of multiple-choice questions. Includes a submit button to submit answers.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd react-exam-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see!