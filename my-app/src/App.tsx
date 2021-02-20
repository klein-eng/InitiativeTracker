import React from 'react';
import './App.css';
import InitiativeTable from './View/InitiativeTable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Initiative Tracker
        </p>
      </header>
	  <InitiativeTable/>
    </div>
  );
}

export default App;
