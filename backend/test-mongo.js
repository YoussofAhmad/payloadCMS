const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const MONGO_URI = 'mongodb+srv://youssofahmad32:BsDx6ykvIlqI2EiZ@cluster0.g5asw.mongodb.net/myDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    serverSelectionTimeoutMS: 5000, // Optional: Adjust timeout for server selection
})
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch(err => console.error('Connection error:', err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connection to MongoDB is open and operational!');
});
