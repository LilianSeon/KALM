import React, {Component} from 'react';
import Sidebar from './Sidebar';
import { Carousel } from 'react-materialize';
import SalleService from '../service/salle.service';

class SalleDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            salle: {},
            image1: '',
            image2: '',
            image3: '',
            image4: '',
            image5: '',
        };
      }


    async componentDidMount(){
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1); // Prend la dernière valeur de l'url pour avoir l'id de la salle
        let response = await SalleService.detail(id); // Avoir les info de la salle
        if(response.ok){
            let data = await response.json();
            this.setState({
                salle: data.salle,
                image1: data.salle.image1,
                image2: data.salle.image2,
                image3: data.salle.image3,
                image4: data.salle.image4,
                image5: data.salle.image5
            });
        }else{
            console.log(response.error);
        }
        console.log(this.state)
      }


    render(){
        return(
            <div>
                <Sidebar/>
                <div className="container">
                <Carousel
                images={[
                    (this.state.image1) ? this.state.image1 : "",
                    (this.state.image2) ? this.state.image2 : "",
                    (this.state.image3) ? this.state.image3 : "",
                    (this.state.image4) ? this.state.image4 : "",
                    (this.state.image5) ? this.state.image5 : "",

                ]}
                options={{
                    dist: -100,
                    duration: 200,
                    fullWidth: false,
                    indicators: false,
                    noWrap: false,
                    numVisible: 5,
                    onCycleTo: null,
                    padding: 0,
                    shift: 0
                }}
                />
                <ul>
                    <li>{this.state.salle.nom}</li>
                    <li>{this.state.salle.description}</li>
                    <li>{this.state.salle.email}</li>
                    <li>{this.state.salle.url}</li>
                    <li>{this.state.salle.ouverture}</li>
                    <li>{this.state.salle.fermeture}</li>
                    <li><img alt="" src={this.state.salle.image1}/></li>
                </ul>
                </div>
            </div>
        )
        
    }
}

export default SalleDetail;