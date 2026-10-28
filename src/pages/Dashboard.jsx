import React, { useState } from 'react';
import Statistics from '../components/Statistics';
import Header from '../components/Header';
import AllStudents from '../data/students';


function Dashboard() {
  const [showStats, setShowStats] = useState(true);

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


    </div>
  );
}

export default Dashboard;