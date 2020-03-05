import mongoose from 'mongoose';

//Création du schema
const FilmSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    note: {
        type: Number,
        required: true
    },
    date:{
        type: String
    },
    duree:{
        type: String
    },
    genre:{
        type: String
    }
});

const Film = mongoose.model('Film', FilmSchema);
export default Film;