import React, { useEffect, useState } from 'react';
import { fetchReports } from '../services/api';

const ReportList: React.FC = () => {
    const [reports, setReports] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getReports = async () => {
            try {
                const data = await fetchReports();
                setReports(data);
            } catch (err) {
                setError('Failed to fetch reports');
            } finally {
                setLoading(false);
            }
        };

        getReports();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Performance Reports</h2>
            <ul>
                {reports.map(report => (
                    <li key={report.ReportID}>
                        Exam ID: {report.ExamID}, User ID: {report.UserID}, Total Marks: {report.TotalMarks}, Performance Metrics: {report.PerformanceMetrics}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReportList;