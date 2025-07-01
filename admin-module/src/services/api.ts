import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

// Function to create a new exam
export const createExam = async (examData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/exams`, examData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to update an existing exam
export const updateExam = async (examId, examData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/exams/${examId}`, examData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to delete an exam
export const deleteExam = async (examId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/exams/${examId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to fetch all exams
export const fetchExams = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/exams`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to fetch a single exam by ID
export const fetchExamById = async (examId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/exams/${examId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to assign roles to users
export const assignRole = async (userId, roleData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/${userId}/roles`, roleData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};