import express, { json } from 'express';
import CarRoutes from './Routes/CarRoutes';
import ErrorHandler from './middleware/ErrorHandler';
import MotorRoutes from './Routes/MotorcycleRoutes';

const app = express();
app.use(json());
app.use('/cars', CarRoutes);
app.use('/motorcycles', MotorRoutes);

app.use(ErrorHandler);
export default app;
