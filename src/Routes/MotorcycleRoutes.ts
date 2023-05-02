import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorRoutes = Router();
MotorRoutes.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());

export default MotorRoutes;