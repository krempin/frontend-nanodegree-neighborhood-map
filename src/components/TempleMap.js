import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

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

  /* Create markers based on the temple states */

  getMarkers() {
    return this.props.temples.map(t => t.visible &&
      <Marker
        key={t.id} 
        temple={t} 
        name={t.title}
        onClick={this.selectMarker}
        position={t.position} 
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

    this.setState({
      activeMarker: null,
      showInfoWindow: false
    })
  }

  render() {

    return (
      <div> 
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

        </Map>
      </div>
    );
  }
}

export {TempleMap}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBmQO60Q-VZ2VKlFxSUxYZy-GMaj1aWxVM')
})(TempleMap)