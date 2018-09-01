import React, { Component } from 'react'
import OffCanvas from 'react-aria-offcanvas';
import escapeRegExp from 'escape-string-regexp'
import List from './List'
import Search from './Search'

class Sidebar extends Component {


  /* Checks whether off canvas is open or closed */

  state = {
      isOpen: false,
  };

  open = () => {
      this.setState({ isOpen: true });
  };

  close = () => {
      this.setState({ isOpen: false });
  };

  /* Update the temples in the list and on the map by search query */

  onSearch = (query) => {
    this.props.temples.forEach(t =>
      this.props.updateTemple(t, { visible: false })
    )
    this.getTemplesByName(query).forEach(t =>
      this.props.updateTemple(t, { visible: true })
    )
  }

  /* Return all temples which match the query */

  getTemplesByName(name) {
    const match = new RegExp(escapeRegExp(name), 'i')
    return this.props.temples.filter(t => match.test(t.title))
  }

  render() {

    return (
      <div id="sidebar"> 

        <button
          id="menu-button"
          aria-label="Open Menu"
          aria-controls="menu"
          aria-expanded={this.state.isOpen}
          onClick={this.open}
        >
          Open Search
        </button>

        <OffCanvas
          isOpen={this.state.isOpen}
          onClose={this.close}
          labelledby="menu-button"
          height="100%"
        >

          <div className="offCanvasLayer">
            <button
              aria-label="Close Menu"
              aria-controls="menu"
              onClick={this.close}
            >
              Close Menu
            </button>

            <header>
                <img src="/logo_mini.jpg" alt="" />
                <h1><span className="highlighted-header">Popular temples</span> around Kyoto</h1>
            </header>
            
            <Search 
              onSearch={this.onSearch}
            />
            
            <List 
              setActiveTemple={this.props.setActiveTemple}
              temples={this.props.temples.filter(t => t.visible)} 
            />

          </div>
        </OffCanvas>
      </div>
    );
  }
}


export default Sidebar