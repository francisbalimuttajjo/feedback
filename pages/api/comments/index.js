import connect from "../../../db/db";
import Comment from "../../../models/Comment";

export default async function handler(req, res) {
  connect();
  if (req.method === "POST") {
    try {
      const { comment, suggestion, email, image, name } = req.body;

      const data = await Comment.create({
        comment,
        suggestion,
        email,
        image,
        name,
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
