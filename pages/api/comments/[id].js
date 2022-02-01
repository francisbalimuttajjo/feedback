import connect from "../../../db/db";
import Comment from "../../../models/Comment";
import Reply from "../../../models/Reply";

export default async function handler(req, res) {
  connect();
  if (req.method === "GET") {
    try {
      
      const data = await Comment.findOne({ _id: req.query.id }).populate({
        path: "replies",
        model: Reply,
      });
     
      if (!data) {
        return res.status(400).json({
          status: "fail",
          msg: "comment not available",
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
