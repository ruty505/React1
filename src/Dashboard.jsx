import React, { useState } from 'react';
import Statistics from './Statistics';
import Header from './Header';
import StudentList from './StudentList';

const AllStudents = [
  { id: 1, name: "שרה", grade: 95, attendance: 20, active: true },
  { id: 2, name: "רבקה", grade: 55, attendance: 12, active: true },
  { id: 3, name: "רחל", grade: 80, attendance: 18, active: false },
  { id: 4, name: "לאה", grade: 92, attendance: 19, active: true },
];

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [showStats, setShowStats] = useState(true);

  const filteredStudents = AllStudents.filter((student) => {
    const matchSearch = student.name.includes(searchTerm);
    const matchActive = showActiveOnly ? student.active : true;
    return matchSearch && matchActive;
  });

  return (
    <div style={{ padding: '20px' }}>
      <Header />
      
      {/* כפתור הצגת הסטטיסטיקות */}
      <button 
        onClick={() => setShowStats(!showStats)} 
        style={{ marginBottom: '15px', padding: '5px 10px' }}
      >
        {showStats ? "הסתר סטטיסטיקות" : "הצג סטטיסטיקות"}
      </button>

      {showStats && <Statistics students={AllStudents} />}

      {/* אזור החיפוש והסינון */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="חיפוש לפי שם" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '5px', marginLeft: '10px' }}
        />

        <button onClick={() => setShowActiveOnly(true)} style={{ marginLeft: '5px' }}>
          הצג פעילות בלבד
        </button>
        <button onClick={() => setShowActiveOnly(false)}>
          הצג הכל
        </button>
      </div>

      <StudentList students={filteredStudents} />
    </div>
  );
}

export default Dashboard;