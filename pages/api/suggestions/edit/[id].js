import connect from "../../../../db/db";
import Suggestion from "../../../../models/Suggestion";

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
