import Head from "../components/Head";
import React from "react";
import Side from "../components/SideBar";
import Main from "../components/MainBar";
import axios from "axios";

export default function Home(props) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
   
      setData(props.data.data);
    
   
  }, [props.data.data]
  
  );

  

  const handleFilter = (val) => {
    // if(props.data.data.length !=data.length){
    //   setData(props.data.data);
    // }
    const newData = data.filter((el) => el.category == val);

    setData(newData);
    // console.log(data);
  };
  return (
    <div className="md:flex md:w-4/5 md:mx-auto">
      <Head title="home" />
      <Side data={data} handleFilter={handleFilter} />
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
