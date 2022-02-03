import Head from "../components/Head";
import React from 'react'
import Side from "../components/SideBar";
import Main from "../components/MainBar";
import axios from "axios";

export default function Home(props) {
  const [data,setData]=React.useState([])
  // const data = props.data.data;
  React.useEffect(()=> {
    setData(props.data.data)
  },[props.data.data])
  
  


  return (
   
    <div
      className="md:flex md:w-4/5 md:mx-auto"
     
    >
      <Head title="home" />
      <Side />
      <Main data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  //const res = await axios.get("http://localhost:3000/api/getSuggestions");
  const res = await axios.get(
    "https://feedbackbafra.vercel.app/api/getSuggestions"
  );

  return {
    props: { data: res.data },
  };
}
