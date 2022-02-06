import React from "react";
import Feedback from "../components/Feedback";
import Head from "../components/Head";
import { useRouter } from "next/router";
import axios from "axios";

function FeedbackComponent(props) {
  
  const router = useRouter();
  const suggestion = props.data;

  return (
    <>
    <Head title={suggestion.title}/>
      <Feedback
        upvotes={suggestion.likes.length}
        description={suggestion.suggestion}
        category={suggestion.category}
        comments={suggestion.comment}
        feedback={suggestion.title}
        length={suggestion.comment.length}
        id={router.query.id}
        src={suggestion.image}
        name={suggestion.name}
       
        createDate={suggestion.createdAt}
      />
    </>
  );
}

export default FeedbackComponent;

export async function getServerSideProps(req) {
  const res = await axios.get(
   //`http://localhost:3000/api/suggestions/${req.query.id}`
    `https://feedbackbafra.vercel.app/api/suggestions/${req.query.id}`

  );
  
 
  return {
    props: { data: res.data.data },
  };
}
