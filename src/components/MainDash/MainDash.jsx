import React from 'react';
import Cards from '../Cards/Cards';
import Read from '../Read/Read';
import './MainDash.css';
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Read />
    </div>
  );
};

export default MainDash;
