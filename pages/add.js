import Head from "../components/components/Head";
import Form from "../components/components/Form";
import {  getSession } from "next-auth/react";
const initialValues = { category: "", title: "", text: "" };

const NewFeedback = () => {
  return (
    <div className=" mx-auto w-full sm:w-9/12 md:w-6/12">
      <Head title="new feedback" />
      <Form initialValues={initialValues} />
    </div>
  );
};

export default NewFeedback;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

// export default Add;
