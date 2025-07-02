import React, { useState } from 'react';

const ExamForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [totalMarks, setTotalMarks] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Exam Created:', { title, description, duration, totalMarks });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Duration (in minutes):</label>
                <input 
                    type="number" 
                    value={duration} 
                    onChange={(e) => setDuration(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Total Marks:</label>
                <input 
                    type="number" 
                    value={totalMarks} 
                    onChange={(e) => setTotalMarks(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Create Exam</button>
        </form>
    );
};

export default ExamForm;