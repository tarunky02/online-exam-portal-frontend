import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

// Function to fetch performance reports
export const fetchPerformanceReports = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/reports`);
        return response.data;
    } catch (error) {
        console.error('Error fetching performance reports:', error);
        throw error;
    }
};

// Function to fetch a specific report by ID
export const fetchReportById = async (reportId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/reports/${reportId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching report with ID ${reportId}:`, error);
        throw error;
    }
};

// Function to export reports
export const exportReports = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/reports/export`, {
            responseType: 'blob', // Important for file download
        });
        return response.data;
    } catch (error) {
        console.error('Error exporting reports:', error);
        throw error;
    }
};