import mongoose from 'mongoose';

//Création du schema
const salleSchema = new mongoose.Schema({

    nom:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image1:{
        type: String,
        required: true
    },
    image2:{
        type: String,
    },
    image3:{
        type: String,
    },
    image4:{
        type: String,
    },
    image5:{
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    url:{
        type: String,
        required: true
    },
    longitude:{
        type: String,
        required: true
    },
    latitude:{
        type: String,
        required: true
    },
    type:{
        type: Number,
        default: 0
    },
    ouverture:{
        type: String,
    },
    fermeture:{
        type: String,
    },
    note:{
        type: Number,
        default: 0
    }
});

const Salle = mongoose.model('Salle', salleSchema);
export default Salle;