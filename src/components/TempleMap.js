import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class TempleMap extends Component {
  render() {

    return (
      <div> 
        <Map 
          temples={this.props.temples}
          initialCenter={{lat: 35.02107, lng: 135.75385}} 
          onClick={this.unselectMarker}
          google={this.props.google} // listen for clicks on the map
          zoom={12} // zoom level
        />
      </div>
    );
  }
}

export {TempleMap}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBmQO60Q-VZ2VKlFxSUxYZy-GMaj1aWxVM')
})(TempleMap)