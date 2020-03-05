import mongoose from 'mongoose';

//Création du schema
const userSchema = new mongoose.Schema({

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
        default: 0
    }
});

const User = mongoose.model('User', userSchema);
export default User;