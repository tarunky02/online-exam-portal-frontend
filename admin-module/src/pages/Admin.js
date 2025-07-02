import React, { useState } from 'react';
import ExamForm from '../components/ExamForm';
import AssignRoleForm from '../components/AssignRoleForm';

const cardStyle = {
  width: '280px',
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(26,35,126,0.08)',
  padding: '2rem 1.5rem',
  margin: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const imgStyle = {
  width: '64px',
  height: '64px',
  objectFit: 'cover',
  borderRadius: '50%',
  marginBottom: '1rem'
};

const Admin = () => {
  const [activeForm, setActiveForm] = useState('');

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Page</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'nowrap', // changed from 'wrap'
          overflowX: 'auto',  // allows horizontal scroll if needed
          width: '100%',
        }}
      >
        {/* Exam Card */}
        <div style={cardStyle}>
          <img src="https://img.icons8.com/color/96/000000/writing.png" alt="Exam" style={imgStyle} />
          <h3>Create Exam</h3>
          <button onClick={() => setActiveForm('exam')}>Open Form</button>
        </div>
        {/* Question Card */}
        <div style={cardStyle}>
          <img src="https://img.icons8.com/color/96/000000/question-mark.png" alt="Question" style={imgStyle} />
          <h3>Create Question</h3>
          <button onClick={() => setActiveForm('question')}>Open Form</button>
        </div>
        {/* Role Card */}
        <div style={cardStyle}>
          <img src="https://img.icons8.com/color/96/000000/administrator-male.png" alt="Role" style={imgStyle} />
          <h3>Assign Role</h3>
          <button onClick={() => setActiveForm('role')}>Open Form</button>
        </div>
      </div>
      {/* Forms Section */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {activeForm === 'exam' && (
          <div style={cardStyle}>
            <img src="https://img.icons8.com/color/96/000000/writing.png" alt="Exam" style={imgStyle} />
            <ExamForm />
          </div>
        )}
        {activeForm === 'question' && (
          <div style={cardStyle}>
            <img src="https://img.icons8.com/color/96/000000/question-mark.png" alt="Question" style={imgStyle} />
            {/* Replace below with your actual QuestionForm component */}
            <h2>Create Question</h2>
            <p>Question form goes here.</p>
          </div>
        )}
        {activeForm === 'role' && (
          <div style={cardStyle}>
            <img src="https://img.icons8.com/color/96/000000/administrator-male.png" alt="Role" style={imgStyle} />
            <AssignRoleForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;