import axios from 'axios'
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Head from "../components/components/Head";
import Feedback from "../components/components/Feedback";
import useFns from '../others/useHomePageFns'

export default function Home(props) {
 

  const {
    handleChange,
    handleFilter,
    value,
    data,
    roadmap,
    categories,
    
  } = useFns(props.data.data);
  return (
    <div className="md:flex w-full  md:w-9/12 sm:mx-auto ">
      <Head title='Feedback Application'/>
      <SideBar data={roadmap} handleFilter={handleFilter} />
      <div className="sm:w-11/12 md:w-9/12 sm:mx-auto md:ml-12">
        <Header
          value={value}
          data={data}
          handleChange={handleChange}
          categories={categories}
        />
        <div className="py-4">
          {data.map((el) => (
            <Feedback key={el._id} feedback={el} homepage />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get(
    "https://feedbackbafra.vercel.app/api/getSuggestions"
  );

  return {
    props: { data: res.data },
  };
}
