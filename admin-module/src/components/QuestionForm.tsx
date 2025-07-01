import React, { useState } from 'react';

const QuestionForm = ({ onSubmit, initialData }) => {
    const [questionText, setQuestionText] = useState(initialData ? initialData.text : '');
    const [category, setCategory] = useState(initialData ? initialData.category : '');
    const [difficulty, setDifficulty] = useState(initialData ? initialData.difficulty : '');
    const [correctAnswer, setCorrectAnswer] = useState(initialData ? initialData.correctAnswer : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const questionData = {
            text: questionText,
            category,
            difficulty,
            correctAnswer,
        };
        onSubmit(questionData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Question Text:</label>
                <input
                    type="text"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Category:</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Difficulty:</label>
                <input
                    type="text"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Correct Answer:</label>
                <input
                    type="text"
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default QuestionForm;