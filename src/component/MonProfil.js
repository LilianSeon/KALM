import React, {Component} from 'react';
import UserService from '../service/user.service';
import Sidebar from './Sidebar';

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
                    <ul>
                        <li>{this.state.user.prenom}</li>
                        <li>{this.state.user.nom}</li>
                        <li>{this.state.user.email}</li>
                        <li>{this.state.user.password}</li>
                        <li><img alt="" src={this.state.user.image}/></li>
                    </ul>
                </div>
            </div>
        )
        
    }
}

export default MonProfil;