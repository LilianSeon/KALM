import React, {Component} from 'react';

class User extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <tr>
                <td>#{this.props.data._id}</td>
                <td>{this.props.data.firstname}</td>
                <td>{this.props.data.lastname}</td>
                <td>{this.props.data.email}</td>
                <td><button className="btn btn-danger" onClick={(id) => this.props.delete(this.props.data._id)}>Supprimer</button></td>
            </tr>
        )
    }
}

export default User