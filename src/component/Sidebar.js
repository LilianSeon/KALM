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
        localStorage.clear();
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
                        background: 'https://placeimg.com/640/480/tech',
                        email: JSON.parse(localStorage.email),
                        image: JSON.parse(localStorage.image),
                        name: JSON.parse(localStorage.prenom)+' '+JSON.parse(localStorage.nom)
                    }}
                    userView
                    />
                    <SideNavItem
                    href="#!icon"
                    icon="map"
                    >
                    Trouver ma salle
                    </SideNavItem>
                    <SideNavItem href="#!second" icon="gps_fixed">
                    Fixer mes objectifs
                    </SideNavItem>
                    <SideNavItem
                    href="#!third"
                    icon="equalizer"
                    waves
                    >
                    Mon évolution
                    </SideNavItem>
                    <Link to={'/'}>
                        <SideNavItem
                        icon="local_dining"
                        waves
                        >
                        Mes recettes
                        </SideNavItem>
                    </Link>
                    <SideNavItem divider />
                    <SideNavItem
                    href="#!third"
                    icon="person"
                    waves
                    >
                    Mon profil
                    </SideNavItem>
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