import React from "react";
import Details from "../reusableComponents/FeedbackDetails";
import Head from "../components/reusableComponents/Head";
import axios from "axios";

function FeedbackComponent(props) {
  const feedback = props.data;

  return (
    <>
      <Head title={feedback.title} />
      <Details feedback={feedback} />
    </>
  );
}

export default FeedbackComponent;

export async function getServerSideProps(req) {
  const res = await axios.get(
    `https://feedbackbafra.vercel.app/api/suggestions/${req.query.id}`
  );

  return {
    props: { data: res.data.data },
  };
}
