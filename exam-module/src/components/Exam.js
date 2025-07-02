import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Exam.css';

function Exam() {
    const { id } = useParams();
    const exams = {
        1: { name: 'Math Exam', questions: ['What is 2+2?', 'What is 3x3?'] },
        2: { name: 'Science Exam', questions: ['What is H2O?', 'What is gravity?'] },
        3: { name: 'History Exam', questions: ['Who was the first president?', 'What year was WWII?'] },
    };

    const exam = exams[id];
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    if (!exam) {
        return <h1>Exam not found</h1>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const randomScore = Math.floor(Math.random() * 11); // Random score between 0 and 10
        setScore(randomScore);
        setSubmitted(true);
    };

    return (
        <div>
            <h1>{exam.name}</h1>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    {exam.questions.map((question, index) => (
                        <div key={index} className="question-item">
                            <p>{question}</p>
                            <label>
                                <input type="radio" name={`question-${index}`} value="option1" /> Option 1
                            </label>
                            <br />
                            <label>
                                <input type="radio" name={`question-${index}`} value="option2" /> Option 2
                            </label>
                        </div>
                    ))}
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            ) : (
                <h2>Successfully Submitted! Your Score: {score}/10</h2>
            )}
        </div>
    );
}

export default Exam;