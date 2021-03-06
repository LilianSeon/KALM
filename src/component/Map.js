import React, {Component} from 'react';
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
            sallesBySearching: []
        };
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
                });
            }else{
                console.log(response.error);
            }
            console.log(this.props.search)
            
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

    componentWillUpdate(){
        
    }

    

    reset(){
        document.getElementById('autocomplete-input').onkeyup = () => {
            this.setState({
                sallesBySearching: JSON.parse(localStorage.sallesBySearching)
            })
            console.log(this.state.sallesBySearching);
        };
    }
    
    render(){
        return(
            <div>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCRI09Ei1R_9dstSzmQNgzaHNakc7UjwMI'}}
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
                        this.props.search.length ?
                        this.props.search.map((salle) => {
                            return(
                                <i className="material-icons tooltipped" onClick={() => this.relocate(salle.latitude, salle.longitude)} key={salle._id} lat={salle.latitude} lng={salle.longitude}>place</i>
                            )
                        })
                        : this.state.salles.map((salle) => {
                            return(
                                <i className="material-icons tooltipped" onClick={() => this.relocate(salle.latitude, salle.longitude)} key={salle._id} lat={salle.latitude} lng={salle.longitude}>place</i>
                            )
                        })
                    }
                </GoogleMapReact>
            </div>
        )
    }

}

export default Map;