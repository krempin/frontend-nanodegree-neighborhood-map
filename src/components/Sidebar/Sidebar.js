import React, { Component } from 'react'
import List from './List'
import Search from './Search'

class Sidebar extends Component {
  render() {

    return (
      <div> 
        Sidebar
        <Search />
        <List />
      </div>
    );
  }
}


export default Sidebar