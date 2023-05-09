import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import { HttpException } from '../middleware/ErrorHandler';
// import { HttpException } from '../middleware/ErrorHandler';

class MotorcycleService {
  private CreateMotocycleDomain(motorcycle:IMotorcycle | null):Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(
        {
          id: motorcycle?.id,
          model: motorcycle?.model,
          color: motorcycle?.color,
          buyValue: motorcycle?.buyValue,
          status: motorcycle?.status,
          year: motorcycle?.year,
          category: motorcycle?.category,
          engineCapacity: motorcycle?.engineCapacity,
        },
      );
    }
    return null;
  }

  public async createMotor(motocycle: IMotorcycle) {
    const motorODM = new MotorcycleODM();
    const newMotor = await motorODM.create(motocycle);

    return this.CreateMotocycleDomain(newMotor);
  }

  public async findAll(): Promise<IMotorcycle[]> {
    const motorODM = new MotorcycleODM();
    const motors = await motorODM.findAll();

    return motors;
  }

  public async findById(id:string):Promise<IMotorcycle> {
    const motorODM = new MotorcycleODM();
    const motor = await motorODM.findById(id);
    if (!motor) throw new HttpException(404, 'Motorcycle not found');

    return motor as IMotorcycle;
  }
}

export default MotorcycleService;