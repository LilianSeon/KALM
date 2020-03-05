import React, {Component} from 'react';
import Menu from '../component/Menu';
import Footer from '../component/Footer';
import UserService from '../service/user.service';
import { Link } from 'react-router-dom';

class Inscription extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            prenom: "",
            nom: "",
            image: "",
            user_role: 1
        };
    }

    getPrenom(e){ // Récupère le Prénom de l'utilisateur pour le mettre dans le state
        this.setState({
            prenom: e.target.value
        });
    }

    getNom(e){ // Récupère le nom de l'utilisateur pour le mettre dans le state
        this.setState({
            nom: e.target.value
        });
    }

    getImage(e){ // Récupère l'image de l'utilisateur pour le mettre dans le state
        this.setState({
            image: e.target.value
        });
    }

    getEmail(e){ // Récupère l'email de l'utilisateur pour le mettre dans le state
        this.setState({
            email: e.target.value
        });
    }

    getPassword(e){ // Récupère le password de l'utilisateur pour le mettre dans le state
        this.setState({
            password: e.target.value
        });
    }

    async addUser(e){ // Envoie de la requête pour ajouter un utilisateur en base de donnée
        e.preventDefault();
        let response = await UserService.create(this.state); // Ajoute un user
        if(response.ok){
            window.location.replace("/connexion");
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
                    <div className="row m3">
                        <div className="col s3"></div>
                        <form className="col s6 z-depth-3" style={{paddingLeft:'45px'}}>
                        <h4 className="center" style={{paddingRight:'45px'}}>Inscription</h4>
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
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Inscription