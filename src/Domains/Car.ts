import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private seatsQty: number;
  private doorsQty: number;

  constructor(car: ICar) {
    super(
      car.id,

      car.model,

      car.status || false,

      car.color,

      car.year,

      car.buyValue,
    );
    this.seatsQty = car.seatsQty;
    this.doorsQty = car.doorsQty;
  }
}