import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import { HttpException } from '../middleware/ErrorHandler';

class CarService {
  private createCarDomain(car:ICar | null):Car | null {
    if (car) {
      return new Car(
        {
          id: car.id,
          model: car?.model,
          color: car?.color,
          buyValue: car?.buyValue,
          status: car?.status,
          year: car?.year,
          doorsQty: car?.doorsQty,
          seatsQty: car?.seatsQty,
        },
      );
    }
    return null;
  }

  public async createCar(car:ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.Create(car);
    
    return this.createCarDomain(newCar);
  }

  public async findAll() {
    const carODM = new CarODM();
    return carODM.findAll();
  }

  public async findById(id:string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    
    if (!car) throw new HttpException(404, 'Car not found');
    return car;
  }

  public async updated(id: string, carUpdate: ICar) {
    const carODM = new CarODM();
    const car = await carODM.updated(id, carUpdate);
    if (car === null) throw new HttpException(404, 'Car not found');
    return car;
  }
}

export default CarService;