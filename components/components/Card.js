import CommentIcon from "@mui/icons-material/Comment";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Card = (props) => {
  return (
    <div
      className={`card_container ${ props.planned ? "border-pink-300" : "border-blue-300" }`}
    >
      <h1 className="py-4 opacity-70 ml-5 ">{props.feedback.title}</h1>
      <p className="ml-5 opacity-50 text-sm">{props.feedback.suggestion}</p>
      <h5 className="card_category ">
        {props.feedback.category}
      </h5>
      <div className="flex ">
        <div className="card_like_container">
          <KeyboardArrowUpIcon />
          <p className=" p-1  -mt-1">{props.feedback.likes.length}</p>
        </div>
        <div className="grow"></div>
        <div className="flex mt-4">
          <CommentIcon
            sx={{
              color: "#6696de",
              flexGrow: 1,
            }}
          />
          <h6 className="mt-1 opacity-60">{props.feedback.comment.length}</h6>
        </div>
      </div>
    </div>
  );
};

export default function CardComponent(props) {
  return (
    <div className="container_card ">
      <h1 className="container_title">
        {props.title}
      </h1>
      <h5 className="container_description ">
        {props.description}
      </h5>
      {props.data.map((el) => (
        <Card feedback={el} key={el._id} planned={props.planned} />
      ))}
    </div>
  );
}
