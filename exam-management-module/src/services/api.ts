import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

// Function to fetch exam questions
export const fetchExamQuestions = async (examId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/exams/${examId}/questions`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching exam questions: ' + error.message);
    }
};

// Function to submit exam responses
export const submitExamResponses = async (examId, userId, responses) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/exams/${examId}/responses`, {
            userId,
            responses,
        });
        return response.data;
    } catch (error) {
        throw new Error('Error submitting exam responses: ' + error.message);
    }
};

// Function to fetch exam results
export const fetchExamResults = async (examId, userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/exams/${examId}/results`, {
            params: { userId },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching exam results: ' + error.message);
    }
};