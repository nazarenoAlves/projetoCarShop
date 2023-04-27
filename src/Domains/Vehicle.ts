class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  constructor(
    id: string | undefined,
    model: string,
    status: boolean,
    color: string,
    year: number,
    buyValue: number,
  ) {
    this.id = id;
    this.model = model;
    this.status = status || false;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
  }
}

export default Vehicle;