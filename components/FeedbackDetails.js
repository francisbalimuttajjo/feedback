import { useRouter } from "next/router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import Feedback from "./reusableComponents/Feedback";
import Comment from "./reusableComponents/Comment";
import AddComment from "./reusableComponents/AddComment";

const Details = (props) => {
  const router = useRouter();
  return (
    <div className="sm:w-9/12 mx-auto md:w-1/2 mt-4">
      <div className="flex  opacity-80 font-bold ">
        <div className="flex mt-2  ">
          <IconButton onClick={() => router.back()}>
            <ArrowBackIosNewIcon fontSize="small" sx={{ fontSize: "14px" }} />
          </IconButton>

          <span className="mt-1  ">Go back</span>
        </div>
        <div className="right-3 absolute  sm:mr-20 md:mr-64">
          <button
            onClick={() => router.push(`/edit/${props.feedback._id}`)}
            className=" details_btn "
          >
            Edit Feedback
          </button>
        </div>
      </div>
      <div className="w-full md:ml-5">
        <Feedback feedback={props.feedback} />
        <div className="  details_comment_container   ">
          <div>
            <h5 className="m-5 font-bold">
              {props.feedback.comment.length}
              {props.feedback.comment.length <= 1 ? "comment" : "comments"}
            </h5>
            {props.feedback.comment.map((el) => (
              <Comment key={el._id} comment={el} />
            ))}
          </div>
        </div>
        <AddComment feedback={props.feedback} />
      </div>
    </div>
  );
};

export default Details;
