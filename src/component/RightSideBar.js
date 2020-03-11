import React, {Component} from 'react';
import SalleService from '../service/salle.service';
import '../css/RightSidebar.css';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';


class RightSideBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            salles:[]
        };
    }


    async componentDidMount(){
        let response = await SalleService.list(); // Avoir la liste des salles
        if(response.ok){
            let data = await response.json();
            this.setState({salles: data.salles});
        }else{
            console.log(response.error);
        }
    }

    render(){
        return(
            <div className="sidenav-fixed RightSideBar grey lighten-5">
                <div className="s12">
                    <div className="col s12 m7">
                        <p>
                            <h5 className="header center-align">Les salles de sport</h5>
                        </p>
                        <div className="divider"></div>
                        <br/>
                        <div id="result">
                            {
                                this.state.salles.map((salle) =>{
                                    return(
                                        <div key={salle._id} className="card horizontal hoverable hit">
                                            <div className="card-image">
                                                <img alt="" width="118" height="118" src={salle.image}/>
                                            </div>
                                            <div className="card-stacked">
                                                <div>
                                                    <h6 className="blue-grey-text text-darken-2 center-align"><b className="title">{salle.nom}</b></h6>
                                                    <div className="center-align">
                                                        <StarRatings
                                                            rating={4.5}
                                                            starRatedColor="#cddc39"
                                                            numberOfStars={5}
                                                            name='rating'
                                                            starDimension="20px"
                                                            starSpacing="4px"
                                                        />
                                                    </div>
                                                    <blockquote style={{marginLeft: "5px"}}>
                                                        {salle.ouverture} - {salle.fermeture}
                                                    </blockquote>
                                                </div>
                                                <div className="card-action">
                                                    <Link to={'/salle-detail/'+salle._id}>En savoir plus</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    
    }
}

export default RightSideBar;