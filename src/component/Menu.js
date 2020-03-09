import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
      }


    render(){
        return(
            <nav className="white" role="navigation">
                <div className="nav-wrapper container">
                    <Link id="logo-container" to={'/'} className="brand-logo">KALM</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to={'/inscription'}>Inscription</Link></li>
                    </ul>
                    <Link to={''} data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                </div>
            </nav>
        )
    }
}

export default Menu;