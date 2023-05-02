import { expect } from 'chai';
import sinon from 'sinon';

import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import CarODM from '../../../src/Models/CarODM';

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

  it('Retonar um carro por id', async function () {
    const car:ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    const findByIdStub = sinon.stub(CarODM.prototype, 'findById').resolves(car);
    const carService = new CarService();

    const result = await carService.findById('634852326b35b59438fbea2f');
    expect(result).to.deep.equal(result);

    findByIdStub.restore();
  });

  it('Deve criar um novo carro', async function () {
    const newCar: ICar = {
      id: '2403201706',
      model: 'HB20',
      status: false,
      year: 2022,
      color: 'white',
      seatsQty: 5,
      doorsQty: 4,
      buyValue: 80000,
    };
    const createStub = sinon.stub(CarODM.prototype, 'create').resolves(newCar);

    const carService = new CarService();

    const result = await carService.createCar(newCar);

    expect(result).to.deep.equal(newCar);
    createStub.restore();
  });

  it('Deve ser possível atualizar um carro', async function () {
    const carToUpdate: ICar = {
      id: '2403201706',
      model: 'HB20',
      status: false,
      year: 2022,
      color: 'white',
      seatsQty: 5,
      doorsQty: 4,
      buyValue: 80000,
    };

    const carUpdate: ICar = {
      id: '2403201706',
      model: 'HB20',
      status: false,
      year: 2022,
      color: 'white',
      seatsQty: 5,
      doorsQty: 4,
      buyValue: 50000,
    };

    const findByIdStub = sinon
      .stub(CarODM.prototype, 'findById').returns(Promise.resolve(carToUpdate));
    const updateStub = sinon
      .stub(CarODM.prototype, 'update').returns(Promise.resolve(carUpdate));

    const carService = new CarService();
    const result = await carService.updated('12345', carUpdate);

    expect(result).to.deep.equal(carUpdate);

    findByIdStub.restore();
    updateStub.restore();
  });
});