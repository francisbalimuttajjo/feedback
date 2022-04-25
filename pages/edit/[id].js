import React from "react";
import axios from "axios";
import Head from "../../components/components/Head";
import Form from "../../components/components/Form";

const Edit = (props) => {

  return (
    <div className=" mx-auto w-full sm:w-9/12 md:w-6/12">
      <Head title="editing" />
      <Form initialValues={props.data} editing />
    </div>
  );
};

export async function getServerSideProps(req) {
  const res = await axios.get(
    `https://feedbackbafra.vercel.app/api/suggestions/${req.query.id}`
  );
  return {
    props: { data: res.data.data },
  };
}

export default Edit;
