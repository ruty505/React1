import React from 'react';

function Statistics({ students }) {
  const totalStudents = students.length;
  const activeStudents = students.filter(student => student.active).length;

  let averageGrade = 0;
  if (totalStudents > 0) {
    const sumGrades = students.reduce((sum, student) => sum + student.grade, 0);
    averageGrade = (sumGrades / totalStudents).toFixed(2);
  }

  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
      <h3>נתונים סטטיסטיים</h3>
      <p><strong>סה"כ תלמידות:</strong> {totalStudents}</p>
      <p><strong>תלמידות פעילות:</strong> {activeStudents}</p>
      <p><strong>ממוצע ציונים:</strong> {averageGrade}</p>
    </div>
  );
}

export default Statistics;