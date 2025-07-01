import React, { useEffect, useState } from 'react';
import { getResults } from '../services/api';

const Results = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await getResults();
                setResults(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Exam Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>Exam ID</th>
                        <th>User ID</th>
                        <th>Total Marks</th>
                        <th>Performance Metrics</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(result => (
                        <tr key={result.ReportID}>
                            <td>{result.ExamID}</td>
                            <td>{result.UserID}</td>
                            <td>{result.TotalMarks}</td>
                            <td>{result.PerformanceMetrics}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Results;