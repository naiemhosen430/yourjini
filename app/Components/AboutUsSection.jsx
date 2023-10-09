import React from "react";
import TextIconBox from "./Box/TextIconBox";
import { BsBoxSeam } from "react-icons/bs";
export default function AboutUsSection() {
  return (
    <>
      <div className="p-10 bg-slate-700">
        <h1 className="text-center p-10 font-bold text-white text-3xl">
          About Us
        </h1>
        <div className="flex justify-center space-x-5">
          <TextIconBox
            icon={<BsBoxSeam />}
            heading={"Cetagory"}
            text={"here will be your text"}
          />
          <TextIconBox
            icon={<BsBoxSeam />}
            heading={"Cetagory"}
            text={"here will be your text"}
          />
          <TextIconBox
            icon={<BsBoxSeam />}
            heading={"Cetagory"}
            text={"here will be your text"}
          />
        </div>
      </div>
    </>
  );
}
