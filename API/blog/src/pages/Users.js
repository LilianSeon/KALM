import React, {Component} from 'react';
import PostService from '../services/posts.service';
import User from '../components/User';

class Users extends Component{


        state = {
            title: "Mes Users",
            posts: []
        }

    async componentDidMount(){
        let response = await PostService.listUsers();
        if(response.ok){
            let data = await response.json();
            console.log(data);
            this.setState({posts: data.users});
        }
    }

    async deleteUser(id){
        let response = await PostService.deleteUser(id);
        if(response.ok){
            let posts = this.state.posts;
            let index = posts.findIndex(post => post._id === id);
            posts.splice(index, 1);

            this.setState({posts: posts});
        }
    }

    render(){
        return(
            <div className="container">
                <h1>{this.state.title}</h1>
                <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>email</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            this.state.posts.length ? 
                            this.state.posts.map(item => {
                                return(
                                    <User data={item} delete={(id) => this.deleteUser(id)}/>
                                )
                            })
                            
                            : null
                            
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Users;