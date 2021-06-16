import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import cors from 'cors';

const app = express();
dotenv.config();

const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const authRoutes = require('./routes/auth');

app.use(express.urlencoded({
    extended: true
}))
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(expressValidator());

//Connection
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        createIndex: true
    }).then((err) => {
        console.log('conect successfully!')
    })
    .catch(error => console.log(error.message))

mongoose.connection.on('error', err => {
    console.log(`data connect failed, ${err.message}`);
})

// routes
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', authRoutes);

// listen
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log('Thanh cong', port);
})