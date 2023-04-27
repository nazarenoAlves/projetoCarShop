import { Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRoutes = Router();

CarRoutes.post('/', (req, res) => new CarController(req, res).create());

export default CarRoutes;