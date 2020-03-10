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
    image:{
        type: String,
        required: true
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
    }
});

const Salle = mongoose.model('Salle', salleSchema);
export default Salle;