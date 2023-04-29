import { expect } from 'chai';
import sinon from 'sinon';

import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Deve criar e retornar veiculos do DB', function () {
  it('deve retornar todos os veiculos', async function () {
    const cars: ICar[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];

    const findAllStub = sinon.stub(Model, 'find').resolves(cars);
    const carService = new CarService();

    const result = await carService.findAll();

    expect(result).to.deep.equal(cars);

    findAllStub.restore();
  });
});