import React, { Component } from 'react'
import List from './List'
import Search from './Search'

class Sidebar extends Component {
  render() {

    return (
      <div id="sidebar"> 
        Sidebar
        <Search />
        <List 
            setActiveTemple={this.props.setActiveTemple}
            temples={this.props.temples.filter(t => t.visible)} 
        />
      </div>
    );
  }
}


export default Sidebar