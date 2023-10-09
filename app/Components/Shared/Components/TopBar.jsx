"use client";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import React, { useState } from "react";
import AddToCart from "./AddToCart";

export default function TopBar() {
  const [addCart, setAddCart] = useState(false);

  // hundle onclick
  const togglecartbox = () => {
    if (addCart === true) {
      setAddCart(false);
    } else {
      setAddCart(true);
    }
  };
  const closecreatepostbox = () => {
    setAddCart(false);
  };
  return (
    <>
      <div className="px-4 flex space-x-5 justify-center py-4 items-center">
        <div className="w-2/12 font-bold text-4xl">Name</div>
        <div className="w-6/12">
          <div className="flex items-center justify-center border border-slate-800 border-x-2 border-y-2 rounded-full">
            <input
              className="rounded-full w-11/12 py-2 px-4"
              placeholder="Search your keywords...."
              type="search"
              name=""
              id=""
            />
            <BsSearch className="w-1/12" />
          </div>
        </div>
        <div className="space-x-4 flex items-center justify-center">
          <Link
            className="rounded-full block py-2 px-4 text-2xl font-bold"
            href={""}
          >
            <IoIosNotificationsOutline />
          </Link>

          <Link
            onClick={togglecartbox}
            className="rounded-full block py-2 px-4 text-2xl font-bold"
            href={""}
          >
            <FiShoppingCart />
          </Link>

          <Link
            className="rounded-full border text-black hover:text-white hover:bg-slate-900 border-yellow-900 block py-2 px-7 font-bold"
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className="rounded-full border hover:text-black text-white bg-slate-900 hover:bg-slate-100 border-yellow-900 block py-2 px-7 font-bold"
            href={"/register"}
          >
            Sign Up
          </Link>
        </div>
      </div>

      {addCart && <AddToCart closecreatepostbox={closecreatepostbox} />}
    </>
  );
}
