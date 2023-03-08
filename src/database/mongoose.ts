import mongoose from 'mongoose';

const url = process.env.URL_DATABASE as string
mongoose.set('strictQuery', false);
/**
 * Connects to the Mongo server
 */
mongoose.connect(url, {sslValidate: false}).then(() => {
  console.log('Connection to MongoDB server established');
}).catch((error) => {
  console.log('Unnable to connect to MongoDB server');
  console.log(error)
});
