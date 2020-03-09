import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Materialize from "materialize-css";
import { SideNav, SideNavItem, Button } from 'react-materialize';

class Sidebar extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div>
                <SideNav>
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
                </SideNav>
            </div>
        )
    }

}

export default Sidebar;