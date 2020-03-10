import React, {Component} from 'react';
import Materialize from "materialize-css";
import GoogleMapReact from 'google-map-react';
import SalleService from '../service/salle.service';
import '../css/Map.css';

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
            zoom: 12,
            salles: [],
            autocomplete: {}
        };
        
        let elems = document.querySelectorAll('.tooltipped');
        Materialize.Tooltip.init(elems,{});
    }

    async componentDidMount(){
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
        }, (err) =>{
            console.warn(`ERREUR (${err.code}): ${err.message}`);
        }, {
            enableHighAccuracy: true,
            timeout: 6000,
            maximumAge: 0})

            let response = await SalleService.list(); // Avoir la liste des salles
            if(response.ok){
                let data = await response.json();
                this.setState({
                    salles: data.salles,
                    autocomplete: data.salles
                });
                console.log(this.state);
            }else{
                console.log(response.error);
            }

            var dataSalle = {}; // Remplir un obj pour l'autocomplete
            for (var i = 0; i < this.state.salles.length; i++) {
                dataSalle[this.state.salles[i].nom] = this.state.salles[i].image;
            }

        // Autocomplete options
        let elems = document.querySelectorAll('.autocomplete');
        Materialize.Autocomplete.init(elems, {
            data: dataSalle
        });
    }

    relocate(lati, long){ // recenter la carte sur le click d'une salle
        this.setState({
            ...this.state,
            center:{
                lat: parseFloat(lati),
                lng: parseFloat(long)
            }
        })
    }

    
    render(){
        return(
            <div>
                <div className="row" style={{left: '50%'}}>
                    <div className="input-field col s4 searchBar">
                        <i className="material-icons prefix">search</i>
                        <input type="text" id="autocomplete-input" className="autocomplete" onKeyUp={this.search}/>
                        <label htmlFor="autocomplete-input">Salle de sport...</label>
                    </div>
                </div>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyC1DDVW3qtV4y7dZm2iKN2ecQPfw7wS0go'}}
                    center={this.state.center}
                    defaultZoom={this.state.zoom}
                    style={{ height: '100vh', width: '100%'}}
                    >            
                    <img
                    className="material-icons circle z-depth-3"
                    width="45"
                    height="45"
                    alt=""
                    src={JSON.parse(localStorage.image)}
                    lat={this.state.userLatitude}
                    lng={this.state.userLongitude}
                    />
                    {
                        this.state.salles.map((salle) => {
                            return(
                                <i className="material-icons" onClick={() => this.relocate(salle.latitude, salle.longitude)} key={salle._id} lat={salle.latitude} lng={salle.longitude}>place</i>
                            )
                        })
                    }
                </GoogleMapReact>
            </div>
        )
    }

}

export default Map;