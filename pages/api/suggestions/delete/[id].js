import connect from "../../../../db/db";
import Suggestion from "../../../../models/Suggestion";
import { sendResponse } from "../../../../utils";

export default async function handler(req, res) {
  connect();
  if (req.method === "DELETE") {
    try {
      const data = await Suggestion.deleteOne({ _id: req.query.id });

      if (!data) {
        return sendResponse(req, res, 404, "fail", "suggestion not available");
      } else {
        return sendResponse(req, res, 200, "success", "delete successfull");
      }
    } catch (err) {
      return sendResponse(req, res, 400, "fail", err.message);
    }
  }
  return sendResponse(req, res, 400, "fail", "invalid method");
}
