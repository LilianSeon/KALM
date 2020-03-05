import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './src/routes/routes';
import database from './src/models/database';
import jwt from './src/config/jwt';

//Init
const app = express();

//JWT
//app.use(jwt());

//Config
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origin: true}));

//Use routes
app.use(router);

//Launch
const port = 3001;

database.connectDb().then(async () => {
    console.log('Database server is connected...');
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});