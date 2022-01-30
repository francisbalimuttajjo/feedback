import connect from "../../../db/db";
import Suggestion from "../../../models/Suggestion";
import Comment from "../../../models/Comment";

export default async function handler(req, res) {
  connect();
  if (req.method === "GET") {
    try {
      const data = await Suggestion.findOne({ _id: req.query.id }).populate({
        path: "comment",
        model: Comment,
      });
      if (!data) {
        return res.status(400).json({
          status: "fail",
          msg: "suggestion not available",
        });
      } else {
        return res.status(200).json({
          status: "success",
          data,
        });
      }
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
