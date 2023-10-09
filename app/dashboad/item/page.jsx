"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CreatePost } from "./Components/CreatePost";
import { api } from "@/api/api";

export default function page() {
  const [pAddBox, setPAddBox] = useState(false);

  const [items, setItems] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      const data = await api.get("/product");
      setItems(data.data.data);
    };
    fatchData();
  }, []);

  // hundle onclick
  const toggleAddPBox = () => {
    if (pAddBox === true) {
      setPAddBox(false);
    } else {
      setPAddBox(true);
    }
  };
  return (
    <>
      {pAddBox && <CreatePost closecreatepostbox={toggleAddPBox} />}
      <div className="p-4">
        <Link
          className="py-2 px-8 hover:bg-slate-600 font-bold text-3xl"
          href={"/dashboad"}
        >
          Back
        </Link>
      </div>
      <div className="p-4">
        <div className="text-center p-5">
          <button
            onClick={toggleAddPBox}
            className="rounded-full py-2 px-8 bg-slate-800 text-white text-xl font-bold"
          >
            Add product
          </button>
        </div>
        <div className="space-y-5">
          {items.map((i) => (
            <div className="cursor-pointer p-4 flex items-center hover:bg-slate-300 rounded-full shadow-xl justify-center">
              <Image
                src={i.image}
                height={0}
                width={0}
                className="block w-3/12"
              />
              <h1 className="w-6/12 text-2xl font-bold">{i.itemname}</h1>
              <button
                onClick={toggleAddPBox}
                className="w-3/12 text-xl hover:bg-slate-500 py-2 px-8 font-bold text-center"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
