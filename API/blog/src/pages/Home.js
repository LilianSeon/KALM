import React, {Component} from 'react';
import PostService from '../services/posts.service';
import Post from '../components/Post';

class Home extends Component{


        state = {
            title: "Mon titre",
            posts: []
        }

    async componentDidMount(){
        let response = await PostService.list();
        if(response.ok){
            let data = await response.json();
            console.log(data);
            this.setState({posts: data.articles});
        }
    }

    async deletePost(id){
        let response = await PostService.delete(id);
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
                        <th>Titre</th>
                        <th>Contenu</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            this.state.posts.length ? 
                            this.state.posts.map(item => {
                                return(
                                    <Post data={item} delete={(id) => this.deletePost(id)}/>
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

export default Home;