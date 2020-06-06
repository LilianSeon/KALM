import Article from "../models/Article";
import User from "../models/User";
import Objectif from "../models/Objectif";

class ObjectifController{

    /**
     * Create Objectif into Database
     * @param {Request} req 
     * @param {Response} res
     */
    static async create(req, res){
        let status = 200;
        let body = {};

        try {

            
            let objectif = await Objectif.create({
                nom:req.body.nom,
                objectifName: req.body.objectif,
                userId: req.body.userId
            });

            body = {
                objectif, 
                'message': 'Objectif created'
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


            let id = req.params.id;
            let objectifs = await Objectif.find({userId: id});

            body = {
                objectifs, 
                'message': 'Objectifs list'
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
            
            let id = req.params.id;
            let user = await User.findById(id);
            let objectif = await Objectif.find({userId: id});

            body = {
                objectif,
                user,
                'message': 'Objectifs details'
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
            
            await Objectif.remove({_id: req.params.id});

            body = {
                'message': 'objectif Deleted'
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

            let objectif = await Objectif.findByIdAndUpdate(req.params.id, req.body, {new: true});

            body = {
                objectif,
                'message': 'Objectifs updated'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }
}

export default ObjectifController;