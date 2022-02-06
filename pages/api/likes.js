import connect from "../../db/db";
import Likes from "../../models/Likes";
import { sendResponse } from "../../utils";
export default async function handler(req, res) {
  connect();
  if (req.method === "POST") {
    try {
      const { user, suggestion } = req.body;
      const oldLike = await Likes.findOne({ user, suggestion });
      if (oldLike) {
        return sendResponse(
          req,
          res,
          400,
          "fail",
          "You can only upvote a feedback  once"
        );
      }

      const data = await Likes.create({
        user,
        suggestion,
      });
      return sendResponse(req, res, 201, "success", data);
    } catch (err) {
      return sendResponse(req, res, 400, "fail", err.message);
    }
  }
  return sendResponse(req, res, 400, "fail", "invalid method");
}
