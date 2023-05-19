import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  {
    if (req.query.secret !== process.env.NEXT_PUBLIC_SECRET_REVALIDATE_TOKEN) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const path = req.query.path as string;

    await res.revalidate(path);

    return res.json({ revalidated: true });
  }
}
