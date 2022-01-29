import React from "react";
import Feedback from "../components/Feedback";
import axios from "axios";

function feedback(props) {
  const suggestion = props.data;
  // console.log(suggestion);

  return (
    <>
      <Feedback
        upvotes={suggestion.upvotes}
        description={suggestion.suggestion}
        category={suggestion.category}
        comment={suggestion.comments}
        feedback={suggestion.title}
      />
    </>
  );
}

export default feedback;

export async function getServerSideProps(req) {
  const res = await axios.get(
    //`http://localhost:3000/api/suggestions/${req.query.id}`
    `https://feedbackbafra.vercel.app/api/suggestions/${req.query.id}`
  );

  return {
    props: { data: res.data.data },
  };
}
