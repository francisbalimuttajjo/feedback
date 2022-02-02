import connect from "../../../db/db";
import Reply from "../../../models/Reply";

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
