import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  if (method !== "POST") {
    return res
      .status(400)
      .json({ error: "Invalid HTTP method. Only POST method is allowed." });
  }

  if (query.secret !== process.env.SECRET_REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate("/isr");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error while revalidating");
  }
}
