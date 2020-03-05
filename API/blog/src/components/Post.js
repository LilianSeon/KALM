import React, {Component} from 'react';

class Post extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <tr>
                <td>#{this.props.data._id}</td>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.content}</td>
                <td><button className="btn btn-danger" onClick={(id) => this.props.delete(this.props.data._id)}>Supprimer</button></td>
            </tr>
        )
    }
}

export default Post