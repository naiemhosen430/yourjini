"use client";
import React, { useEffect, useState } from "react";
import ProductBox from "./Box/ProductBox";
import Link from "next/link";
import { api } from "@/api/api";

export default function FeaturedItemSection() {
  const [items, setItems] = useState([]);
  const [errorBox, setErrorBox] = useState(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await api.get("/product");
        setItems(response.data.data);
      };
      fetchData();
    } catch (error) {
      setErrorBox(true);
    }
  }, []);

  return (
    <>
      <div className="py-10 lg:w-10/12 m-auto">
        <div className="flex py-4">
          <h1 className="w-3/12 font-bold text-2xl">Featured products</h1>
          <h1 className="w-9/12 text-xl text-right">30000 items found</h1>
        </div>

        <div className="text-center p-5 space-x-5 space-y-5">
          {errorBox && (
            <h1 className="text-3xl text-center font-bold p-10">
              Network error
            </h1>
          )}
          {items.map((i) => (
            <ProductBox
              key={i._id}
              id={i._id}
              itemname={i.itemname}
              price={i.price}
              image={i.image[0][0]}
            />
          ))}

          <div className="text-center">
            <Link
              className="border border-x-2 border-y-2 border-yellow-900 py-2 px-8 hover:bg-slate-800 hover:text-white font-bold rounded-full"
              href={"/product"}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
