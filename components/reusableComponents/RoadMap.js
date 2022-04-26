import Link from "next/link";

const RoadMap = (props) => {
  return (
    <>
      <table className="table-fixed   mx-auto">
        <thead>
          <tr>
            <th className=" text-left px-1   text-base ">Road Map</th>
            <th className="text-blue-500 hover:text-blue-900  text-center px-1 py-2  ">
              <Link href="/roadmap">
            
                view all
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((el) => (
            <tr key={el.title}>
              <td className=" text-left px-1 ">{el.title}</td>
              <td className=" text-center px-1 ">{el.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RoadMap;
