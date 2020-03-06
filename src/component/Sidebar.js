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
                    Map
                    </SideNavItem>
                    <SideNavItem href="#!second" icon="local_dining">
                    Recette
                    </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>
                    Subheader
                    </SideNavItem>
                    <SideNavItem
                    href="#!third"
                    waves
                    >
                    Third Link With Waves
                    </SideNavItem>
                </SideNav>
            </div>
        )
    }

}

export default Sidebar;