import React, { Component } from 'react';
import './App.css';
import TempleState from './state'
import Sidebar from './components/Sidebar/Sidebar'
import TempleMap from './components/TempleMap'

class App extends Component {
  	constructor() {
    	super()
    	this.state = TempleState
  	}

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
