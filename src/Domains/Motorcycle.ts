import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(
      motorcycle.id,
      motorcycle.model,
      motorcycle.status || false,
      motorcycle.color,
      motorcycle.year,
      motorcycle.buyValue,
    );
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }
}