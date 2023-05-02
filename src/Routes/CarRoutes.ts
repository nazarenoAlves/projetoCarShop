import { Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRoutes = Router();

CarRoutes.post('/', (req, res, next) => new CarController(req, res, next).create());
CarRoutes.get('/', (req, res, next) => new CarController(req, res, next).findAll());
CarRoutes.get('/:id', (req, res, next) => new CarController(req, res, next).findById());
CarRoutes.put('/:id', (req, res, next) => new CarController(req, res, next).updated());
export default CarRoutes;