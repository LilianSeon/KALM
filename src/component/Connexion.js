import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import '../css/Home.css';

class Connexion extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            prenom: "",
            nom: "",
            age: "",
            user_role: 0,
            bddUser: {},
            id: '',
            isAuth: false
        };
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


    render(){
        return(
            <div>
                <Menu/>
                <br/> <br/> <br/>
                <div className="row m3">
                    <div className="col s0 m3 l4"></div>
                    <form className="col s12 m6 l4 z-depth-3 white" style={{paddingLeft:'45px'}}>
                    <h4 className="center" style={{paddingRight:'45px'}}>Connexion</h4>
                    <div className="row">
                        <div className="input-field col s11 m10">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="email" className="validate" onChange={(e) => {this.getEmail(e)}}/>
                            <label htmlFor="icon_prefix">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s11 m10">
                            <i className="material-icons prefix">lock</i>
                            <input id="icon_telephone" type="password" className="validate" onChange={(e) => {this.getPassword(e)}}/>
                            <label htmlFor="icon_telephone">Mot de passe</label>
                            <span className="helper-text">Pas encore inscrit ? <Link to={'/inscription'}>Enregistre toi.</Link></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
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