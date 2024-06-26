import express from 'express';
import { PORT, MongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware to parse JSON data
app.use(express.json());


//Middleware for handling CORS policy
// Option 1: Allow all origins with default of cors(*)
app.use(cors());

//Option 2: Allow custom origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// )


app.get('/', (req, res) => {
  console.log(req)
  res.status(234).send('Hello World!')
});

app.use('/books', booksRoute);

mongoose.connect(MongoDBURL)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.log('Error:', error);
});