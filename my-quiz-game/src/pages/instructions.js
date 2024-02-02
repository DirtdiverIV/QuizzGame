// src/pages/instructions.js
import React from 'react';
import Header from '../components/Header';
import InstructionsComponent from '../components/InstructionsComponent';
import '../styles.css'; 

const Instructions = () => {
  return (
    <div>
      <Header title="Quiz Game" />
      <InstructionsComponent />
    </div>
  );
};

export default Instructions;