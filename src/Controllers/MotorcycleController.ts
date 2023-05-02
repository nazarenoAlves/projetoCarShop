import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motor: IMotorcycle = this.req.body;
    if (!motor.status) motor.status = false;
    try {
      const newMotor = await this.service.createMotor(motor);
      return this.res.status(201).json(newMotor);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;