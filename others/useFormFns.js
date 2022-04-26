import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import axios from "axios";

const UseFns = (props) => {
  const router = useRouter();
  const session = useSession();
  const [category, setCategory] = React.useState(props.initialValues.category);
  const [title, setTitle] = React.useState(props.initialValues.title);
  const [text, setText] = React.useState(props.initialValues.suggestion);
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
        setMessage("Operation successfull");
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
    setLoading(true);
    if (props.editing) {
      axios
        .patch(`/api/suggestions/edit/${router.query.id}`, {
          title,
          category,
          suggestion: text,
        })
        .then((res) => {
          if (res.data.status === "success") {
            setLoading(false);
            setMessage("Update Successfull");
            setTimeout(() => router.replace(`/${router.query.id}`), 3000);
          }
          return;
        })
        .catch((err) => {
          setLoading(false);
          setError("Try again Later");
          return;
        });
    } else {
      setLoading(true);

      axios
        .post("/api/feedback", {
          title,
          category,
          suggestion: text,
          name: session.data.user.name,
          image: session.data.user.image,
          email: session.data.user.email,
        })
        .then((res) => {
          console.log("res", res);
          setLoading(false);
          if (res.data.status === "success") {
            setTitle("");
            setText("");
            setMessage("Feedback added");
            setTimeout(() => router.replace("/"), 3000);
            return;
          }
        })
        .catch((err) => {
          setLoading(false);
          setError("Try again Later");
        });
    }
  };

  const styles = {
    back_button: { fontSize: "12px", color: "blue", marginRight: "15px" },
    edit_icon: { marginTop: 1 },
    select: {
      minWidth: "100%",
      marginTop: "12px",
    },
  };
  return {
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
  };
};

export default UseFns;
