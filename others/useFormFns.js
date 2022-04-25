import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import axios from "axios";
const UseFns = (initialValues,editing) => {
  const router = useRouter();
  const session = useSession();
  const [category, setCategory] = React.useState(initialValues.category);
  const [title, setTitle] = React.useState(initialValues.title);
  const [text, setText] = React.useState(initialValues.suggestion);
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
    setLoading(true);
    if (editing) {
      axios
        .patch(`/api/suggestions/edit/${router.query.id}`, {
          title,
          category,
          suggestion: text,
        })
        .then((res) => {
          if (res.data.status === "success") {
            setLoading(false);
            setMessage("update successfull");
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
          setLoading(false);
          setTitle("");
          setText("");
          setMessage("feedback added");
          setTimeout(() => router.replace("/"), 3000);
          return;
        })
        .catch((err) => {
          setLoading(false);
          setError("Try again Later");
        });
    }
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
    };
  };
};

export default UseFns;
