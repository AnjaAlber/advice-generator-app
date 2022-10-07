import React from 'react';
import logo from './logo.svg';
import './App.css';
import AdviceCard from './components/AdviceCard';

function App() {
  return (
    <div className="App">
      <AdviceCard data-testid="advice-card-element" />
    </div>
  );
}

export default App;
