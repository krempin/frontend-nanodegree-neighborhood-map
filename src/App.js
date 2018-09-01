import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';

import TempleState from './state'
import Sidebar from './components/Sidebar/Sidebar'
import TempleMap from './components/TempleMap'

class App extends Component {
  	constructor() {
    	super()
    	this.state = TempleState
  	}

	/* Update temples state by its ID */

	updateTemple = (temple, values) => {
	    if (temple) {
	      	this.setState({
	        	temples: this.state.temples.map(t =>
	          	t.id === temple.id ? Object.assign(t, values) : t
	        	)
	      	})
	    }
	}

  	/* Sets the state of the clicked temple as active and deactives the previous one */

  	setActiveTemple = (temple) => {
    	this.updateTemple(
      		this.state.temples.find(t => t.active), 
      		{ active: false }
    	)

    	if (temple) {
      		this.updateTemple(temple, {active: true})
    	}
  	}

  	render() {
    	return (
    		<div className="App">
      		<Sidebar
            temples={this.state.temples} 
            setActiveTemple={this.setActiveTemple}
            updateTemple={this.updateTemple} 
          />
      		<TempleMap 
      			temples={this.state.temples} 
      			setActiveTemple={this.setActiveTemple}
            updateTemple={this.updateTemple} 
      		/>

          <ToastContainer />

    		</div>
    	);
  	}
}

export default App;