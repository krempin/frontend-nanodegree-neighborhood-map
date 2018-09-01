import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import TempleMap from './components/TempleMap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <TempleMap />
      </div>
    );
  }
}

export default App;
