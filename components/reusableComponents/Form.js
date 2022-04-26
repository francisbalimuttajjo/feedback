import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/router";
import { Select, CircularProgress, MenuItem, IconButton } from "@mui/material";
import { categories } from "../../data";
import EditIcon from "@mui/icons-material/Edit";
import Notification from "./Notification";
import useFns from "../../others/useFormFns";

const Form = (props) => {
  const router = useRouter();
  const {
    title,
    setTitle,
    setCategory,
    setText,
    text,
    category,
    message,
    error,
    loading,
    deleting,
    selectRef,
    deleteHandler,
    submitHandler,
    styles,
  } = useFns(props);

  return (
    <div className="form_container">
      {error && <Notification severity="error" message={error} />}
      {message && <Notification severity="success" message={message} />}

      <div className="flex mt-6">
        <IconButton onClick={() => router.back()}>
          <ArrowBackIosNewIcon sx={styles.back_button} />
        </IconButton>
        <p className="text-sm mt-1 font-bold">Go Back</p>
      </div>
      <div className="bg-white rounded-md w-11/12 mx-auto mt-16">
        <div className="editIcon-container ">
          <EditIcon sx={styles.edit_icon} />
        </div>
        <div>
          <h1 className="font-bold opacity-70 ml-7 mt-6">
            {props.editing ? "Edit " : "Add "} Feedback
          </h1>
          <h4 className="font-semibold opacity-70 ml-7 mt-6">Feedback Title</h4>
          <p className="text-sm ml-6  opacity-50 ">
            Add a short,descriptive headline
          </p>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className=" form_input"
              placeholder="feedback Tittle"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <h4 className="font-semibold opacity-70 ml-7 mt-6">Category</h4>
            <p className="text-sm ml-6  opacity-50 ">
              Choose a category for your feedback
            </p>
            <div className="w-10/12   ml-6 ">
              <Select
                variant="standard"
                sx={styles.select}
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
            </div>
            <h4 className="font-semibold opacity-70 ml-7 mt-6">
              Feedback Detail
            </h4>
            <p className="text-sm ml-6 w-11/12 opacity-50 ">
              Include any specific comments on what should be improved,added
              ,etc
            </p>
            <textarea
              className="form_textarea"
              placeholder="enter feedback"
              maxLength="250"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>

            <div className="w-10/12  mt-4 ml-6">
              <button
                className="form_submitbtn   "
                type="submit"
                disabled={loading}
              >
                {!loading ? (!props.editing ? "Save" : "Edit Feedback") : ""}
                {loading && <CircularProgress color="inherit" />}
              </button>
            </div>
          </form>
          <button
            disabled={loading}
            className="btn  bg-violet-900"
            onClick={() => router.replace("/")}
          >
            Cancel
          </button>
          {props.editing && (
            <button
              disabled={loading}
              className="btn bg-violet-900"
              onClick={deleteHandler}
            >
              {!deleting && " Delete"}
              {deleting && " Deleting....!"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
