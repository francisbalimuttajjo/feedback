import React from "react";
import { sortingCategories as categories } from "../data";

const UseFns = (feedback_list) => {
  const [initialData, setData] = React.useState(feedback_list);
  const [value, setValue] = React.useState(categories[2]);
  const [data, dispatch] = React.useReducer(reducer, feedback_list);
  const planned = feedback_list.filter((el) => el.status === "planned");
  const progress = feedback_list.filter((el) => el.status === "progress");
  const fixed = feedback_list.filter((el) => el.status === "fixed");

  const roadmap = [
    { title: "Planned", number: planned.length },
    { title: "In Progress", number: progress.length },
    { title: "Fixed", number: fixed.length },
  ];

  function reducer(data, action) {
    const newData = [...data];
    switch (action.type) {
      case "ui":
        return newData.filter((el) => el.category == "ui");
        break;
      case "reset":
        return initialData;
        break;
      case "ux":
        return data.filter((el) => el.category == "ux");
        break;
      case "bug":
        return data.filter((el) => el.category == "bug");
        break;
      case "feature":
        return data.filter((el) => el.category == "feature");
        break;
      case "enhancement":
        return data.filter((el) => el.category == "enhancement");
        break;
    }
    return data;
  }

  const handleFilter = (val) => {
    dispatch({ type: "reset" });
    dispatch({ type: val });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    switch (e.target.value) {
      case "Least Comments":
        data.sort((a, b) => a.comment.length - b.comment.length);
        break;
      case "Most Comments":
        data.sort((a, b) => b.comment.length - a.comment.length);
        break;
      case "Least Upvotes":
        data.sort((a, b) => a.likes.length - b.likes.length);
        break;
      case "Most Upvotes":
        data.sort((a, b) => b.likes.length - a.likes.length);
        break;
      default:
        data.sort((a, b) => a.comment.length - b.comment.length);
    }
  };

  return { handleChange, handleFilter, value, data, roadmap, categories };
};

export default UseFns;
