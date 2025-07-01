import React, { useEffect, useState } from 'react';
import { fetchExams } from '../services/api';

const ExamsList = () => {
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getExams = async () => {
            try {
                const data = await fetchExams();
                setExams(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getExams();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Exams List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Exam ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Total Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {exams.map(exam => (
                        <tr key={exam.ExamID}>
                            <td>{exam.ExamID}</td>
                            <td>{exam.Title}</td>
                            <td>{exam.Description}</td>
                            <td>{exam.Duration}</td>
                            <td>{exam.TotalMarks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExamsList;