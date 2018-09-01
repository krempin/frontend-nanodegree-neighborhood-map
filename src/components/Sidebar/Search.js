import React, { Component } from 'react'

class Search extends Component {
  render() {

    return (
      <div className="searchInput">
        <input 
          type="text" 
          name="searchquery"
          placeholder="Search by temple"
        />

      </div>
    );
  }
}


export default Search