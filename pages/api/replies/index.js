import connect from "../../../db/db";
import Reply from "../../../models/Reply";
import { sendResponse } from "../../../utils";

export default async function handler(req, res) {
  connect();
  if (req.method === "POST") {
    try {
      const { name, email, image, comment, reply } = req.body;

      const data = await Reply.create({
        name,
        email,
        image,
        comment,
        reply,
      });
      return sendResponse(req, res, 201, "success", data);
    } catch (err) {
      return sendResponse(req, res, 400, "fail", err.message);
    }
  }
  return sendResponse(req, res, 400, "fail", "invalid method");
}
