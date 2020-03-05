import mongoose from 'mongoose';

const connectDb = () => {
    let connection = null;

    connection = mongoose.connect(`mongodb://localhost:27017/kalm`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    return connection;
}






export default {connectDb};