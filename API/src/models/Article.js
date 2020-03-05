import mongoose from 'mongoose';

//Création du schema
const articleSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Article = mongoose.model('Article', articleSchema);
export default Article;