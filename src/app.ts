import express, { json } from 'express';
import CarRoutes from './Routes/CarRoutes';

const app = express();
app.use(json());

app.use('/cars', CarRoutes);

export default app;
