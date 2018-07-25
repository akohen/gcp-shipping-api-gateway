import { mockServer } from 'graphql-tools';
import typeDefs from './schema';

const MockServer = mockServer(typeDefs);

describe('Schema', () => {
  it('should have valid type definitions', async () => {
    expect(async () => {
      await MockServer.query('{ __schema { types { name } } }');
    }).not.toThrow();
  });
});


describe('Orders', () => {
  it('should return the order list', async () => {
    const results = await MockServer.query('{getAllOrders { id }}');
    expect(results.data.getAllOrders.length).toBe(2);
  });
});
