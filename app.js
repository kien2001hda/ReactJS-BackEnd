import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv';

import productRoutes from './routes/product';

const app = express();
app.use(morgan('dev'));

dotenv.config();

// routes
app.use('/api', productRoutes);

// listen
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log('Thanh cong', port);
})