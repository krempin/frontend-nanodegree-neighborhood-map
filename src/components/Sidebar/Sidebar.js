import React, { Component } from 'react'
import List from './List'
import Search from './Search'

class Sidebar extends Component {
  render() {

    return (
      <div id="sidebar"> 
        <header>
            <img src="/logo_mini.jpg" alt="" />
            <h1><span className="highlighted-header">Popular temples</span> around Kyoto</h1>
        </header>
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