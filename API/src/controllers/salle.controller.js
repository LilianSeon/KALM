import Salle from "../models/Salle";
import jwt from "jsonwebtoken";
require('dotenv').config();
var api_key = process.env.MAILGUN_API_KEY;
var domain = 'sandbox0a4dff510fb3431989171bbeba06db1d.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

class SalleController{

    /**
     * Create User into Database
     * @param {Request} req 
     * @param {Response} res
     */
    static async create(req, res){
        let status = 200;
        let body = {};

        try {

            
            let salle = await Salle.create({
                nom: req.body.nom,
                description: req.body.description,
                image1: req.body.image1,
                image2: req.body.image2,
                image3: req.body.image3,
                image4: req.body.image4,
                image5: req.body.image5,
                email: req.body.email,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                type: req.body.type,
                url: req.body.url,
                ouverture: req.body.ouverture,
                fermeture: req.body.fermeture,
                note: (req.body.note) ? req.body.note : 0
            });

            body = {
                salle, 
                'message': 'Salle created'
            };
            
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    static async preinscriptionEmail(req, res){

        let genre= req.body.genre;
        let nom= req.body.nom;
        let prenom= req.body.prenom;
        let portable= req.body.portable;
        let naissance= req.body.naissance;
        let email= req.body.email;
        let nomSalle= req.body.nomSalle;
        let emailSalle= req.body.emailSalle;

        var data = {
            from: ''+prenom+' '+nom+' <'+email+'>',
            to: 'eragnylilian@live.fr', // emailSalle
            subject: 'Nouvelle pré-inscription à '+nomSalle+'',
            html: "Bonjour,<br><br>"+genre+" "+nom+" "+prenom+" né le "+naissance+" souhaite s'inscrire à la salle de sport <b>"+nomSalle+"</b>.<br><br>Voici ses coordonnées :<ul><li>"+portable+"</li><li>"+email+"</li></ul><br>L'équipe KALM vous prie de bien prendre en compte ces informations avant l'arriver de "+genre+" "+nom+" "+prenom+" dans votre salle.<br><br>Merci,<br><br>Cordialement,<br><br> L'équipe KALM."
          };
           
          mailgun.messages().send(data, function (error, body) {
            console.log(body);
          });
    }


    static async list(req, res){
        let status = 200;
        let body = {};


        try {            
            
            // .find() return tous
            // .findById(id)
            // .findOne({email: 'email@email.fr'})
            
            let salles = await Salle.find();

            body = {
                salles, 
                'message': 'Salles list'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    static async searchMap(req, res){
        let status = 200;
        let body = {};

        let query = req.params.query

        try {            
            
            // .find() return tous
            // .findById(id)
            // .findOne({email: 'email@email.fr'})
            
            let salles = await Salle.find({"nom": {'$regex': query, '$options' : 'i'}});

            body = {
                salles, 
                'message': 'Salles list Search Map'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    static async details(req, res){
        let status = 200;
        let body = {};

        try {            
            
            // .find() return tous
            // .findById(id)
            // .findOne({email: 'email@email.fr'})
            
            let id = req.params.id;
            let salle = await Salle.findById(id);

            body = {
                salle, 
                'message': 'Salles details'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    static async delete(req, res){
        let status = 200;
        let body = {};

        try {            
            
            // .find() return tous
            // .findById(id)
            // .findOne({email: 'email@email.fr'})
            
            await Salle.remove({_id: req.params.id});

            body = {
                'message': 'Users Deleted'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    static async update(req, res){
        let status = 200;
        let body = {};

        try {            
            
            // .find() return tous
            // .findById(id)
            // .findOne({email: 'email@email.fr'})

            let user = await Salle.findByIdAndUpdate(req.params.id, req.body, {new: true});

            body = {
                user,
                'message': 'Users updated'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    static async auth(req, res){
        let status = 200;
        let body = {};

        try {            
            
            //Check si l'utilisateur a le bon mdp et email
            let user = await Salle.findOne({email: req.body.email});

            if(user && user.password === req.body.password){

            //Générer un JWT

            let token = jwt.sign({
                sub: user._id
            }, "monsecret");

            body = {
                user,
                token,
                'message': 'User authenticated'
            };

            }else{
                status = 401;
                body = {
                    'message': 'Error email ou de mdp'
                };
            }
            

        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

}


export default SalleController;