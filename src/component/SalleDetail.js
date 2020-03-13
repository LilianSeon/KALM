import React, {Component} from 'react';
import Sidebar from './Sidebar';
import { Carousel } from 'react-materialize';
import SalleService from '../service/salle.service';
import CommentService from '../service/comment.service';
import Materialize from "materialize-css";

class SalleDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            salle: {},
            image1: '',
            image2: '',
            image3: '',
            image4: '',
            image5: '',
            newComment: '',
            comments: [],
        };
      }


    async componentDidMount(){
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1); // Prend la dernière valeur de l'url pour avoir l'id de la salle
        let response = await SalleService.detail(id); // Avoir les info de la salle
        if(response.ok){
            let data = await response.json();
            this.setState({
                salle: data.salle,
                image1: data.salle.image1,
                image2: data.salle.image2,
                image3: data.salle.image3,
                image4: data.salle.image4,
                image5: data.salle.image5,
            });
        }else{
            console.log(response.error);
        }

        let responseComment = await CommentService.list(id); // Va chercher les données des commentaires
        if(responseComment.ok){
            let data = await responseComment.json();
            this.setState({comments: data.comments})
        }else{
            console.log(response.error);
        }

        console.log(this.state)
    }

    getNewComment(e){ // Update le state si le commentaire n'est pas trop long
        if(e.target.value.length > 120){
            Materialize.toast({html: "<span><i class='material-icons left lime-text'>warning</i> Votre commentaire est trop long</span>"});
        }
        this.setState({
            newComment: e.target.value
        });
    }

    async sendComment(e){ // Crée un nouveau commentaire
        e.preventDefault();
        if(localStorage.isAuth === "true"){ // Si l'user est co
            if(this.state.newComment.length < 120){ // Si le commentaire n'est pas trop long
                let body = {
                    content: this.state.newComment,
                    date: new Date().toLocaleDateString('fr-Fr'),
                    nom: JSON.parse(localStorage.prenom)+ " "+JSON.parse(localStorage.nom),
                    image: JSON.parse(localStorage.image),
                    salleId: this.state.salle._id,
                    userId: JSON.parse(localStorage.idUser)
                }
                let response = await CommentService.create(body); // Crée un commentaire
                if(response.ok){
                    let data = await response.json();
                    this.setState({
                        ...this.state,
                        comments: data.comments})
                        document.getElementById('commentaire').value = '';
                        document.getElementById('commentaire').blur();
                        this.componentDidMount();
                }else{
                    console.log(response.error);
                }
            }else{
                Materialize.toast({html: "<span><i class='material-icons left lime-text'>warning</i> Votre commentaire est trop long</span>"});
            }
        }else{
            Materialize.toast({html: "<span>Vous devez être <a href='/connexion'>connecté</a> !</span>"});
        }
    }


    render(){
        return(
            <div>
                <Sidebar/>
                <div className="container">
                <Carousel
                images={[
                    (this.state.image1) ? this.state.image1 : "",
                    (this.state.image2) ? this.state.image2 : "",
                    (this.state.image3) ? this.state.image3 : "",
                    (this.state.image4) ? this.state.image4 : "",
                    (this.state.image5) ? this.state.image5 : "",

                ]}
                options={{
                    dist: -100,
                    duration: 200,
                    fullWidth: false,
                    indicators: false,
                    noWrap: false,
                    numVisible: 5,
                    onCycleTo: null,
                    padding: 0,
                    shift: 0
                }}
                />
                <ul>
                    <li>{this.state.salle.nom}</li>
                    <li>{this.state.salle.description}</li>
                    <li>{this.state.salle.email}</li>
                    <li>{this.state.salle.url}</li>
                    <li>{this.state.salle.ouverture}</li>
                    <li>{this.state.salle.fermeture}</li>
                </ul>
                <div className="row">
                    <h5>Espace commentaire</h5>
                </div>
                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea id="commentaire" className="materialize-textarea" data-length="120" onChange={(e) =>{this.getNewComment(e)}}></textarea>
                        <label htmlFor="commentaire">Commentaire ...</label>
                    </div>
                    <button className="btn-floating waves-light btn-large active" type="submit" name="action" onClick={(e) => {this.sendComment(e)}}><i className="material-icons">send</i></button>
                </div>
                <ul className="collection">
                {
                    this.state.comments ?
                    this.state.comments.map((comment, c = 0) => {
                        c++;
                        return(
                            <li key={comment._id} className="collection-item avatar">
                                <img src={comment.image} alt="" className="circle z-depth-1"/>
                                <span className="title"><b>{comment.prenom} {comment.nom}</b> <small><span className="helper-text">{comment.date}</span></small></span>
                                <p>
                                {comment.content}
                                </p>
                            </li>
                        )
                    }) : null
                }
                </ul>
                </div>
            </div>
        )
        
    }
}

export default SalleDetail;