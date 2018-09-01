import React, { Component } from 'react'

class Search extends Component {

  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  clearSearch = () => {
    this.props.onSearch("")
    this.input.current.value = ""
  }

  render() {

    return (
      <div className="searchInput">
        <input 
          ref={this.input}
          type="text" 
          name="searchquery"
          placeholder="Search by temple"
          onChange={e => this.props.onSearch(e.target.value)}
        />

      </div>
    );
  }
}


export default Search