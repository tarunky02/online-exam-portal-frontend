import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const ExamAttempt = () => {
    const { examId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await api.get(`/exams/${examId}/questions`);
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [examId]);

    const handleChange = (questionId, answer) => {
        setResponses({
            ...responses,
            [questionId]: answer,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post(`/exams/${examId}/submit`, { responses });
            alert('Exam submitted successfully!');
        } catch (error) {
            console.error('Error submitting exam:', error);
        }
    };

    if (loading) {
        return <div>Loading questions...</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Attempt Exam</h2>
            {questions.map((question) => (
                <div key={question.id}>
                    <p>{question.text}</p>
                    <input
                        type="text"
                        onChange={(e) => handleChange(question.id, e.target.value)}
                    />
                </div>
            ))}
            <button type="submit">Submit Exam</button>
        </form>
    );
};

export default ExamAttempt;