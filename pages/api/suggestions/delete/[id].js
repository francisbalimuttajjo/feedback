import connect from "../../../../db/db";
import Suggestion from "../../../../models/Suggestion";

export default async function handler(req, res) {
  connect();
  if (req.method === "DELETE") {
    try {
      const data = await Suggestion.deleteOne({ _id: req.query.id });
      
      if (!data) {
        return res.status(400).json({
          status: "fail",
          data: "suggestion not available",
        });
      } else {
        return res.status(200).json({
          status: "success",
          data: "delete successfull",
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
