import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/question-bank'; // Adjust the port as needed

export const getQuestions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/questions`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching questions: ' + error.message);
    }
};

export const addQuestion = async (question) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/questions`, question);
        return response.data;
    } catch (error) {
        throw new Error('Error adding question: ' + error.message);
    }
};

export const updateQuestion = async (questionId, question) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/questions/${questionId}`, question);
        return response.data;
    } catch (error) {
        throw new Error('Error updating question: ' + error.message);
    }
};

export const deleteQuestion = async (questionId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/questions/${questionId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting question: ' + error.message);
    }
};