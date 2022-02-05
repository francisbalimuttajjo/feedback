import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Head from "../components/Head";
import { useState } from "react";
import axios from "axios";
import Card from "../components/Card";
export default function RoadMap(props) {
  const router = useRouter();
  const [active, setActive] = useState("Planned");

  const planned = props.data.data.filter((el) => el.status === "planned");
  const progress = props.data.data.filter((el) => el.status === "progress");
  const fixed = props.data.data.filter((el) => el.status === "fixed");

  return (
    <div>
      <Head title="roadmap" />
      <div className="text-white bg-slate-700 py-3 flex sm:rounded-md sm:mt-8  sm:mx-auto sm:w-7/12">
        <div className="flex grow flex-col ">
          <div className="flex">
            <IconButton onClick={() => router.back()}>
              <ArrowBackIosNewIcon
                sx={{ fontSize: "14px", marginTop: "10px", color: "white" }}
              />
            </IconButton>
            <p className="mt-3 opacity-80 font-bold">Go Back</p>
          </div>
          <p className="ml-6 mb-2 font-bold">Roadmap</p>
        </div>

        <button
          onClick={() => router.replace("/add")}
          className=" bg-fuchsia-500 font-bold h-8 mr-2 px-1 mt-2 hover:bg-blue-500 rounded-md sm:mt-6 "
        >
          + add Feedback
        </button>
      </div>
      <nav className="mr-2 border-b-2 border-purple-400 p-4 h-16 sm:w-6/12 sm:mx-auto ">
        <ul className="flex justify-between">
          <li
            className="
               pb-5  w-1/4 hover:border-purple-500  hover:border-b-4 active:border-b-6 active:border-purple-500  hover:opacity-90   opacity-50  hover:cursor-pointer font-bold"
            onClick={() => setActive("Planned")}
          >
            Planned({planned.length}){" "}
          </li>
          <li
            className="btn-roadMap"
            onClick={() => setActive("Progress")}
          >
            Progress({progress.length}){" "}
          </li>
          <li
            className="btn-roadMap"
            onClick={() => setActive("Live")}
          >
            Live({fixed.length}){" "}
          </li>
        </ul>
      </nav>
      {active === "Planned" && (
        <Card
          planned
          data={planned}
          title={`Planned ${planned.length}`}
          description=" Ideas Optimised For Research"
        />
      )}
      {active === "Progress" && (
        <Card
          data={progress}
          title={`In-Progress ${progress.length}`}
          description="currently being developed"
        />
      )}
      {active === "Live" && (
        <Card
          data={fixed}
          title={`Live ${fixed.length}`}
          description="released features"
        />
      )}
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
