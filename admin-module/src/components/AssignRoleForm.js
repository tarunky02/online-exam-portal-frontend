import React, { useState } from 'react';

const AssignRoleForm = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('examiner');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle role assignment logic here
    console.log('Role Assigned:', { email, role });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Role:</label>
        <select value={role} onChange={e => setRole(e.target.value)} required>
          <option value="examiner">Examiner</option>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Assign Role</button>
    </form>
  );
};

export default AssignRoleForm;