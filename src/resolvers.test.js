import { graphql } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';

describe('Resolvers', () => {
  test('Should match the schema', async () => {
    expect(async () => makeExecutableSchema({ typeDefs, resolvers })).not.toThrow();
  });
});

const schema = makeExecutableSchema({ typeDefs, resolvers });
let context;

beforeEach(() => {
  jest.resetModules();
  context = require('./data'); // eslint-disable-line global-require
});

describe('Orders', () => {
  it('Should return all orders', () => { // pure function test
    expect(resolvers.Query.getAllOrders(null, {}, context).length).toBe(1);
  });

  it('Should return a quote', async () => { // Test by executing the graphql schema
    const query = '{getQuote(from:"earth", to:"venus", weight:10) { price }}';
    const { data } = await graphql(schema, query, {}, context);
    expect(data.getQuote.price).toBe(10);
  });

  it('should create a new order', async () => {
    const query = 'mutation {putOrder(from:"earth", to:"venus", weight:10, payment:10){id} }';
    const { data } = await graphql(schema, query, {}, context);
    expect(data.putOrder.id).toBe('1');
  });
});
