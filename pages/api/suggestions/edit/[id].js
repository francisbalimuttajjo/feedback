import connect from "../../../../db/db";
import Suggestion from "../../../../models/Suggestion";
import { sendResponse } from "../../../../utils";

export default async function handler(req, res) {
  connect();
  if (req.method === "PATCH") {
    try {
      const { title, category, suggestion } = req.body;
      const data = await Suggestion.findOneAndUpdate(
        { _id: req.query.id },
        { title, category, suggestion },
        { new: true }
      );
      if (!data) {
        return sendResponse(req, res, 404, "fail", "suggestion not available");
      } else {
        return sendResponse(req, res, 200, "success", data);
      }
    } catch (err) {
      return sendResponse(req, res, 400, "fail", err.message);
    }
  }
  return sendResponse(req, res, 400, "fail", "invalid Method");
}
