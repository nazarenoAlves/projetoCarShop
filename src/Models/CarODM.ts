import {
  Model,
  Schema,
  isValidObjectId,
  model,
  models,
} from 'mongoose';
import { HttpException } from '../middleware/ErrorHandler';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>(
      {
        model: { type: String, required: true },
        year: { type: Number, required: true },
        color: { type: String, required: true },
        status: { type: Boolean },
        buyValue: { type: Number, required: true },
        doorsQty: { type: Number, required: true },
        seatsQty: { type: Number, required: true },
      },
      {
        toJSON: {
          transform(doc, ret) {
            const transformed = {
              id: ret._id,
              buyValue: ret.buyValue,
              seatsQty: ret.seatsQty,
              doorsQty: ret.doorsQty,
              color: ret.color,
              model: ret.model,
              year: ret.year,
              status: ret.status,
            };
            return transformed;
          },
        },
      },
    );
    this.model = models.Car || model('Car', this.schema);
  }

  public async Create(car: ICar): Promise<ICar> {
    const createdCar = await this.model.create({ ...car });
    return createdCar.toJSON();
  }

  public async findAll(): Promise<ICar[]> {
    return this.model.find({}, { __v: false });
  }

  public async findById(id:string):Promise<ICar> {
    if (!isValidObjectId(id)) throw new HttpException(422, 'Invalid mongo id');
    const car = await this.model.findOne({ _id: id }, { __v: false });
    return car as ICar;
  }
}

export default CarODM;
