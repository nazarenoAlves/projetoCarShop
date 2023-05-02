import {
  Model,
  Schema,
  UpdateQuery,
  isValidObjectId,
  model,
  models,
} from 'mongoose';
import { HttpException } from '../middleware/ErrorHandler';

abstract class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.model = models[modelName] || model(modelName, schema);
  }

  public async create(data: T): Promise<T> {
    return this.model.create({ ...data });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find({}, { __v: false });
  }

  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new HttpException(422, 'Invalid mongo id');
    const result = await this.model.findOne({ _id: id }, { __v: false });
    return result as T;
  }

  public async update(id: string, data: UpdateQuery<T>): Promise<T | null> {
    if (!isValidObjectId(id)) throw new HttpException(422, 'Invalid mongo id');
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }
}

export default AbstractODM;