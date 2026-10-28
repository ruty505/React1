import React from 'react';
import StudentList from '../components/StudentList';
import AllStudents from '../data/students';

function ExcellentStudents() {
  // סינון הרשימה: שומרים רק תלמידות עם ציון 90 ומעלה
  const excellentList = AllStudents.filter(student => student.grade >= 90);

  return (
    <div style={{ padding: '20px' }}>
      <h2>תלמידות מצטיינות</h2>
      {/* מעבירים לקומפוננטת התצוגה רק את הרשימה המסוננת */}
      <StudentList students={excellentList} />
    </div>
  );
}

export default ExcellentStudents;