const resolvers = {
  Query: {
    getAllOrders: (_, args, ctx) => ctx.orders,
    getOrderStatus: (_, { id }, ctx) =>
      ctx.orders.find(order => order.id === id),
    getQuote: async (_, args, ctx) => {
      const price = await ctx.quoteService.getQuote(args);
      return { ...args, price };
    },
  },

  Mutation: {
    putOrder: (root, args, ctx) => {
      const newOrder = {
        ...args,
        id: ctx.orders.length,
        price: args.payment,
      };
      ctx.orders.push(newOrder);
      return newOrder;
    },
  },

};

export default resolvers;
