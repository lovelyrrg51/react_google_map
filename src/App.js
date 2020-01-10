import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class GoogleMapApp extends Component{
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 44.8167302, lng: 20.3947898},
               {latitude: 44.7167302, longitude: 20.2947898},
               {latitude: 44.6167302, longitude: 20.1947898} ]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
      onClick={() => console.log("You clicked me!")}/>
    })
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={32}
        style={mapStyles}
        initialCenter={{ lat: 44.50, lng: 20.41}}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'Your API Key'
})(GoogleMapApp);