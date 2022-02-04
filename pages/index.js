import Head from "../components/Head";
import React from "react";
import Side from "../components/SideBar";
import Main from "../components/MainBar";
import axios from "axios";

export default function Home(props) {
  const [initialData, setData] = React.useState(props.data.data);
  const [data, dispatch] = React.useReducer(reducer, props.data.data);
  const planned = props.data.data.filter((el) => el.status === "planned");
  const progress = props.data.data.filter((el) => el.status === "progress");
  const fixed = props.data.data.filter((el) => el.status === "fixed");

  const nos = [
    { number: planned.length, index: 0 },
    { number: progress.length, index: 1 },
    { number: fixed.length, index: 2 },
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
  return (
    <div className="md:flex md:w-4/5 md:mx-auto">
      <Head title="home" />
      <Side handleFilter={handleFilter} no={nos} />
      <Main data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  //const res = await axios.get("http://localhost:3000/api/getSuggestions");
  const res = await axios.get(
    "https://feedbackbafra.vercel.app/api/getSuggestions"
  );

  return {
    props: { data: res.data },
  };
}
