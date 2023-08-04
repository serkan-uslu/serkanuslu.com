import { NextApiRequest, NextApiResponse } from 'next';
import { getLinkPreview, getPreviewFromContent } from 'link-preview-js';

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query;

  try {
    const data = await getLinkPreview(decodeURIComponent(url as string));
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch link preview' });
  }
};

export default preview;
