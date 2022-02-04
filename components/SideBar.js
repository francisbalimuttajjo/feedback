import React from "react";
import { StyledButton } from "./Elements";
import { IconButton } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { categories } from "../data";
//
const planned = ["Planned", "In Progress", "Fixed"];
const no = [2, 8, 9];



function SideBar(props) {

  return (
    <div className="w-full 
    sm:flex sm:flex-row sm:ml-16 sm:mb-4 sm:mt-4 md:flex-col md:w-4/12 md:mt-32 md:sticky md:h-screen md:top-2 ">
      <div
        className="w-full h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white flex justify-around
       sm:w-3/12 sm:h-32 sm:rounded-lg md:w-full
      "
      >
        <div>
          <p className="-ml-6 font-semibold text-2xl sm:mt-12 md:-m1-8">Budget App</p>
          <p className="-ml-6 opacity-70 md:-m1-8"> Feedback Forum</p>
        </div>
        <div className="my-auto sm:hidden -right-10 relative  md:hidden lg:hidden ">
          <IconButton sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      <div className="hidden  overflow-hidden sm:block  md:block rounded-lg ml-6 bg-white w-3/12  h-32 md:w-full md:ml-0 md:mt-3 md:overflow-hidden">
        {categories.map((item) => (
          <StyledButton onClick={()=>props.handleFilter(item)} className="bg-gray-200" key={item}>
            {item}
          </StyledButton>
        ))}
      </div>
      <div className="hidden sm:block md:block rounded-lg  bg-white  ml-6 w-3/12  h-32 md:py-4 md:h-36  md:w-full md:ml-0 md:mt-3">
        <div className="flex justify-around mb-4">
          <h5 className="opacity-60 text-blue-900 ml-1">Road Map</h5>
          <div className="text-blue-500 hover:text-blue-900 ">
            <Link href="/roadmap" > view all</Link>
          </div>
            
        </div>

        <div className="flex flex-row opacity-60">
          <div className="ml-8 md:overflow-hidden ">
            <ul>
              {planned.map((plan) => (
                <li key={plan}>{plan}</li>
              ))}
            </ul>
          </div>
          <div className="ml-9 md:ml-20">
            <ul className="list-none ">
              {no.map((no) => (
                <li key={no}>{no}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
