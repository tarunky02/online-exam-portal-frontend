import React, { useEffect, useState } from 'react';
import { fetchQuestions } from '../services/api';
import QuestionList from '../components/QuestionList';
import ImportExport from '../components/ImportExport';

const QuestionBank = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const getQuestions = async () => {
            const data = await fetchQuestions();
            setQuestions(data);
        };

        getQuestions();
    }, []);

    return (
        <div>
            <h1>Question Bank</h1>
            <ImportExport />
            <QuestionList questions={questions} />
        </div>
    );
};

export default QuestionBank;