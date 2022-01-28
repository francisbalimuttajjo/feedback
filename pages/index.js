import Head from "../components/Head";
import Side from "../components/SideBar";
import Main from "../components/MainBar";
import styles from "../styles/Home.module.css";
import axios from "axios";


export default function Home(props) {
  console.log();
  const data = props.data.data;
  return (
    <div className={styles.container}>
      <Head title="home" />
      <Side />
      <Main data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get("http://localhost:3000/api/getSuggestions");

  return {
    props: { data: res.data },
  };
}
