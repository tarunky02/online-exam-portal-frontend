import React, { useState } from 'react';

const ExamForm = () => {
    const [examDetails, setExamDetails] = useState({
        title: '',
        description: '',
        duration: '',
        totalMarks: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExamDetails({
            ...examDetails,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call API to save exam details
        console.log('Exam Details Submitted:', examDetails);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={examDetails.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={examDetails.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Duration (in minutes):</label>
                <input
                    type="number"
                    name="duration"
                    value={examDetails.duration}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Total Marks:</label>
                <input
                    type="number"
                    name="totalMarks"
                    value={examDetails.totalMarks}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Save Exam</button>
        </form>
    );
};

export default ExamForm;