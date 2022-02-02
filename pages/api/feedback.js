import connect from "../../db/db";
import Suggestion from "../../models/Suggestion";

// //f
//   function Date(){
//     const today = new Date()
//     const month=today.toLocaleString('default', { month: 'long' })
//      const day =today.getDay()
//     const year =today.getFullYear()

//     return`${day} ${month},${year} `
//   }

// //
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
      const day = d.getDay();
      const year = d.getFullYear();

      const date = day + " " + month + ", "+ "" + year;
      const { title, category, suggestion, image, name, email } = req.body;

      const data = await Suggestion.create({
        title,
        category,
        suggestion,
        image,
        name,
        createdAt:date,
        email,
        upvotes: 0,
        comments: 0,
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
