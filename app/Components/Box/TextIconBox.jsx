"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TextIconBox({ icon, heading, text }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="lg:w-3/12 rounded-md p-4 hover:bg-slate-600 text-center"
      data-aos="zoom-in-up"
    >
      <icon className="text-8xl text-white font-bold rounded-full inline-block p-5 bg-slate-500" />

      <h1 className="font-bold p-4 text-white text-3xl">{heading}</h1>
      <h1 className="font-bold p-4 text-slate-400 text-xl">{text}</h1>
    </div>
  );
}
