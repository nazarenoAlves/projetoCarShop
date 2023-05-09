import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorRoutes = Router();
MotorRoutes.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());
MotorRoutes.get('/', (req, res, next) => new MotorcycleController(req, res, next).findAll());
MotorRoutes.get('/:id', (req, res, next) => new MotorcycleController(req, res, next).findById());
export default MotorRoutes;