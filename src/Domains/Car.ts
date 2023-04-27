import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private _seatsQty: number;
  private _doorsQty: number;

  constructor(car: ICar) {
    super(
      car.id,

      car.model,

      car.status || false,

      car.color,

      car.year,

      car.buyValue,
    );
    this._seatsQty = car.seatsQty;
    this._doorsQty = car.doorsQty;
  }
}