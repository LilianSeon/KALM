import Article from "../models/Article";
import User from "../models/User";
import Comment from "../models/Comment";

class CommentController{

    /**
     * Create COmmentaire into Database
     * @param {Request} req 
     * @param {Response} res
     */
    static async create(req, res){
        let status = 200;
        let body = {};

        try {

            
            let comment = await Comment.create({
                date: req.body.date,
                content: req.body.content,
                filmId: req.body.filmId,
                userId: req.body.userId
            });
            console.log(comment)

            body = {
                comment, 
                'message': 'Article created'
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
            let comments = await Comment.find({filmId: id});

            body = {
                comments, 
                'message': 'Comments list'
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
            let article = await Article.find({userId: id});
            let comment = await Comment.find({articleId: id});

            body = {
                comment,
                user,
                article, 
                'message': 'Comments details'
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
            
            await Comment.remove({_id: req.params.id});

            body = {
                'message': 'Comment Deleted'
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

            let comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true});

            body = {
                comment,
                'message': 'Users updated'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }
}

export default CommentController