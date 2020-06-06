import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { SideNav, SideNavItem} from 'react-materialize';

class Sidebar extends Component{

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
            <div>
                <SideNav
                options={{
                    closeOnClick: true
                  }}
                  >
                    <SideNavItem
                    user={{
                        background: 'https://placeimg.com/640/480/nature/sepia',
                        email: JSON.parse(localStorage.email),
                        image: JSON.parse(localStorage.image),
                        name: JSON.parse(localStorage.prenom)+' '+JSON.parse(localStorage.nom)
                    }}
                    userView
                    />
                    <Link to={'/accueil'}>
                        <SideNavItem
                        icon="map"
                        >
                        Trouver ma salle
                        </SideNavItem>
                    </Link>
                    <SideNavItem href="/objectif" icon="gps_fixed">
                    Fixer mes objectifs
                    </SideNavItem>
                    <SideNavItem
                    icon="equalizer"
                    waves
                    >
                    Mon évolution
                    </SideNavItem>
                    <Link to={'/recette'}>
                        <SideNavItem
                        icon="local_dining"
                        waves
                        >
                        Mes recettes
                        </SideNavItem>
                    </Link>
                    <SideNavItem divider />
                    <Link to={'/monProfil'}>
                        <SideNavItem
                        icon="person"
                        waves
                        >
                        Mon profil
                        </SideNavItem>
                    </Link>
                    <Link to={'/'}>
                        <SideNavItem
                        icon="home"
                        waves
                        >
                        Accueil
                        </SideNavItem>
                    </Link>
                    <Link to={'/'}>
                        <SideNavItem
                        icon="exit_to_app"
                        onClick={() => {this.disconnect()}}
                        waves
                        >
                        Déconnexion
                        </SideNavItem>
                    </Link>
                </SideNav>
            </div>
        )
    }

}

export default Sidebar;