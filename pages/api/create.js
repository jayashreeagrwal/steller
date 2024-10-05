import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { body } = req;
    // Process the request body here
    res.status(201).json({ message: 'Created successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;