import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchExamQuestions, submitExamResponses } from '../services/api';
import ExamAttempt from '../components/ExamAttempt';

const AttemptExam = () => {
    const { examId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [responses, setResponses] = useState({});

    useEffect(() => {
        const getExamQuestions = async () => {
            try {
                const data = await fetchExamQuestions(examId);
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching exam questions:', error);
            } finally {
                setLoading(false);
            }
        };

        getExamQuestions();
    }, [examId]);

    const handleResponseChange = (questionId, answer) => {
        setResponses((prevResponses) => ({
            ...prevResponses,
            [questionId]: answer,
        }));
    };

    const handleSubmit = async () => {
        try {
            await submitExamResponses(examId, responses);
            alert('Exam submitted successfully!');
        } catch (error) {
            console.error('Error submitting exam responses:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Attempt Exam</h1>
            {questions.map((question) => (
                <ExamAttempt
                    key={question.QuestionID}
                    question={question}
                    onResponseChange={handleResponseChange}
                />
            ))}
            <button onClick={handleSubmit}>Submit Exam</button>
        </div>
    );
};

export default AttemptExam;