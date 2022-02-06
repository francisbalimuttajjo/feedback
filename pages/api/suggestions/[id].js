import connect from "../../../db/db";
import Suggestion from "../../../models/Suggestion";
import Comment from "../../../models/Comment";
import Likes from "../../../models/Likes";
import { sendResponse } from "../../../utils";

export default async function handler(req, res) {
  connect();
  if (req.method === "GET") {
    try {
      const data = await Suggestion.findOne({ _id: req.query.id })
        .populate({
          path: "comment",
          model: Comment,
        })
        .populate({
          path: "likes",
          model: Likes,
        });
      if (!data) {
        return sendResponse(req, res, 404, "fail", "suggestion not availeble");
      } else {
        return sendResponse(req, res, 200, "success", data);
      }
    } catch (err) {
      return sendResponse(req, res, 400, "fail", err.message);
    }
  }
  return sendResponse(req, res, 400, "fail", "invalid method");
}
