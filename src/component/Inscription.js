import React, {Component} from 'react';
import Menu from '../component/Menu';
import Footer from '../component/Footer';
import UserService from '../service/user.service';
import SalleService from '../service/salle.service';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-materialize';
import Materialize from "materialize-css";

class Inscription extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: "",
                password: "",
                prenom: "",
                nom: "",
                image: "",
                user_role: 1
            },
            salle: {
                nom: "",
                description: "",
                email: "",
                latitude: "",
                longitude: "",
                url: "",
                image: "",
                type: 0
            }
        };
    }

    getPrenom(e){ // Récupère le Prénom de l'utilisateur pour le mettre dans le state
        this.setState({
            user:{
                ...this.state.user,
                prenom: e.target.value
            }
        });
    }

    getNom(e){ // Récupère le nom de l'utilisateur pour le mettre dans le state
        this.setState({
            user:{
                ...this.state.user,
                nom: e.target.value
            }
        });
    }

    getImage(e){ // Récupère l'image de l'utilisateur pour le mettre dans le state
        this.setState({
            user:{
                ...this.state.user,
                image: e.target.value
            }
        });
    }

    getEmail(e){ // Récupère l'email de l'utilisateur pour le mettre dans le state
        this.setState({
            user:{
                ...this.state.user,
                email: e.target.value
            }
        });
    }

    getPassword(e){ // Récupère le password de l'utilisateur pour le mettre dans le state
        this.setState({
            user:{
                ...this.state.user,
                password: e.target.value
            }
        });
    }

    getNomSalle(e){ // Récupère le nom de la salle pour le mettre dans le state
        this.setState({
            salle:{
                ...this.state.salle,
                nom: e.target.value
            }
        });
    }

    getDescriptionSalle(e){ // Récupère la description de la salle pour le mettre dans le state
        this.setState({
            salle:{
                ...this.state.salle,
                description: e.target.value
            }
        });
    }

    getEmailSalle(e){ // Récupère l'email de la salle pour le mettre dans le state
        this.setState({
            salle:{
                ...this.state.salle,
                email: e.target.value
            }
        });
    }

    getLatitudeSalle(e){ // Récupère la latitude de la salle pour le mettre dans le state
        this.setState({
            salle:{
                ...this.state.salle,
                latitude: e.target.value
            }
        });
    }

    getLongitudeSalle(e){ // Récupère la longitude de la salle pour le mettre dans le state
        this.setState({
            salle:{
                ...this.state.salle,
                longitude: e.target.value
            }
        });
    }

    getURLSalle(e){ // Récupère le nom de la salle pour le mettre dans le state
        this.setState({
            salle:{
                ...this.state.salle,
                url: e.target.value
            }
        });
    }

    getImageSalle(e){ // Récupère l'image de la salle pour le mettre dans le state
        this.setState({
            salle:{
                ...this.state.salle,
                image: e.target.value
            }
        });
    }

    getTypeSalle(e){ // Récupère le type (écolo ou non) de la salle pour le mettre dans le state
        if(e.target.checked){ // écolo
            this.setState({
                salle:{
                    ...this.state.salle,
                    type: 1
                }
            });
        }else{ // Simple salle de sport
            this.setState({
                salle:{
                    ...this.state.salle,
                    type: 0
                }
            });
        }
    }

    async addUser(e){ // Envoie de la requête pour ajouter un utilisateur en base de donnée
        e.preventDefault();
        console.log(this.state);
        let response = await UserService.create(this.state.user); // Ajoute un user
        if(response.ok){
            window.location.replace("/connexion");
        }else{
            console.log(response);
        }
    }

    async addSalle(e){ // Envoie de la requête pour ajouter une salle en base de donnée
        e.preventDefault();
        let response = await SalleService.create(this.state.salle); // Ajoute un user
        if(response.ok){
            Materialize.toast({html: '<span>'+this.state.salle.nom+' a été ajouté !</span>'})
        }else{
            console.log(response);
        }
    }

      render(){
        return(
            <div>
                <Menu/>
                <br/>
                <div className="container">
                <Link to={'/connexion'} className="waves-effect waves-light btn"><i className="material-icons left">keyboard_arrow_left</i>Retour</Link>
                <br/><br/>
                <Tabs className="">
                <Tab
                    active
                    options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                    }}
                    title="Un particulier"
                >
                    <br/>
                    <div className="row m3">
                        <div className="col s3"></div>
                        <form className="col s6 z-depth-3" style={{paddingLeft:'45px'}}>
                        <h4 className="center" style={{paddingRight:'45px'}}>Inscription d'un particulier</h4>
                        <div className="row">
                            <div className="input-field col s5">
                                <i className="material-icons prefix">account_box</i>
                                <input id="prenom" type="text" className="validate" onChange={(e) => {this.getPrenom(e)}}/>
                                <label htmlFor="prenom">Prénom</label>
                            </div>
                            <div className="input-field col s5">
                                <input id="nom" type="text" className="validate" onChange={(e) => {this.getNom(e)}}/>
                                <label htmlFor="nom">Nom</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10">
                                <i className="material-icons prefix">photo_camera</i>
                                <input id="image" type="text" className="validate" onChange={(e) => {this.getImage(e)}}/>
                                <label htmlFor="image">Photo de profil</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10">
                                <i className="material-icons prefix">email</i>
                                <input id="icon_prefix" type="email" className="validate" onChange={(e) => {this.getEmail(e)}}/>
                                <label htmlFor="icon_prefix">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10">
                                <i className="material-icons prefix">lock</i>
                                <input id="icon_telephone" type="password" className="validate" onChange={(e) => {this.getPassword(e)}}/>
                                <label htmlFor="icon_telephone">Mot de passe</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6">
                                
                            </div>
                            <div className="col s6">
                                <button className="waves-effect waves-light btn" onClick={(e) => {this.addUser(e)}}><i className="material-icons left">check</i>Valider</button>
                            </div>
                        </div>
                        </form>
                        <div className="col s3"></div>
                    </div>
                    <br/>
                    <br/>
                </Tab>
                <Tab
                    options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                    }}
                    title="Un salle de sport"
                >
                 <br/>
                <div className="row m3">
                    <div className="col s3"></div>
                    <form className="col s6 z-depth-3" style={{paddingLeft:'45px'}}>
                    <h4 className="center" style={{paddingRight:'45px'}}>Inscription pour une salle de sport</h4>
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="material-icons prefix">account_box</i>
                            <input id="nomSalle" type="text" className="validate" onChange={(e) => {this.getNomSalle(e)}}/>
                            <label htmlFor="nomSalle">Nom</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="material-icons prefix">comment</i>
                            <textarea id="descriptionSalle" type="text" className="materialize-textarea" onChange={(e) => {this.getDescriptionSalle(e)}}></textarea>
                            <label htmlFor="descriptionSalle">Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="material-icons prefix">email</i>
                            <input id="emailSalle" type="email" className="validate" onChange={(e) => {this.getEmailSalle(e)}}/>
                            <label htmlFor="emailSalle">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s5">
                            <i className="material-icons prefix">gps_fixed</i>
                            <input id="latitudeSalle" type="text" className="validate" onChange={(e) => {this.getLatitudeSalle(e)}}/>
                            <label htmlFor="latitudeSalle">Latitude</label>
                        </div>
                        <div className="input-field col s5">
                            <i className="material-icons prefix">gps_fixed</i>
                            <input id="longitudeSalle" type="text" className="validate" onChange={(e) => {this.getLongitudeSalle(e)}}/>
                            <label htmlFor="longitudeSalle">Longitude</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="material-icons prefix">link</i>
                            <input id="urlSalle" type="text" className="validate" onChange={(e) => {this.getURLSalle(e)}}/>
                            <label htmlFor="urlSalle">Site web</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="material-icons prefix">image</i>
                            <input id="imageSalle" type="text" className="validate" onChange={(e) => {this.getImageSalle(e)}}/>
                            <label htmlFor="imageSalle">Image</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10">
                        <label>
                            <input type="checkbox" onChange={(e) => {this.getTypeSalle(e) }}/>
                            <span>Salle écologique</span>
                        </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s7">

                        </div>
                        <div className="col s5">
                            <button className="waves-effect waves-light btn" onClick={(e) => {this.addSalle(e)}}><i className="material-icons left">check</i>Valider</button>
                        </div>
                    </div>
                    </form>
                    <div className="col s3"></div>
                </div>
                <br/>
                <br/>
                </Tab>
                </Tabs>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Inscription