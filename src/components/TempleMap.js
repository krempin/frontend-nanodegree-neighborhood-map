import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PictureBar from './PictureBar'
import { toast } from 'react-toastify'

class TempleMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeMarker: null,
      infoText: '',
      showInfoWindow: false
    }

    this.markers = []
  }

  componentDidMount() {

    window.gm_authFailure = () => toast.error("Map could not be loaded. Incorrect Google Maps API key. Please check the key.")

  }

  /* Select the appropriate marker if another temple has been selected */ 
  componentDidUpdate() {
    const activeTemple = this.props.temples.find(t => t.active)

    if (!activeTemple) {
      this.unselectMarker()
      return
    }

    if (!this.state.activeMarker || this.state.activeMarker.temple.id !== activeTemple.id) {
      const ma = this.markers.find(m => m && m.props.temple.id === activeTemple.id)
      ma && this.selectMarker(null, ma.marker)
    }
  }

  /* Create markers based on the temple states */
  getMarkers() {
    return this.props.temples.map(t => t.visible &&
      <Marker
        key={t.id} 
        temple={t} 
        name={t.title}
        onClick={this.selectMarker}
        position={t.position} 
        ref={m => this.markers[t.id] = m}
      /> 
    )
  }

  /* Set markers as active or incative */
  selectMarker = (props, marker) => {
    if (this.state.activeMarker) {
      this.state.activeMarker.setAnimation(0)
    }   

    marker.setAnimation(1)
    this.props.setActiveTemple(marker.temple)

    this.setState({
      activeMarker: marker,
      infoText: marker.temple.title,
      showInfoWindow: true
    })
  }

  unselectMarker = () => {
    this.props.setActiveTemple()
    
    if (this.state.activeMarker) {
      this.state.activeMarker.setAnimation(0)
    }

    if (this.state.showInfoWindow) {
      this.setState({
        activeMarker: null,
        showInfoWindow: false,
      })
    }
  }

  render() {
    const activeTemple = this.props.temples.find(t => t.active)

    return (
      <div role="application" aria-label="Google Maps application for showing famous temples in kyoto"> 
        <Map 
          temples={this.props.temples}
          initialCenter={{lat: 35.02107, lng: 135.75385}} 
          onClick={this.unselectMarker}
          google={this.props.google} // listen for clicks on the map
          zoom={12} // zoom level
        >
          {this.getMarkers()}

          <InfoWindow 
            onClose={this.unselectMarker}
            marker={this.state.activeMarker}
            visible={this.state.showInfoWindow}
          >
            <div>
              {this.state.infoText}
            </div>  
          </InfoWindow>

          <PictureBar 
            active={activeTemple != null}
            query={activeTemple && activeTemple.unsplashQuery}
            unselect={this.unselectMarker}
          />

        </Map>
      </div>
    );
  }
}

export {TempleMap}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBmQO60Q-VZ2VKlFxSUxYZy-GMaj1aWxVM')
})(TempleMap)