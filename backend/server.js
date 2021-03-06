import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import productRouters from './routes/productRoutes.js';
import userRouters from './routes/userRoutes.js';
import orderRouters from './routes/orderRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json()); // accept json object inside body

app.get('/', (req, res) => {
	res.send('API is running...');
}); // Testing

app.use('/api/orders', orderRouters);
app.use('/api/products', productRouters);
app.use('/api/users', userRouters);

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
