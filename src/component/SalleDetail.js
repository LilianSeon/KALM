import React, {Component} from 'react';

class SalleDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
      }

    componentDidMount(){
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1); // Prend la dernière valeur de l'url pour avoir l'id de la salle
    }


    render(){
        return(
            <div>
                Page détail de la salle de sport.
            </div>
        )
        
    }
}

export default SalleDetail;