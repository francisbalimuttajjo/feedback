import React from "react";
import axios from "axios";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {
  IconButton,
  Select,
  CircularProgress,
  MenuItem,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { categories } from "../data";
import styles from "../styles/form.module.css";

const design = {
  heading: { marginLeft: "5em", marginTop: "1em" },
  details: { marginLeft: "4em", paddingTop: "1em", paddingBottom: "2em" },
  textfield: { width: "90%", marginLeft: "5%" },
  category: { color: "blue" },
};

function Form(props) {
  const [category, setCategory] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const selectRef = React.useRef().currentValue;
  const session=useSession()



  const submitHandler = async (e) => {
    e.preventDefault();

    if (!title || !category || !text) {
      alert("please fill all fields");
      return;
    }
    try {
      setLoading(true);

      const res = await axios.post("/api/feedback", {
        title,
        category,
        suggestion: text,
        name:session.data.user.name,
        image:session.data.user.image,
        email:session.data.user.email
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
    <div className={styles.container}>
      <div>
        <IconButton onClick={props.handleBack}>
          <NavigateBeforeIcon />
          <h6>back</h6>
        </IconButton>
      </div>
      <div className={styles.header}>
        <Typography variant="h5" sx={design.heading}>
          Suggestion
        </Typography>
        <Typography variant="body2" sx={design.details}>
          Please provide your feedback or suggestion
        </Typography>
      </div>
      <div className={styles.formDiv}>
        <form onSubmit={submitHandler}>
          <TextField
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            variant="standard"
            type="text"
            label="title"
            sx={design.textfield}
          />

          <Select
            variant="standard"
            sx={{ m: 1, minWidth: "90%", marginLeft: "5%" }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="category"
            displayEmpty
            inputRef={selectRef}
          >
            <MenuItem value="">
              <em style={design.category}>Choose Category</em>
            </MenuItem>
            {categories.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <textarea
            className={styles.textarea}
            placeholder="enter suggestion"
            maxLength="250"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <Button fullWidth variant="contained" type="submit">
            {!loading && <Typography>Add Feedback</Typography>}
            {loading && <CircularProgress color="inherit" />}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Form;
