"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function ProductBox({ image, itemname, price, id }) {
  const [imageArray, setImageArray] = useState([]);
  useEffect(() => {
    AOS.init();
    const imageUrlArray = image.split(",");
    const cleanedImageUrlArray = imageUrlArray.map((url) => {
      return url.replace(/\[|\]/g, "");
    });
    setImageArray(cleanedImageUrlArray);
  }, []);
  console.log(imageArray[0]);
  return (
    <>
      <div
        className="w-60 text-left inline-block h-80 hover:shadow-md p-2 rounded-md"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Link href={`/product/${id}`} className="block">
          <img className="w-full h-40" src={imageArray[0]} alt="no image" />
          <h1 className="p-4 pb-0 font-bold text-2xl">{itemname}</h1>
        </Link>
        <h1 className="p-4 font-bold text-slate-600 text-xl">{price}</h1>
      </div>
    </>
  );
}
