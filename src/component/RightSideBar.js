import React, {Component} from 'react';
import SalleService from '../service/salle.service';
import '../css/RightSidebar.css';


class RightSideBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            salles:[]
        };
    }


    async componentDidMount(){
        let response = await SalleService.list(); // Avoir la liste des salles
        if(response.ok){
            let data = await response.json();
            this.setState({salles: data.salles});
            console.log(this.state);
        }else{
            console.log(response.error);
        }
    }

    render(){
        return(
            <div className="sidenav-fixed RightSideBar">
                <div className="s12">
                    <div className="col s12 m7">
                        <h5 className="header">Les salles de sport</h5>
                        {
                            this.state.salles.map((salle) =>{
                                return(
                                    <div key={salle._id} className="card horizontal">
                                        <div className="card-image">
                                            <img alt="" width="120" height="120" src={salle.image}/>
                                        </div>
                                        <div className="card-stacked">
                                            <div>
                                                <p className="truncate">{salle.description}</p>
                                            </div>
                                            <div className="card-action">
                                                <a href="#!">This is a link</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    
    }
}

export default RightSideBar;