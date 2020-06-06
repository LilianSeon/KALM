import mongoose from 'mongoose';

//Création du schema
const objectifSchema = new mongoose.Schema({

    objectifName: {
        type: String
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId
    }
});

const Objectif = mongoose.model('Objectif', objectifSchema);
export default Objectif;