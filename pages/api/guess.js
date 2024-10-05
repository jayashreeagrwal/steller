import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Process the request body here
  const { choice, constID, explored, unexplored, start, end, life } = req.body;
  // ...
  res.status(200).json({ points, life, explored, unexplored, msg });
};

export default handler