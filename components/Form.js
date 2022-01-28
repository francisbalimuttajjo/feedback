import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {
  IconButton,
  Select,
  MenuItem,
  Button,
  Typography,
  TextField,
} from "@mui/material";
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
  const selectRef = React.useRef().currentValue;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !category || !text) {
      alert("please fill all fields");
      return;
    }
    console.log(title, category, text);
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
            Add Feedback
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Form;
