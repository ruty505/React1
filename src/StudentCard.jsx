import React from 'react';
import { Link } from 'react-router-dom';

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p><strong>ציון:</strong> {student.grade}</p>
      <p><strong>נוכחות:</strong> {student.attendance} ימים</p>
      
      <div style={{ marginTop: '15px' }}>
        <Link 
          to={`/students/${student.id}`} 
          style={{ 
            color: '#0066cc', 
            textDecoration: 'underline',
            fontWeight: 'bold' 
          }}
        >
          לצפייה בפרטים
        </Link>
      </div>
    </div>
  );
}

export default StudentCard;