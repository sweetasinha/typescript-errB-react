import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components';
import ErrorBoundary from './Common/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <HomePage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
