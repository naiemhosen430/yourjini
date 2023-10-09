"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  const [le, setLe] = useState(false);
  const [lp, setLp] = useState(false);

  // hundle onkeyup
  const showEmail = () => {
    setLe(true);
  };
  const showpass = () => {
    setLp(true);
  };
  return (
    <>
      <div className="flex py-10">
        <div className="lg:w-6/12 p-10 h-screen">
          <h1 className="text-8xl text-white">Your Jini</h1>
        </div>

        <div className="lg:w-6/12 h-screen">
          <div className="lg:w-6/12 m-auto">
            <h1 className="text-4xl inline-block font-bold border-b-4 py-2 border-black">
              Login
            </h1>

            <div className="py-4 pt-20">
              {le && (
                <label
                  className="text-yellow-900 block font-bold text-2xl"
                  htmlFor="email"
                >
                  Email address
                </label>
              )}
              <input
                className="text-2xl text-yellow-700 w-full p-2 border-b-4 border-yellow-500"
                placeholder="Email address"
                onKeyUp={showEmail}
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div className="py-4">
              {lp && (
                <label
                  className="text-yellow-900 block font-bold text-2xl"
                  htmlFor="Password"
                >
                  Password
                </label>
              )}
              <input
                className="text-2xl text-yellow-700 w-full p-2 border-b-4 border-yellow-500"
                placeholder="Email address"
                onKeyUp={showpass}
                type="Password"
                name="Password"
                id="Password"
              />
            </div>

            <div className="flex">
              <div className="w-6/12">
                <Link href={"/"}>Forget password?</Link>
              </div>
              <div className="w-6/12 text-right">
                <Link href={"/"}>Create an account?</Link>
              </div>
            </div>

            <div className="text-center my-20">
              <Link
                className="text-xl font-bold py-2 px-16 text-white hover:bg-slate-500 bg-slate-600 rounded-full w-6/12"
                href={"/"}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
