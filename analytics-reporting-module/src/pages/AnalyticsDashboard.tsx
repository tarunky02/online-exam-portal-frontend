import React, { useEffect, useState } from 'react';
import { fetchReports } from '../services/api';
import ReportList from '../components/ReportList';
import PerformanceChart from '../components/PerformanceChart';

const AnalyticsDashboard = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadReports = async () => {
            try {
                const data = await fetchReports();
                setReports(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadReports();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Analytics Dashboard</h1>
            <PerformanceChart reports={reports} />
            <ReportList reports={reports} />
        </div>
    );
};

export default AnalyticsDashboard;