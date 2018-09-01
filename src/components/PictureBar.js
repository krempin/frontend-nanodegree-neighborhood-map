import React, { Component } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

class PictureBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pictures: [],
    }

    this.baseUrl = 'https://api.unsplash.com/search/photos?page=1'
  }

  /* Initializes an update of the displayed images - but only if there is a changed
    query to prevent never ending request-loops. */

  componentDidUpdate(prevProps) {
    this.props.query && this.props.query !== prevProps.query && this.loadImage()
  }

  /* Updates the component-state with the results of the current query-property
    or inform the user about connection-problems. */

  loadImage() {
    axios
      .get(`${this.baseUrl}&query=${this.props.query}`, {
        // dev-hint: remove headers for testing the error-case
        headers: {
          Authorization: 'Client-ID 779f7137119bb361f91f6bce7a9f888d34db054abfc1714b5ec10185e5c0f8d8'
        }
      })
      .then(res => {
        console.log(res.data.results);
        
        this.setState({
          // good place to sort them (e.g by likes)
          pictures: res.data.results
        })
      })
      .catch(e => {
        this.props.unselect()        
        toast.error("Couldn't load related images. Sorry :(")
      })
  }

  render() {
    return (
      <div id="image-bar" className={this.props.active ? 'act' : ''}>
        {this.state.pictures.map(p =>
          <a key={p.id} 
            href={p.urls.raw}
            target="_blank"
            className="picture" 
            style={{backgroundImage: `url(${p.urls.small})`}}>

            <span className="info-overlay">
              <span className="likes" data-likes={p.likes}></span>
              <span className="descr">{p.description}</span>
            </span>
          </a> 
        )}
        <div class="credit">
          Images provided by <a href="https://unsplash.com/" target="_blank">Unsplash.com</a>
        </div>
      </div>
    )
  }
}

export default PictureBar