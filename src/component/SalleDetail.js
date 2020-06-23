import React, {Component} from 'react';
import Sidebar from './Sidebar';
import { Carousel } from 'react-materialize';
import SalleService from '../service/salle.service';
import CommentService from '../service/comment.service';
import Materialize from "materialize-css";
import StarRatings from 'react-star-ratings';

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
            inscription:{
                genre: '',
                nom: JSON.parse(localStorage.nom),
                prenom: JSON.parse(localStorage.prenom),
                portable: '',
                naissance: '',
                accepte: '',
                email: JSON.parse(localStorage.email)
            }
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

        console.log(this.state);

        var elems = document.querySelectorAll('.modal');
        Materialize.Modal.init(elems, {});
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

    getMadame(e){ // Récupère le renge de l'utilisateur pour le mettre dans le state
        this.setState({
            inscription:{
                ...this.state.inscription,
                genre: e.currentTarget.value
            }
        });
        console.log(e.target.value);
    }

    getMonsieur(e){ // Récupère le renge de l'utilisateur pour le mettre dans le state
        this.setState({
            inscription:{
                ...this.state.inscription,
                genre: e.currentTarget.value
            }
        });
    }

    getPrenom(e){ // Récupère l'e prenom de l'utilisateur pour le mettre dans le state
        this.setState({
            inscription:{
                ...this.state.inscription,
                prenom: e.target.value
            }
        });
    }

    getNom(e){ // Récupère le nom de l'utilisateur pour le mettre dans le state
        this.setState({
            inscription:{
                ...this.state.inscription,
                nom: e.target.value
            }
        });
    }

    getNaissance(e){ // Récupère la date de naissance de l'utilisateur pour le mettre dans le state
        this.setState({
            inscription:{
                ...this.state.inscription,
                naissance: e.target.value
            }
        });
    }

    getPortable(e){ // Récupère le noméro de protable de l'utilisateur pour le mettre dans le state
        this.setState({
            inscription:{
                ...this.state.inscription,
                portable: e.target.value
            }
        });
    }

    getAccepte(e){ // Récupère si l'utilisateur accepte  pour le mettre dans le state

        if(e.target.checked){
            this.setState({
                inscription:{
                    ...this.state.inscription,
                    accepte: true
                }
            });
        }else{
            this.setState({
                inscription:{
                    ...this.state.inscription,
                    accepte: false
                }
            });
        }
        
        console.log(this.state.inscription);
    }

    async sendEmail(){

        let body = {
            genre: this.state.inscription.genre,
            nom: this.state.inscription.nom,
            prenom: this.state.inscription.prenom,
            portable: this.state.inscription.portable,
            naissance: this.state.inscription.naissance,
            accepte: this.state.inscription.accepte,
            email: this.state.inscription.email,
            nomSalle: this.state.salle.nom,
            emailSalle: this.state.salle.email
        }

        let response = await SalleService.Email(body);

        if(response.ok){
            console.log('OK SEND');
            Materialize.toast({html: 'Pré-inscription envoyé !'});
            this.componentDidMount();
        }else{
            console.log(response.error);
        }
    }


    render(){
        return(
            <div>
                <Sidebar/>
                <div className="container sidebar-width">
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
                    <li>type : {(this.state.salle.type) ? 'écolo' : 'classique'}</li>
                    <StarRatings
                        rating={this.state.salle.note}
                        starRatedColor="#cddc39"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        starSpacing="4px"
                    />
                </ul>
                <div className="row">
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Pré-inscription</a>
                </div>
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
                <div id="modal1" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4>Module de pré-inscription</h4>
                        <div className="row">
                            <blockquote>{this.state.salle.nom}</blockquote>
                        </div>
                        <div className="row">
                            <label>
                                <input id="madame" name="gender" type="radio" className="with-gap" value="Madame" onChange={(e) => {this.getMadame(e)}} />
                                <span htmlFor="madame">Madame</span>
                            </label>
                            <label style={{marginLeft: '10px'}}>
                                <input id="monsieur" name="gender" type="radio" className="with-gap" value="Monsieur" onChange={(e) => {this.getMonsieur(e)}}/>
                                <span htmlFor="monsieur">Monsieur</span>
                            </label>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="prenom" type="text" className="validate active" value={this.state.inscription.prenom} onChange={(e) => {this.getPrenom(e)}}/>
                                <label htmlFor="prenom">Prénom</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="nom" type="text" className="validate active" value={this.state.inscription.nom} onChange={(e) => {this.getNom(e)}}/>
                                <label htmlFor="nom">Nom</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="email" type="email" className="validate active" value={this.state.inscription.email} onChange={(e) => {this.getEmail(e)}}/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="jj / mm / aaaa" type="date" className="datepicker active" onChange={(e) => {this.getNaissance(e)}}/>
                                <label>Date de naissance</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="tel" type="text" className="validate" onChange={(e) => {this.getPortable(e)}}/>
                                <label htmlFor="tel">Portable</label>
                            </div>
                        </div><br/>
                        <div className="row">
                            <label className="col s6">
                                <input type="checkbox" onChange={(e) => {this.getAccepte(e)}} checked={this.state.inscription.accepte}/>
                                <span>En soumettant ce formulaire, j'accepte que les informations saisies dans ce formulaire soient utilisées pour permettre de me recontacter.</span>
                            </label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={() => {this.sendEmail()}}>Envoyer</a>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default SalleDetail;