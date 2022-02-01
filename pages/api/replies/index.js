import connect from "../../../db/db";
import Reply from "../../../models/Reply";

export default async function handler(req, res) {
  connect();
  if (req.method === "POST") {
    
    try {
      const { user,comment,reply} = req.body;

      const data = await Reply.create({
        user,comment,reply
      });

      return res.status(200).json({
        status: "success",
        data,
      });
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
