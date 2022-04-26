import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Head from "../components/components/Head";
import { useState } from "react";
import axios from "axios";
import Card from "../components/components/Card";

export default function RoadMap(props) {
  const router = useRouter();
  const [active, setActive] = useState("Planned");
  const planned = props.data.data.filter((el) => el.status === "planned");
  const progress = props.data.data.filter((el) => el.status === "progress");
  const fixed = props.data.data.filter((el) => el.status === "fixed");

  return (
    <div>
      <Head title="roadmap" />
      <div className="roadmap_container">
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
          className=" roadmap_add_btn "
        >
          + add Feedback
        </button>
      </div>
      <nav className="roadmap_nav_bar ">
        <ul className="flex justify-between">
          <li className="btn-roadMap " onClick={() => setActive("Planned")}>
            Planned({planned.length})
          </li>
          <li className="btn-roadMap" onClick={() => setActive("Progress")}>
            Progress({progress.length})
          </li>
          <li className="btn-roadMap" onClick={() => setActive("Live")}>
            Live({fixed.length})
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
          description="Currently being developed"
        />
      )}
      {active === "Live" && (
        <Card
          data={fixed}
          title={`Live ${fixed.length}`}
          description="Released features"
        />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get(
    "https://feedbackbafra.vercel.app/api/getSuggestions"
  );

  return {
    props: { data: res.data },
  };
}
