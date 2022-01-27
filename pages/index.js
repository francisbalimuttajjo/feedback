import Head from "../components/Head";
import Side from "../components/SideBar";
import Main from "../components/MainBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head title="home" />
      <Side />
      <Main />
    </div>
  );
}
