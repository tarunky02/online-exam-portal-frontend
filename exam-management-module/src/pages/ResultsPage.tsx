import React, { useEffect, useState } from 'react';
import { fetchResults } from '../services/api';

const ResultsPage = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getResults = async () => {
            try {
                const data = await fetchResults();
                setResults(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getResults();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Exam Results</h1>
            <ul>
                {results.map(result => (
                    <li key={result.ReportID}>
                        Exam ID: {result.ExamID}, User ID: {result.UserID}, Total Marks: {result.TotalMarks}, Performance Metrics: {result.PerformanceMetrics}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResultsPage;