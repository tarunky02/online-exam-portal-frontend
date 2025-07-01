import React from 'react';
import { Bar } from 'react-chartjs-2';

interface PerformanceChartProps {
    data: {
        labels: string[];
        values: number[];
    };
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Performance Metrics',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Performance Chart</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default PerformanceChart;