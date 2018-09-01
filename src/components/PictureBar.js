import React, { Component } from 'react'

class PictureBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pictures: [],
    }
  }

  render() {
    return (
      <div id="image-bar" className={this.props.active ? 'act' : ''}>
        Picture goes here
      </div>
    )
  }
}

export default PictureBar