import React from 'react';
import './App.css';
import InitiativeTableController from './Controller/InitiativeTableController';
import InitiativeTable from './View/InitiativeTable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Initiative Tracker
        </p>
      </header>
	  <InitiativeTableController/>
    </div>
  );
}

export default App;
