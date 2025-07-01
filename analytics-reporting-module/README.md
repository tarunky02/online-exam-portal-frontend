# Analytics Reporting Module

## Overview
The Analytics Reporting Module is designed to provide insights into user performance and exam results. It allows administrators to view individual and aggregate performance reports, visualize data through charts, and export data for further analysis.

## Features
- **Report List**: Displays a list of performance reports generated for users.
- **Performance Chart**: Visualizes performance metrics in a graphical format for better understanding.
- **Analytics Dashboard**: Provides an interface for administrators to access various analytics features.

## Installation
To set up the Analytics Reporting Module, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd online-exam-portal-frontend/analytics-reporting-module
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Directory Structure
- **public/**: Contains the main HTML file for the module.
- **src/**: Contains all the source code for the module.
  - **components/**: Contains reusable components such as `ReportList` and `PerformanceChart`.
  - **pages/**: Contains the main pages for the module, including the `AnalyticsDashboard`.
  - **services/**: Contains API service functions to interact with the backend.
  - **App.tsx**: The main application component that sets up routing for the module.
  - **index.tsx**: The entry point for the React application.

## API Integration
The module interacts with the backend through REST APIs. Ensure that the backend services are running and accessible. The API service functions are defined in `src/services/api.ts`.

## Usage
Once the module is running, navigate to the Analytics Dashboard to view reports and performance metrics. Use the provided components to manage and visualize data effectively.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.