import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const exams = [
        { id: 1, name: 'Math Exam' },
        { id: 2, name: 'Science Exam' },
        { id: 3, name: 'History Exam' },
    ];

    return (
        <div>
            <h1>Available Exams</h1>
            <ul>
                {exams.map((exam) => (
                    <li key={exam.id} className="exam-item">
                        <span>{exam.name}</span>
                        <Link to={`/exam/${exam.id}`}>
                            <button className="attend-button">Attend</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;