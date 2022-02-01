import React from "react";
import Feedback from "../components/Feedback";
import axios from "axios";

function feedback(props) {
  const suggestion = props.data;


  return (
    <>
      <Feedback
        upvotes={suggestion.upvotes}
        description={suggestion.suggestion}
        category={suggestion.category}
        comments={suggestion.comment}
        feedback={suggestion.title}
        length={suggestion.comment.length}
        
      />
    </>
  );
}

export default feedback;

export async function getServerSideProps(req) {
  const res = await axios.get(
   // `http://localhost:3000/api/suggestions/${req.query.id}`
    `https://feedbackbafra.vercel.app/api/suggestions/${req.query.id}`
  );
    console.log(res)
  return {
    props: { data: res.data.data },
  };
}
