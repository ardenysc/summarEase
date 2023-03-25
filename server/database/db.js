import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

<<<<<<< HEAD
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.js4ig6k.mongodb.net/summarEase?retryWrites=true&w=majority`;
=======
    const MONGODB_URI = `mongodb+srv://ardenyschoi:kRfgn97QgyuhKUon@cluster0.js4ig6k.mongodb.net/summarEase?retryWrites=true&w=majority`;
>>>>>>> 7a240eedbb7f79653bbf1785ba2514a82cdb0c41
    
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;