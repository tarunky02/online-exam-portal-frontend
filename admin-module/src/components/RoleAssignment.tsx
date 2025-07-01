import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RoleAssignment = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedRole, setSelectedRole] = useState('');

    useEffect(() => {
        fetchUsers();
        fetchRoles();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/users'); // Adjust the URL as needed
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const fetchRoles = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/roles'); // Adjust the URL as needed
            setRoles(response.data);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

    const handleRoleAssignment = async () => {
        try {
            await axios.post('http://localhost:5000/api/assign-role', {
                userId: selectedUser,
                role: selectedRole,
            });
            alert('Role assigned successfully!');
            fetchUsers(); // Refresh the user list
        } catch (error) {
            console.error('Error assigning role:', error);
        }
    };

    return (
        <div>
            <h2>Role Assignment</h2>
            <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
                <option value="">Select User</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
            <select onChange={(e) => setSelectedRole(e.target.value)} value={selectedRole}>
                <option value="">Select Role</option>
                {roles.map((role) => (
                    <option key={role.id} value={role.name}>{role.name}</option>
                ))}
            </select>
            <button onClick={handleRoleAssignment}>Assign Role</button>
        </div>
    );
};

export default RoleAssignment;