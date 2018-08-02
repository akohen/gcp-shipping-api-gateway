import { JWT } from 'google-auth-library';
import keys from '../jwt.keys.json';

const quoteService = {
  getQuote: async ({ from, to, weight }) => {
    const client = new JWT({
      email: keys.client_email,
      key: keys.private_key,
      additionalClaims: { target_audience: process.env.PRICING_SERVICE_CLIENT_ID },
    });
    try {
      const res = await client.request({ url: `${process.env.PRICING_SERVICE}/quote/${from}-${to}-${weight}` });
      return res.data.price;
    } catch (err) {
      console.error(err.message);
      if (err.code === '400') {
        throw new Error('No quote returned');
      } else {
        throw new Error('Server error!!');
      }
    }
  },
};

export default quoteService;
