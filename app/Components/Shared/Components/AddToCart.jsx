"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

export default function AddToCart({ closecreatepostbox }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubboxClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        className="right-0 top-0 backdrop-blur-sm z-10 fixed w-screen h-screen text-right"
        onClick={closecreatepostbox}
      >
        <div
          className="rounded-md text-left shadow-3xl h-screen bg-white lg:w-6/12 inline-block p-5"
          onClick={handleSubboxClick}
          data-aos="fade-left"
        >
          <div className="flex items-center">
            <h1 className="font-bold text-black text-3xl py-5">
              Cart information
            </h1>
          </div>

          <Link href={'/product/something'}>
            <div className="flex space-x-5 cursor-pointer hover:bg-slate-400 rounded-md shadow-md my-4 p-4">
              <div className="w-2/12 bg-slate-600">
                <Image src={""} height={0} width={0} className="w-full" />
              </div>
              <div className="w-10/12">
                <h1 className="text-xl font-bold py-1 pt-0">Item name</h1>
                <h1 className="text-sm font-bold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis ab atque, quisquam praesentium possimus, quis odio
                  exercitationem sapiente nulla magnam rerum, repellat iste
                  placeat dolore aperiam autem in nemo enim.
                </h1>
              </div>
            </div>
          </Link>
          <Link href={'/product/something'}>
            <div className="flex space-x-5 cursor-pointer hover:bg-slate-400 rounded-md shadow-md my-4 p-4">
              <div className="w-2/12 bg-slate-600">
                <Image src={""} height={0} width={0} className="w-full" />
              </div>
              <div className="w-10/12">
                <h1 className="text-xl font-bold py-1 pt-0">Item name</h1>
                <h1 className="text-sm font-bold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis ab atque, quisquam praesentium possimus, quis odio
                  exercitationem sapiente nulla magnam rerum, repellat iste
                  placeat dolore aperiam autem in nemo enim.
                </h1>
              </div>
            </div>
          </Link>
          <Link href={'/product/something'}>

            <div className="flex space-x-5 cursor-pointer hover:bg-slate-400 rounded-md shadow-md my-4 p-4">
              <div className="w-2/12 bg-slate-600">
                <Image src={""} height={0} width={0} className="w-full" />
              </div>
              <div className="w-10/12">
                <h1 className="text-xl font-bold py-1 pt-0">Item name</h1>
                <h1 className="text-sm font-bold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis ab atque, quisquam praesentium possimus, quis odio
                  exercitationem sapiente nulla magnam rerum, repellat iste
                  placeat dolore aperiam autem in nemo enim.
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
