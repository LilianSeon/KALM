import React, {Component} from 'react';
import ObjectifService from '../service/objectif.service';
import Sidebar from './Sidebar';
import {Row,Col,Card,Icon,CardTitle,Button} from 'react-materialize';
import Materialize from "materialize-css";


class Objectif extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user:{},
            objectif:""
        };
      }
     
    setPerdre(e){
        this.state.objectif="perdre";
    this.sendObjectif(e);
    }

    setMuscle(e){
        this.state.objectif="muscle";
        this.sendObjectif(e);
    }

    setPrendre(e){
        this.state.objectif="prendre";
    this.sendObjectif(e);
    }


    async sendObjectif(e){ // Créer un objectif
        e.preventDefault()
        if(localStorage.isAuth === "true"){ // Si l'user est co
                let body = {
                    objectif: this.state.objectif,
                    nom: JSON.parse(localStorage.prenom)+ " "+JSON.parse(localStorage.nom),
                    userId: JSON.parse(localStorage.idUser)
                }
                let response = await ObjectifService.create(body); // Crée un commentaire
                if(response.ok){
                    window.location.replace("/recette");
                }else{
                    console.log(response.error);
                }
            
        }else{
            Materialize.toast({html: "<span>Vous devez être <a href='/connexion'>connecté</a> !</span>"});
        }
    }

    render(){
        return(
            <div>
                <Sidebar/>
                <div class="container">
                    <div class="row">
                            <Col
                                m={4}
                                s={6}
                            >
                                <Card
                                border="1"
                                header={<CardTitle width="100%" image="https://static.lexpress.fr/medias_11422/w_1000,h_563,c_fill,g_north/v1490196225/perdre-du-poids-en-trompant-son-cerveau_5848485.jpg">Vous voulez perdre du poids ?</CardTitle>}
                                >
                                <b>Vous souhaitez perdre du poids et ne savez pas vraiment comment vous y prendre ?</b><br /> <br /> Pour maigrir durablement, mieux vaut faire quelques ajustements alimentaires et quelques exercices plutôt que de se priver inutilement.  
                                <br/><br/><Button
                                        onClick={(e) => {this.setPerdre(e)}}
                                        node="button"
                                        style={{
                                        marginRight: '5px'
                                        }}
                                        waves="light"
                                    >
                                        Je veux perdre du poids !
                                    </Button>
                                </Card>
                            </Col>
                
                            <Col
                                m={4}
                                s={2}
                            >

                                <Card
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image="data:image/jpeg;base64,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">Envie de vous musclez ?</CardTitle>}
                                revealIcon={<Icon>more_vert</Icon>}
                                >
                                <b>COMMENT SE MUSCLER RAPIDEMENT ET SUPPRIMER LA MASSE GRASSE ?</b><br /> <br /> Vous cherchez à vous muscler de manière complète et cibler avec efficacité l’ensemble de vos groupes musculaires ? Nous avons la solution.  
                                <br/> <br/><Button
                                        onClick={(e) => {this.setMuscle(e)}}
                                        node="button"
                                        style={{
                                        marginRight: '5px'
                                        }}
                                        waves="light"
                                    >
                                         Je veux me muscler !
                                    </Button>
                                </Card>
                            </Col>

                            <Col
                                m={4}
                                s={6}
                            >
                                <Card

                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image="data:image/jpeg;base64,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">Vous voulez prendre du poids ?</CardTitle>}
                                revealIcon={<Icon>more_vert</Icon>}
                                >
                                <b>Besoin de conseils pour prendre du poids : comment grossir vite et bien ?</b><br /> <br /> Pas facile de prendre du poids quand on n’a pas envie de manger ! La première chose à faire est donc de se mettre en appétit avec nos recettes ! 
                                <br/> <br/><Button
                                        onClick={(e) => {this.setPrendre(e)}}
                                        node="button"
                                        style={{
                                        marginRight: '5px'
                                        }}
                                        waves="light"
                                    >
                                        Je veux prendre du poids !
                                    </Button>
                               
                                </Card>
                            </Col>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default Objectif;