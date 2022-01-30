import connect from "../../db/db";
import Suggestion from "../../models/Suggestion";

export default async function handler(req, res) {
  connect();
  if (req.method === "POST") {
    
    try {
      const { title, category, suggestion } = req.body;

      const data = await Suggestion.create({
        title,
        category,
        suggestion,
        upvotes: 0,
        comments: 0,
      });

      return res.status(200).json({
        status: "success",
        data,
      });
    } catch (err) {
      return res.status(400).json({
        status: "fail",
        data: err.message,
      });
    }
  }
  return res.status(400).json({
    status: "fail",
    data: "invalid method",
  });
}
