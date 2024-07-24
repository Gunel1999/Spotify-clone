import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js';
import albumRouter from './src/routes/albumRoute.js';
import connectDB from './src/config/mongoDB.js';
import connetCloudinary from './src/config/cloudinary.js';

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connetCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/song', songRouter);
app.use('/api/album', albumRouter);

app.get('/', (req, res) => {
  res.send('server is running');
});

app.listen(port, () => console.log(`server is running on port ${port}`));
