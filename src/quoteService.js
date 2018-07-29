import fetch from 'node-fetch';

const quoteService = {
  getQuote: ({ from, to, weight }) =>
    fetch(`${process.env.PRICING_SERVICE}/quote/${from}-${to}-${weight}`, { timeout: 1500 })
      .then(response => response.json())
      .then(json => json.price),
};

export default quoteService;
