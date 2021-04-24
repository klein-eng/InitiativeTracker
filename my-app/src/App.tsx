import React from 'react';
import './App.css';
import InitiativeTableController from './Controller/InitiativeTableController';

class App extends React.Component {
  componentDidMount() {
    document.title = "Initiative"
  }

  render() {
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
}

export default App;
