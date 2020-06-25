import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import Materialize from "materialize-css";
import Image1 from '../image/parra1.jpg';
import Image2 from '../image/parra2.jpg';
import Image3 from '../image/parra3.jpg';
import '../css/Home.css';
import { Parallax } from 'react-materialize';

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };

        let elems = document.querySelectorAll('.parallax');
        Materialize.Parallax.init(elems, {});
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
                <Menu/>
                <div className="section no-pad-bot transparent">
                    <div className="container">
                        <br/><br/>
                            <h1 className="header center teal-text text-lighten-2">Bienvenue</h1>
                        <div className="row center">
                            <h5 className="header col s12 light white-text">Voici votre nouveau site web pour suivre vos progressions et bien plus encore...</h5>
                        </div>
                        <div className="row center">
                        {
                            (localStorage.isAuth === "true") ?                        
                            <Link to={'/'} className="btn-large waves-effect waves-light teal lighten-1" onClick={() => {this.disconnect()}}>Déconnexion</Link>
                            :
                            <Link to={'/connexion'} id="download-button" className="btn-large waves-effect waves-light teal lighten-1" >Connexion</Link>
                        }
                        </div>
                        <br/><br/>
                    </div>
                </div>
                <Parallax
                    image={<img alt="" src={Image1}/>}
                    options={{
                    responsiveThreshold: 0
                    }}
                />
                <div className="container">
                    <div className="section">
                    <div className="row">
                        <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                            <h5 className="center">Speeds up development</h5>

                            <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                        </div>
                        </div>

                        <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                            <h5 className="center">User Experience Focused</h5>

                            <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                        </div>
                        </div>

                        <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                            <h5 className="center">Easy to work with</h5>

                            <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Parallax
                    image={<img alt="" src={Image3}/>}
                    options={{
                    responsiveThreshold: 0
                    }}
                />
                <div className="container">
                    <div className="section">

                    <div className="row">
                        <div className="col s12 center">
                        <h3><i className="mdi-content-send brown-text"></i></h3>
                        <h4>Contact Us</h4>
                        <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                        </div>
                    </div>
                    </div>
                </div>
                <Parallax
                    image={<img alt="" src={Image2}/>}
                    options={{
                    responsiveThreshold: 0
                    }}
                />
            <Footer/>
          </div>
        )
    }
}

export default Home;