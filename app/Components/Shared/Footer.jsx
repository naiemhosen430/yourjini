"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="bg-slate-700 py-20 flex justify-center"
        data-aos="fade-right"
      >
        <div className="lg:w-4/12 border border-white border-r-2 border-y-0 border-l-0">
          <h1 className="text-8xl text-white font-bold py-2">Your Jini</h1>
          <h2 className="text-white text-base">Here willl be heading</h2>
        </div>

        <div className="lg-w-4/12 px-10">
          <h1 className="text-white font-bold py-2">Your in</h1>
          <h1 className="text-white font-bold py-1">01795444079</h1>
          <h1 className="text-white font-bold py-1">iamGMAIL.COM</h1>
        </div>

        <div className="lg-w-2/12 px-5">
          <h1 className="text-white font-bold py-2">wHY US</h1>
          <Link href={"/"} className="text-white font-bold py-1 block">
            Something
          </Link>
          <Link href={"/"} className="text-white font-bold py-1 block">
            Something
          </Link>
          <Link href={"/"} className="text-white font-bold py-1 block">
            Something
          </Link>
        </div>

        <div className="lg-w-2/12 px-5">
          <h1 className="text-white font-bold py-2">wHY US</h1>
          <Link href={"/"} className="text-white font-bold py-1 block">
            Something
          </Link>
          <Link href={"/"} className="text-white font-bold py-1 block">
            Something
          </Link>
          <Link href={"/"} className="text-white font-bold py-1 block">
            Something
          </Link>
        </div>
      </div>
    </>
  );
}
