import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify'

import Sidebar from './components/Sidebar/Sidebar'
import TempleMap from './components/TempleMap'
import TempleState from './state'

import 'react-toastify/dist/ReactToastify.min.css'
import './App.css'

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
        <div class="loader">The map can not be loaded<br />
          You need an internet connection to use the map</div>
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
    )
  }
}

export default App