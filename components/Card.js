import CommentIcon from "@mui/icons-material/Comment";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Card = (props) => {
  return (
    <div
      className="bg-white w-10/12 mx-auto rounded-md  mb-3 p-2 
  border-t-4 border-pink-300 flex flex-col font-bold   "
    >
      <h1 className="py-4 opacity-70 ml-5 ">{props.title}</h1>
      <p className="ml-5 opacity-50 text-sm">{props.description}</p>
      <h5 className="bg-gray-200 text-violet-900 mx-4 font-semibold  w-fit p-2  h-fit my-5  rounded-md opacity-70 ">
        {props.category}
      </h5>
      <div className="flex ">
        <div className="flex   bg-gray-200 my-2 h-10 w-12 ml-4  opacity-70 rounded-md p-2 justify-center">
          <KeyboardArrowUpIcon />
          <p className=" p-1  -mt-1">{props.upvotes}</p>
        </div>
        <div className="grow"></div>
        <div className="flex mt-4">
          <CommentIcon
            sx={{
              color: "#6696de",
              flexGrow: 1,
            }}
          />
          <h6 className="mt-1 opacity-60">{props.comments}</h6>
        </div>
      </div>
    </div>
  );
};

export default function CardComponent(props) {
  return (
    <div className="w-full ">
      <h1 className="font-bold opacity-80  ml-6 pt-4">{props.title}</h1>
      <h5 className="font-semibold text-sm mb-4 opacity-50  ml-6 ">
        {props.description}
      </h5>
      {props.data.map((el) => (
        <Card
          title={el.title}
          key={el._id}
          description={el.suggestion}
          category={el.category}
          upvotes={el.upvotes}
          comments={el.comment.length}
        />
      ))}
    </div>
  );
}
