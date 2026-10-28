import React from 'react';
import StudentList from '../components/StudentList';
import AllStudents from '../data/students';

function Students() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>כל התלמידות</h2>
      <StudentList students={AllStudents} />
    </div>
  );
}

export default Students;