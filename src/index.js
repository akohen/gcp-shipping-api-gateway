import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './schema';
import { orders } from './data';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { orders },
});

const port = process.env.PORT || 8080;
server.listen({ http: { port } }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
