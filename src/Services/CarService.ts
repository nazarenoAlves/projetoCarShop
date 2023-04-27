import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

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
    console.log(newCar);
    
    return this.createCarDomain(newCar);
  }
}

export default CarService;