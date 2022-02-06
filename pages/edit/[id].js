import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/router";
import { Select, CircularProgress, MenuItem, IconButton } from "@mui/material";
import axios from "axios";
import { categories } from "../../data";
import EditIcon from "@mui/icons-material/Edit";
import Notification from "../../components/Notification";
import Head from "../../components/Head";

const Edit = (props) => {
  const router = useRouter();
  const [category, setCategory] = React.useState(props.data.category);
  const [title, setTitle] = React.useState(props.data.title);
  const [text, setText] = React.useState(props.data.suggestion);
  const [message, setMessage] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);
  const selectRef = React.useRef().currentValue;

  const deleteHandler = () => {
    setDeleting(true);
    axios
      .delete(`/api/suggestions/delete/${router.query.id}`)
      .then((res) => {
        setDeleting(false);
        setMessage("operation successfull");
        router.replace("/");
      })
      .catch((err) => {
        setDeleting(false);
       
      });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title || !category || !text) {
      setError(" Please fill all fields");
      return;
    }
    try {
      setLoading(true);

      const res = await axios.patch(
        `/api/suggestions/edit/${router.query.id}`,
        {
          title,
          category,
          suggestion: text,
        }
      );
     
      if (res.data.status === "success") {
        setLoading(false);
        setMessage("update successfull");
        setTimeout(() => router.replace(`/${router.query.id}`), 3000);
      }
    } catch (err) {
      setLoading(false);
      setError("Try again Later");
    }
  };

  return (
    <div className="flex flex-col mx-auto sm:w-9/12 md:w-6/12">
      <Head title="editing" />
      {error && <Notification severity="error" message={error} />}
      {message && <Notification severity="success" message={message} />}

      <div className="flex mt-6">
        <IconButton onClick={() => router.back()}>
          <ArrowBackIosNewIcon
            sx={{ fontSize: "12px", color: "blue", marginRight: "15px" }}
          />
        </IconButton>
        <p className="text-sm mt-1 font-bold">Go Back</p>
      </div>
      <div className="bg-white rounded-md w-11/12 mx-auto mt-16">
        <div className="editIcon-container ">
          <EditIcon sx={{ marginTop: 1 }} />
        </div>
        <div>
          <h1 className="font-bold opacity-70 ml-7 mt-6">Edit Feedback</h1>
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
                minWidth: "75%",
                marginTop: "12px",
                marginLeft: "10%",
              }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="category"
              displayEmpty
              inputRef={selectRef}
            >
              <MenuItem value="">
                <em className="text-blue-600">Choose Category</em>
              </MenuItem>
              {categories.slice(1).map((item) => (
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
                disabled={loading}
              >
                {!loading && "Edit Feedback"}
                {loading && <CircularProgress color="inherit" />}
              </button>
            </div>
          </form>
          <button
            disabled={loading}
            className="btn bg-fuchsia-500 bg-violet-900"
            onClick={() => router.replace("/")}
          >
            Cancel
          </button>
          <button
            disabled={loading}
            className="btn bg-red-500 bg-violet-900"
            onClick={deleteHandler}
          >
            {!deleting && " Delete"}
            {deleting && " Deleting....!"}
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(req) {
  const res = await axios.get(
    //const `http://localhost:3000/api/suggestions/${req.query.id}`
    `https://feedbackbafra.vercel.app/api/suggestions/${req.query.id}`
  );
  return {
    props: { data: res.data.data },
  };
}



export default Edit;
