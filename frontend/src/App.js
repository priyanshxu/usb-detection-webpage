import React from 'react';
import './App.css';
import USBDetection from './component/USBDetection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>USB Drive Detection</h1>
        <p>Connect a USB drive to see the details and logs below.</p>
        <USBDetection />
      </header>
    </div>
  );
}

export default App;
