import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const getLinkStyle = ({ isActive }) => {
    return {
      textDecoration: 'none',
      fontWeight: 'bold',
      padding: '8px 16px',
      borderRadius: '4px',
      backgroundColor: isActive ? '#4CAF50' : 'transparent',
      color: isActive ? 'white' : '#333'
    };
  };

  return (
    <nav style={{ 
      backgroundColor: '#f0f8ff', 
      padding: '15px', 
      marginBottom: '20px', 
      display: 'flex', 
      gap: '20px',
      borderBottom: '2px solid #ccc'
    }}>
      <NavLink to="/" style={getLinkStyle}>דשבורד</NavLink>
      <NavLink to="/students" style={getLinkStyle}>כל התלמידות</NavLink>
      <NavLink to="/excellent" style={getLinkStyle}>תלמידות מצטיינות</NavLink>
    </nav>
  );
}

export default Sidebar;