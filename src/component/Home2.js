import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import Materialize from "materialize-css";
import { SideNav, SideNavItem, Button } from 'react-materialize';
import Sidebar from './Sidebar';

class Home2 extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div>
                <Sidebar/>
            </div>
        )
    }

}

export default Home2;