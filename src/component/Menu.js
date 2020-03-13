import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
      }

      disconnect(){
        localStorage.removeItem('idUser');
        localStorage.removeItem('prenom');
        localStorage.removeItem('email');
        localStorage.removeItem('nom');
        localStorage.removeItem('image');
        localStorage.removeItem('user_role');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('toast');
    }


    render(){
        return(
            <nav className="white" role="navigation">
                <div className="nav-wrapper container">
                    <Link id="logo-container" to={'/'} className="brand-logo">KALM</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to={'/accueil'}>Trouver ma salle</Link></li>
                        <li><Link to={'/'}>Mes objectifs</Link></li>
                        <li><Link to={'/'}>Mon évolution</Link></li>
                        <li><Link to={'/monProfil'}>Mon Profil</Link></li>
                        <li><Link to={'/inscription'}>Inscription</Link></li>
                        {
                            (localStorage.isAuth === "true") ? <li><Link to={'/'} onClick={() => {this.disconnect()}}>Déconnexion</Link></li> : null
                        }
                    </ul>
                    <Link to={''} data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                </div>
            </nav>
        )
    }
}

export default Menu;