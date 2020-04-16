import React from 'react';
import Routes from '../routes'
import './App.css';


function App() {
  return (
    <>
      <div className="p">
        <p className="h1">Coin Converter</p>
      </div>
      <div id="app">
        <Routes/>
      </div>    
    </>
  );
}

export default App;
