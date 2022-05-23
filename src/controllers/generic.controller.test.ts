import { Application } from 'express';
import request from 'supertest';
import { initializeServer } from '../core/server';

describe('Controller: Generic', () => {
  let app: Application;

  beforeAll(async () => {
    app = await initializeServer();
  });

  it('Should return 200 status at /status', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toBe(200);
  });
});
