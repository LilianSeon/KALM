import React, {Component} from 'react';
import UserService from '../service/user.service';
import Sidebar from './Sidebar';
import '../css/MonProfil.css';

class MonProfil extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user:{}
        };
      }

      async componentDidMount(){
        let response = await UserService.detail(JSON.parse(localStorage.idUser)); // Avoir la liste des salles
        if(response.ok){
            let data = await response.json();
            console.log(this.state.user)
            this.setState({
                user: data.user,
            });
        }else{
            console.log(response.error);
        }
        console.log(this.state)
      }


    render(){
        return(
            <div>
                <Sidebar/>
                <div className="container sidebar-width">
                    <div className="mon-profil-titre">Mon profil</div>
                    <div className="mon-profil">
                        <div className="row">
                            <img className="mon-profil-photo" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                            <div className="mon-profil-photo-desc">photo de profil</div>
                        </div>
                        <div className="mon-profil-prenom"><span style={{fontWeight: 600}}>Prénom</span>: {this.state.user.prenom}</div>
                        <div className="mon-profil-nom"><span style={{fontWeight: 600}}>Nom</span>: {this.state.user.nom}</div>
                        <div className="mon-profil-email"><span style={{fontWeight: 600}}>Email</span>: {this.state.user.email}</div>
                        <div className="mon-profil-password"><span style={{fontWeight: 600}}>Mot de passe</span>: ******</div>
                    </div>
                    <a href="" className="mon-profil-modify">Modifier mon profil<i class="small material-icons brown-text">edit</i></a>
                </div>
            </div>
        )
        
    }
}

export default MonProfil;