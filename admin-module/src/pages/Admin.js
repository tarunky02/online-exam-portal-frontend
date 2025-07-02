import React, { useState } from 'react';
import ExamForm from '../components/ExamForm';
import AssignRoleForm from '../components/AssignRoleForm';

const Admin = () => {
  const [showExamForm, setShowExamForm] = useState(false);
  const [showRoleForm, setShowRoleForm] = useState(false);

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Page</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => { setShowExamForm(true); setShowRoleForm(false); }}>Create Exam</button>
        <button onClick={() => { setShowRoleForm(true); setShowExamForm(false); }}>Assign Role</button>
      </div>
      {showExamForm && <ExamForm />}
      {showRoleForm && <AssignRoleForm />}
    </div>
  );
};

export default Admin;