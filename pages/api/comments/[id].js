import connect from "../../../db/db";
import Comment from "../../../models/Comment";
import Reply from "../../../models/Reply";
import { sendResponse } from "../../../utils";

export default async function handler(req, res) {
  connect();
  if (req.method === "GET") {
    try {
      const data = await Comment.findOne({ _id: req.query.id }).populate({
        path: "replies",
        model: Reply,
      });
      if (!data) {
        return sendResponse(req, res, 400, "fail", "comment not available");
      } else {
        return sendResponse(req, res, 200, "success", data);
      }
    } catch (err) {
      return sendResponse(req, res, 400, "fail", err.message);
    }
  }
  return sendResponse(req, res, 400, "fail", "invalid method");
}
