import connect from "../../../db/db";
import Comment from "../../../models/Comment";
import { sendResponse } from "../../../utils";

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
      return sendResponse(req, res, 201, "success", data);
    } catch (err) {
      return sendResponse(req, res, 400, "fail", err.message);
    }
  }
  return sendResponse(req, res, 400, "fail", "invalid method");
}
