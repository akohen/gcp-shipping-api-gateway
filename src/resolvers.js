const resolvers = {
  Query: {
    getAllOrders: (_, args, ctx) => ctx.orders,
    getOrderStatus: (_, { id }, ctx) =>
      ctx.orders.find(order => order.id === id),
    getQuote: (_, args) => ({ ...args, price: 10 }),
  },

  Mutation: {
    putOrder: (root, args, ctx) => {
      const newOrder = {
        ...args,
        id: ctx.orders.length,
      };
      ctx.orders.push(newOrder);
      return newOrder;
    },
  },

};

export default resolvers;
