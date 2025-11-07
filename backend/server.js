import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
import products from './data/products.js';


app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    
  res.json(products.find((p)=>p._id===req.params.id));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



