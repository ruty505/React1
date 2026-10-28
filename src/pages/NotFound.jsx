import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: 'red' }}>שגיאה 404</h2>
      <p>העמוד שחיפשת אינו קיים במערכת.</p>
      <Link to="/">חזרי לדשבורד הראשי</Link>
    </div>
  );
}

export default NotFound;