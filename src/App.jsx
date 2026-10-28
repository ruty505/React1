import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import ExcellentStudents from './pages/ExcellentStudents';
import NotFound from './pages/NotFound';
import StudentDetails from './pages/StudentDetails'; 
import Sidebar from './components/Sidebar';
import './style.css';
function App() {
  return (
    <BrowserRouter>
    <Sidebar />
      <Routes>
        {/* נתיב ראשי - דשבורד */}
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/students" element={<Students />} />   
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/excellent" element={<ExcellentStudents />} />
        
        {/* נתיב שלא מוכר - שגיאה 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;