import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query { 
    getQuote(from: String!, to: String!, weight: Int!): Quote
    getOrderStatus(order: ID!): Order
    getAllOrders: [Order]
  }

  type Mutation {
    putOrder( from: String!, to: String!, weight: Int!, payment: Int! ) : Order
  }

  type Quote { from: String!, to: String!, weight: Int!, price: Int! }
  type Order { id: ID!, from: String!, to: String!, weight: Int!, price: Int!, status: String!, orderDate: String!, deliveryDate: String }
`;

export default typeDefs;
