import React, { useEffect, useState } from 'react';
import { fetchQuestions } from '../services/api';

const QuestionList: React.FC = () => {
    const [questions, setQuestions] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getQuestions = async () => {
            try {
                const data = await fetchQuestions();
                setQuestions(data);
            } catch (err) {
                setError('Failed to fetch questions');
            } finally {
                setLoading(false);
            }
        };

        getQuestions();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Question List</h2>
            <ul>
                {questions.map((question) => (
                    <li key={question.QuestionID}>
                        <p>{question.Text}</p>
                        <p>Category: {question.Category}</p>
                        <p>Difficulty: {question.Difficulty}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionList;