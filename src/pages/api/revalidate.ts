import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method !== "POST") {
    return res
      .status(400)
      .json({ error: "Invalid HTTP method. Only POST method is allowed." });
  }

  // Unauthorized access as invalid token
  if (body.secret !== process.env.SECRET_REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    if (!body) {
      res.status(400).send("Bad reqeust (no body)");
      return;
    }

    const idToRevalidate = body.id;

    if (idToRevalidate) {
      // you would need to trigger revalidation here

      return res.json({ revalidated: true });
    }
  } catch (err) {
    return res.status(500).send("Error while revalidating");
  }
}
