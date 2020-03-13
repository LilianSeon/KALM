import mongoose from 'mongoose';

//Création du schema
const commentSchema = new mongoose.Schema({

    date: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    nom:{
        type: String
    },
    image:{
        type: String
    },
    salleId:{
        type: mongoose.Schema.Types.ObjectId
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId
    }
});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;