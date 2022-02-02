import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/router";
import { Select, CircularProgress, MenuItem, IconButton } from "@mui/material";
import axios from 'axios'
import { categories } from "../data";
import { useSession, getSession } from "next-auth/react";


const Add = () => {
  const router = useRouter();
  const session =useSession()
  const [category, setCategory] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const selectRef = React.useRef().currentValue;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!title || !category || !text) {
      alert("please fill all fields");
      return;
    }
    try {
      setLoading(true);
      console.log(title,category,text)

      const res = await axios.post("/api/feedback", {
        title,
        category,
        suggestion: text,
        name: session.data.user.name,
        image: session.data.user.image,
        email: session.data.user.email,
      });

      if (res.data.status === "success") {
        setLoading(false);
        setTitle("");
        setText("");
        setTimeout(() => window.location.reload(), 3000);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col mx-auto sm:w-9/12 md:w-7/12">
      <div className="flex mt-6">
        <IconButton onClick={() => router.back()}>
          <ArrowBackIosNewIcon
            sx={{ fontSize: "12px", color: "blue", marginRight: "15px" }}
          />
          <p className="text-sm font-bold">Go Back</p>
        </IconButton>
      </div>
      <div className="bg-white rounded-md w-11/12 mx-auto mt-16">
        <div className=" flex justify-center  -mt-7 ml-8  bg-gradient-to-r text-white from-violet-500 to-fuchsia-500 rounded-full h-10 w-10">
          <h2 className="font-extrabold mx-4  mt-2">+</h2>
        </div>
        <div>
          <h1 className="font-bold opacity-70 ml-7 mt-6">
            Create New Feedback
          </h1>
          <h4 className="font-semibold opacity-70 ml-7 mt-6">Feedback Title</h4>
          <p className="text-sm ml-6  opacity-50 ">
            Add a short,descriptive headline
          </p>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="w-10/12 mt-3      text-blue-900    px-3  bg-gray-200 ml-6 h-16 rounded-sm"
              placeholder="feedback Tittle"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <h4 className="font-semibold opacity-70 ml-7 mt-6">Category</h4>
            <p className="text-sm ml-6  opacity-50 ">
              Choose a category for your feedback
            </p>
            <Select
              variant="standard"
              sx={{
                m: 1,
                minWidth: "85%",
                marginTop: "12px",
                marginLeft: "5%",
              }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="category"
              displayEmpty
              inputRef={selectRef}
            >
              <MenuItem value="">
                <em className='text-blue-600'>Choose Category</em>
              </MenuItem>
              {categories.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>

            <h4 className="font-semibold opacity-70 ml-7 mt-6">
              Feedback Detail
            </h4>
            <p className="text-sm ml-6 w-11/12 opacity-50 ">
              Include any specific comments on what should be improved,added
              ,etc
            </p>
            <textarea
              className="w-10/12  mt-4 text-blue-900 py-7 px-5 bg-gray-200 ml-6 h-20 resize-none rounded-sm'"
              placeholder="enter feedback"
              maxLength="250"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>

            <div className="w-10/12  mt-4 ml-6">
              <button
                className="w-full font-bold hover:bg-blue-500 text-white rounded-md my-2 py-2 bg-fuchsia-700  "
                type="submit"
              >
                {!loading && "Add Feedback"}
                {loading && <CircularProgress color="inherit" />}
              </button>
            </div>
          </form>
          <button
            className="w-10/12 ml-6 mb-4 rounded-md  hover:bg-blue-500 text-white font-bold my-2 py-2 bg-fuchsia-500 bg-violet-900"
            onClick={() => router.replace("/")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default Add;
