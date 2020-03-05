import mongoose from 'mongoose';

//Création du schema
const userSchema = new mongoose.Schema({

    prenom:{
        type: String,
        required: true
    },
    nom:{
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
    password:{
        type: String,
        required: true
    },
    user_role:{
        type: Number,
        default: 1
    }
});

const User = mongoose.model('User', userSchema);
export default User;