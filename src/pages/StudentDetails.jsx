import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AllStudents from '../data/students';

function StudentDetails() {
  // שולפים את מזהה התלמידה משורת הכתובת
  const { id } = useParams();

  // מחפשים את התלמידה ברשימה. 
  const student = AllStudents.find(s => s.id === parseInt(id));

  if (!student) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>תלמידה לא נמצאה</h2>
        <Link to="/students">חזרי לרשימת התלמידות</Link>
      </div>
    );
  }

  // תצוגת פרטי התלמידה
  return (
    <div style={{ padding: '20px' }}>
      <h2>פרטי תלמידה: {student.name}</h2>
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', maxWidth: '300px' }}>
        <p><strong>מזהה:</strong> {student.id}</p>
        <p><strong>ציון:</strong> {student.grade}</p>
        <p><strong>נוכחות:</strong> {student.attendance} ימים</p>
        <p><strong>סטטוס:</strong> {student.active ? "פעילה" : "לא פעילה"}</p>
      </div>
      <br />
      <Link to="/students">חזרי לרשימת התלמידות</Link>
    </div>
  );
}

export default StudentDetails;