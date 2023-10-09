import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="lg:w-6/12 rounded-md shadow-md m-auto p-4 h-screen">
        <h1 className="text-center font-bold text-3xl p-4">Checkout</h1>
        <div className="space-y-2 lg:w-6/12 m-auto">
          <div className="flex justify-center items-center">
            <h1 className="w-9/12">Total product price</h1>
            <h1 className="w-3/12 text-right">840TK</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="w-9/12">Standard Delivery</h1>
            <h1 className="w-3/12 text-right">60TK</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="w-9/12">Total</h1>
            <h1 className="w-3/12 text-right">900TK</h1>
          </div>
        </div>

        <h1 className="text-center mt-10 font-bold text-3xl p-4">
          Delivered to
        </h1>
        <div
          data-aos="fade-left"
          className="p-5 rounded-3xl mt-5 border space-y-2 border-y-2 border-x-2 border-yellow-900"
        >
          <div className="flex items-center">
            <h1 className="font-bold w-9/12">
              <span>Dellivery: </span>
              <span>4-7 days</span>
            </h1>
            <h1 className="w-3/12 font-bold text-right">60TK</h1>
          </div>
          <div className="flex items-center">
            <h1 className="w-9/12">
              <span className="font-bold ">Address: </span>
              <span>Mashka, Kendua, Netrokona, Dhaka, Bangladesh</span>
            </h1>
            <h1 className="w-3/12 font-bold text-right">
              <Link href={"/"}>Change</Link>
            </h1>
          </div>
        </div>
        <div className="text-center mt-4 p-2">
          <Link
            className="text-xl text-center text-white font-bold py-2 px-8 bg-slate-900 hover:bg-slate-600 rounded-full"
            href={"/"}
          >
            Order Confirm
          </Link>
        </div>
        <div className="text-center">
          <Link className="text-lg text-center 600 rounded-full" href={"/"}>
            Cash on delivery
          </Link>
        </div>
      </div>
    </>
  );
}
