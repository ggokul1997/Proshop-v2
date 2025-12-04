import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productsRoutes from './routes/productsRoutes.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();
const app = express();

app.use('/api/products',productsRoutes);

const PORT = process.env.PORT || 5000;


app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



