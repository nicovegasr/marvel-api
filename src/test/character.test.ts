import mongoose from 'mongoose';
import * as supertest from 'supertest';
import { jest, test, describe, afterAll, beforeAll } from '@jest/globals';

const { app, server } = require('../index');
const api = supertest(app);
jest.setTimeout(100000)

beforeAll(async () => {

});

describe('Character id endpoints test', () => {
  test('Id should be a number. ', async () => {
    await api.get('/character/id/nosoyunid').expect(501)
  });
  /**
  test('Heroe should not be in database. ', async () => {
    await api.get('/character/id/1').expect(404)
  });
  */

  test('Heroe should be in database. ', async () => {
    await api.get('/character/id/1011266').expect(200)
  });
});

describe('Character name endpoints test', () => {
  /**
  test('Heroe should not be in database. ', async () => {
    await api.get('/character/name/12345').expect(404)
  });
  */
  test('Heroe should be in database. ', async () => {
    await api.get('/character/name/Adam Destine').expect(200)
  });
});

describe('Default endpoints test', () => {
  test('Default endpoint should return 501.', async () => {
    const res = await api.get('/ruta/random')
    expect(res.status).toBe(501)
  });
});

/** Closing connections */
afterAll(async () => {
  await server.close();
  await mongoose.connection.close();
});
