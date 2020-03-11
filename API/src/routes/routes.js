import { Router } from 'express';
import UserController from '../controllers/users.controller';
import ArticleController from '../controllers/articles.controller';
import CommentController from '../controllers/comments.controller'
import SalleController from '../controllers/salle.controller'
import Auth from './../config/auth';

const router = Router();

//ROUTER

//GET, POST, PUT, DELETE, 

router.get('/test', function(req, res){
    res.send("test");
});

//Users routes
router.get('/users', UserController.list);

router.post('/users/authenticate', UserController.auth);

router.post('/users', UserController.create);

router.get('/users/:id', UserController.details);

router.delete('/users/:id', UserController.delete);

router.put('/users/:id', UserController.update);


//Articles

router.get('/articles', ArticleController.list);

router.post('/articles', ArticleController.create);

router.get('/articles/:id', ArticleController.details);

router.delete('/articles/:id', ArticleController.delete);

router.put('/articles/:id', ArticleController.update);

// Comment

router.get('/comments/:id', CommentController.list);

router.post('/comments', CommentController.create);

router.get('/comments/:id', CommentController.details);

router.delete('/comments/:id', CommentController.delete);

router.put('/comments/:id', CommentController.update);


// Salle

router.post('/salle', SalleController.create);

router.get('/salle', SalleController.list);

router.get('/salle/:query', SalleController.searchMap);



export default router;

//Postman , MongoDB Community Edition - (Robot3T)