import React from 'react';

function StudentCard({ student }) {
  return (
    <div className='student-card'>
      <h3>{student.name}</h3>
      <p><strong>מזהה:</strong> {student.id}</p>
      <p><strong>ציון:</strong> {student.grade}</p>
      <p><strong>נוכחות:</strong> {student.attendance} שיעורים</p>
      <p><strong>סטטוס:</strong> {student.active ? "פעילה" : "לא פעילה"}</p>
      {student.grade >= 90 && <p>מצטיינת</p>}
      {student.grade < 60 && <p>נדרש שיפור</p>}
    </div>
  );
}

export default StudentCard;