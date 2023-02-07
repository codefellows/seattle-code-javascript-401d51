'use strict';

const { db, Customers, Orders } = require('../models/');

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Customers and Orders Collections', () => {

  let testCustomer = {
    name: 'test customer',
  }
  let testOrder = {
    name: 'test order',
  }
  let customers = null;
  let customer = null;
  let orders = null;
  let order = null;

  it('should be able to create a Customer and an Order', async () => {
    customer = await Customers.create(testCustomer);
    testOrder['customerId'] = customer.id;
    order = await Orders.create(testOrder);

    expect(customer.name).toEqual(testCustomer.name);
    expect(order.name).toEqual(testOrder.name);
    expect(order.customerId).toEqual(customer.id);
  });

  it ('shoud be able to fetch Customers and include Orders', async () => {
    customers = await Customers.read(null, { include: Orders.model });

    expect(customers).toBeTruthy();
    expect(customers[0].name).toEqual(testCustomer.name);
    expect(customers[0].Orders).toBeTruthy();
  });

  it('should be able to fetch Orders with an associated Customer', async () => {
    orders = await Orders.read(null, { include: Customers.model });

    expect(orders).toBeTruthy();
    expect(orders[0].name).toEqual(testOrder.name);
    expect(orders[0].Customer).toBeTruthy();
  });

  it('should be able to update a Customer', async () => {
    customer = await Customers.update(customer.id, {name: 'test customer 2'});

    expect(customer).toBeTruthy();
    expect(customer.name).toEqual('test customer 2');
  });

  it ('should be able to update an Order', async () => {
    order = await Orders.update(order.id, {name: 'test order 2'});

    expect(order).toBeTruthy();
    expect(order.name).toEqual('test order 2');
  });

  it('should be able to delete a Order', async () => {
    let OrderId = await Orders.delete(order.id);

    expect(OrderId).toEqual(order.id);

    orders = await Orders.read();

    expect(orders.length).not.toBeTruthy();
  });

  it('shuold be able to delete a Customer', async () => {
    let CustomerId = await Customers.delete(customer.id);

    expect(CustomerId).toEqual(customer.id);

    customers = await Customers.read();
    
    expect(customers.length).not.toBeTruthy();
  })
});
