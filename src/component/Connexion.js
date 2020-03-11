import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import UserService from '../service/user.service';
import Materialize from "materialize-css";
import '../css/Home.css';

class Connexion extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            user_role: 0,
            bddUser: {},
            id: '',
            isAuth: false
        };
    }

    componentDidMount(){
        if (localStorage.resterco === "true") {
            document.getElementById("resterco").checked = true;
            this.setState({
                email: document.getElementById('email').value
            })
        }
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

    async checkUser(e){ // Envoie de la requête pour ajouter un utilisateur en base de donnée
        e.preventDefault();
        let response = await UserService.list(); // Retourne la liste de tous les users
            if(response.ok){
                let data = await response.json();
                this.setState({bddUser: data});
                this.state.bddUser.users.map((user) => {
                    if(user.email === this.state.email){
                        if(user.password === this.state.password){
                            console.log("Connexion");
                            this.setState({
                                ...this.state,
                                id: user._id,
                                user_role: user.user_role,
                                isAuth: true
                            });
                            
                            localStorage.setItem('idUser', JSON.stringify(user._id));
                            localStorage.setItem('prenom', JSON.stringify(user.prenom));
                            localStorage.setItem('email', JSON.stringify(user.email));
                            localStorage.setItem('nom', JSON.stringify(user.nom));
                            localStorage.setItem('image', JSON.stringify(user.image));
                            localStorage.setItem('user_role', JSON.stringify(user.user_role));
                            localStorage.setItem('isAuth', JSON.stringify(true));
                            localStorage.setItem('toast', JSON.stringify(true));

                            window.location.replace("http://localhost:3000/accueil");

                            if(localStorage.user_role === "1"){
                                Materialize.toast({html: '<span>Vous êtes connecté !</span>'})
                            }

                            return true;
                        }else{
                            Materialize.toast({html: '<span>Mot de passe incorrect</span>'})
                            return false;
                        }
                    }else{
                        Materialize.toast({html: '<span>Utilisateur inconnu</span>'})
                        return false;
                    }
                })
            }else{
                console.log(response);
            }
    }


    ResterCo(e){
        if(e.target.checked){ // checked
            localStorage.setItem('resterco', true);
        }else{ 
            localStorage.setItem('resterco', false);
        }
    }


    render(){
        return(
            <div className="blue-grey lighten-5">
                <Menu/>
                <div className="row m3">
                <br/> <br/> <br/>
                    <div className="col s0 m3 l4"></div>
                    <form className="col s12 m6 l4 z-depth-3 white" style={{paddingLeft:'45px'}}>
                    <h4 className="center" style={{paddingRight:'45px'}}>Connexion</h4>
                    <div className="row">
                        <div className="input-field col s11 m10">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="email" type="email" className="validate" onChange={(e) => {this.getEmail(e)}} value={(localStorage.isAuth === "true" && localStorage.resterco === "true") ? JSON.parse(localStorage.email) : null }/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s11 m10">
                            <i className="material-icons prefix">lock</i>
                            <input id="mdp" type="password" className="validate" onChange={(e) => {this.getPassword(e)}}/>
                            <label htmlFor="mdp">Mot de passe</label>
                            <span className="helper-text">Pas encore inscrit ? <Link to={'/inscription'}>Enregistre toi.</Link></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <label>
                                <input id="resterco" type="checkbox" onChange={(e) => {this.ResterCo(e) }}/>
                                <span>Se souvenir de moi</span>
                            </label>
                        </div>
                        <div className="col s6">
                            <button className="waves-effect waves-light btn blue" onClick={(e) => {this.checkUser(e)}}><i className="material-icons left">check</i>Connexion</button>
                        </div>
                    </div>
                    </form>
                    <div className="col s0 m3 l4"></div>
                </div>
                <br/>
                <br/>
                <Footer/>
            </div>
        )
    }

}

export default Connexion;