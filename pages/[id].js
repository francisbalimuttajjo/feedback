import React from "react";
import Feedback from "../components/Feedback";
import axios from "axios";


const comments = [
  {
    src: "https://material-ui.com/static/images/avatar/1.jpg",
    alt: "Remy Sharp",
    name: "Francis Balimuttajjo",
    user: "@bafraUgdd",
    comment:
      "industry. sssss Ipsum has been the industrys standard dummy text  ever since the 1500s, when an unknown printer took a galley of type  and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
  },
  {
    src: "https://material-ui.com/static/images/avatar/1.jpg",
    alt: "Remy Sharp",
    name: "Francis Balimuttajjo",
    user: "@bafraUggsg",
    comment:
      "industry. Lorem Ipsum has been the industrys standard dummy text  ever since the 1500s, when an unknown printer took a galley of type  and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
  },
  {
    src: "https://material-ui.com/static/images/avatar/1.jpg",
    alt: "Remy Sharp",
    name: "Francis Balimuttajjo",
    user: "@bafraUg",
    comment:
      "industry. Lorem Ipsum has been the industrys standard dummy text  ever since the 1500s, when an unknown printer took a galley of type  and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
  },
  {
    src: "https://material-ui.com/static/images/avatar/1.jpg",
    alt: "Remy Sharp",
    name: "Francis Balimuttajjow",
    user: "@bafraUgr",
    comment:
      "industry. Lorem Ipsum has been the industrys standard dummy text  ever since the 1500s, when an unknown printer took a galley of type  and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
  },

];

function feedback(props) {
  const suggestion = props.data;


  return (
    <>
      <Feedback
        upvotes={suggestion.upvotes}
        description={suggestion.suggestion}
        category={suggestion.category}
        comment={suggestion.comments}
        feedback={suggestion.title}
        comments={comments}
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
