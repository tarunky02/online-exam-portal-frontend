import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

// User registration
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// User login
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Get user profile
export const getUserProfile = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Update user profile
export const updateUserProfile = async (userId, updatedData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/users/${userId}`, updatedData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};