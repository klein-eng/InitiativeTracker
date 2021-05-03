import React from 'react';
import './App.css';
import InitiativeTableController from './Controller/InitiativeTableController';

class App extends React.Component {
  componentDidMount() {
    document.title = "Initiative"
  }

  render() {
    return (
      <InitiativeTableController/>
    );
  }
}

export default App;
