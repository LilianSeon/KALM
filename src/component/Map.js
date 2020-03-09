import React, {Component} from 'react';
import Materialize from "materialize-css";
import GoogleMapReact from 'google-map-react';

class Map extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userLatitude: '',
            userLongitude: '',
            accuracy: '',
            center: {
                lat: 48.86188011508717,
                lng: 2.3423987813293934
              },
            zoom: 12
        };
        
        let elems = document.querySelectorAll('.tooltipped');
        Materialize.Tooltip.init(elems,{});
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((pos) => { // Avoir la position de l'utilisateur
            var crd = pos.coords;
            this.setState({
                userLatitude: crd.latitude,
                userLongitude: crd.longitude,
                accuracy: crd.accuracy,
                center: {
                    lat: crd.latitude,
                    lng: crd.longitude
                }
            });
            console.log(this.state);
        }, (err) =>{
            console.warn(`ERREUR (${err.code}): ${err.message}`);
        }, {
            enableHighAccuracy: true,
            timeout: 6000,
            maximumAge: 0})
    }

    


    render(){
        return(
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyC1DDVW3qtV4y7dZm2iKN2ecQPfw7wS0go'}}
                center={this.state.center}
                defaultZoom={this.state.zoom}
                >            
                <img
                className="material-icons circle"
                width="45"
                height="45"
                src={JSON.parse(localStorage.image)}
                lat={this.state.userLatitude}
                lng={this.state.userLongitude}
                />
            </GoogleMapReact>
        )
    }

}

export default Map;