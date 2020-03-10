import Salle from "../models/Salle";
import jwt from "jsonwebtoken";

class UserController{

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
                image: req.body.image,
                email: req.body.email,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                type: req.body.type,
                url: req.body.url,
                ouverture: req.body.ouverture,
                fermeture: req.body.fermeture
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

    static async details(req, res){
        let status = 200;
        let body = {};

        try {            
            
            // .find() return tous
            // .findById(id)
            // .findOne({email: 'email@email.fr'})
            
            let id = req.params.id;
            let user = await User.findById(id);

            body = {
                user, 
                'message': 'Users details'
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
            
            await User.remove({_id: req.params.id});

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

            let user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

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
            let user = await User.findOne({email: req.body.email});

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


export default UserController;