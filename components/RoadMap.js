import Link from "next/link";
const RoadMap = (props) => {
    return (
      <>
        <div className="flex justify-around mb-4">
          <h5 className="opacity-60 text-blue-900 ml-1">Road Map</h5>
          <div className="text-blue-500 hover:text-blue-900 ">
            <Link href="/roadmap"> view all</Link>
          </div>
        </div>
  
        <div className="flex flex-row opacity-60">
          <div className="ml-8 md:overflow-hidden ">
            <ul>
              {props.planned.map((plan) => (
                <li key={plan}>{plan}</li>
              ))}
            </ul>
          </div>
          <div className="ml-9 md:ml-20">
            <ul className="list-none ">
              {props.number.map((no) => (
                <li key={no.index}>{no.number}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };

  export default RoadMap