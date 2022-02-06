import connect from "../../db/db";
import Suggestion from "../../models/Suggestion";
import { sendResponse } from "../../utils";

export default async function handler(req, res) {
  connect();
  if (req.method === "POST") {
    try {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const d = new Date();
      const month = monthNames[d.getMonth()];
      const day = d.getDate();
      const year = d.getFullYear();

      const date = day + " " + month + ", " + "" + year;
      const { title, category, suggestion, image, name, email } = req.body;

      const data = await Suggestion.create({
        title,
        category,
        suggestion,
        image,
        name,
        createdAt: date,
        email,
      });

      return sendResponse(req, res, 201, "success", data);
    } catch (err) {
      return sendResponse(req, res, 400, "fail", err.message);
    }
  }

  return sendResponse(req, res, 400, "fail", "invalid method");
}
