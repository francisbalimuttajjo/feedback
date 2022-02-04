import connect from "../../db/db";
import Likes from "../../models/Likes";

export default async function handler(req, res) {
  connect();
  if (req.method === "POST") {
    try {
      const { user, suggestion } = req.body;
      const oldLike = await Likes.findOne({ user, suggestion });
      if (oldLike) {
        return res.status(400).json({
          status: "fail",
          data: "You can only vote a suggestion once",
        });
      }

      const data = await Likes.create({
        user,
        suggestion,
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
