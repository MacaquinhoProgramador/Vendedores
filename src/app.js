import express from 'express';
import connectDB from './config/db.js';
import vendedorRouter from './routers/vendedorRouter.js';

connectDB();

const app = express();
app.use(express.json());

app.use('/vendedor', vendedorRouter);

app.listen(3000, () => console.log('Server running on port 3000'));