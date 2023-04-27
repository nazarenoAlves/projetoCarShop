import express, { json } from 'express';
import CarRoutes from './Routes/CarRoutes';
import ErrorHandler from './middleware/ErrorHandler';

const app = express();
app.use(json());
app.use('/cars', CarRoutes);

app.use(ErrorHandler);
export default app;
