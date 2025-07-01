import React, { useEffect, useState } from 'react';
import { fetchExams, fetchUserRoles } from '../services/api';

const Dashboard = () => {
    const [exams, setExams] = useState([]);
    const [userRoles, setUserRoles] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const examsData = await fetchExams();
            const rolesData = await fetchUserRoles();
            setExams(examsData);
            setUserRoles(rolesData);
        };

        loadData();
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Exams Overview</h2>
            <ul>
                {exams.map(exam => (
                    <li key={exam.ExamID}>{exam.Title} - {exam.TotalMarks} Marks</li>
                ))}
            </ul>
            <h2>User Roles</h2>
            <ul>
                {userRoles.map(role => (
                    <li key={role.RoleID}>{role.RoleName}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;