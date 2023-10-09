"use client";
import { api } from "@/api/api";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import React, { useState } from "react";

export default function page() {
  const router = useRouter();
  const [le, setLe] = useState(false);
  const [lp, setLp] = useState(false);
  const [lu, setLu] = useState(false);
  const [errb, setErrb] = useState(false);
  const [errm, setErrm] = useState("");
  const [registerData, setRegisterData] = useState({
    fullname: '',
    email: '',
    password: ''
  })

  const hundleOnchange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      const response = await api.post('/register', registerData);
  
      if (response.data.statusCode === 200) {
        localStorage.setItem('accessToken', response.data.data);
        router.push('/');
      }
    } catch (error) {
      setErrm(error.response.data.message);
      setErrb(true);
    }
  };
  

  // hundle onkeyup
  const showEmail = () => {
    setLe(true);
  };
  const showpass = () => {
    setLp(true);
  };
  const showusername = () => {
    setLu(true);
  };
  return (
    <>
      <div className="flex py-10">
        <div className="lg:w-6/12 p-10 h-screen">
          <h1 className="text-8xl text-white">Your Jini</h1>
        </div>

        <div className="lg:w-6/12 h-screen">
          <div className="lg:w-6/12 m-auto">
            {errb && <h1 className="bg-slate-900 text-center p-4 text-white font-bold">{errm}</h1>}
            <h1 className="text-4xl inline-block font-bold border-b-4 py-2 border-black">
              Sign up
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
                onChange={hundleOnchange}
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div className="py-4">
              {lu && (
                <label
                  className="text-yellow-900 block font-bold text-2xl"
                  htmlFor="fullname"
                >
                  User name
                </label>
              )}
              <input
                className="text-2xl text-yellow-700 w-full p-2 border-b-4 border-yellow-500"
                placeholder="User name"
                onKeyUp={showusername}
                onChange={hundleOnchange}
                type="text"
                name="fullname"
                id="fullname"
              />
            </div>

            <div className="py-4">
              {lp && (
                <label
                  className="text-yellow-900 block font-bold text-2xl"
                  htmlFor="password"
                >
                  Password
                </label>
              )}
              <input
                className="text-2xl text-yellow-700 w-full p-2 border-b-4 border-yellow-500"
                placeholder="Email address"
                onKeyUp={showpass}
                onChange={hundleOnchange}
                type="password"
                name="password"
                id="password"
              />
            </div>

            <div className="flex">
              <div className="text-right">
                <Link href={"/"}>Already have an account?</Link>
              </div>
            </div>

            <div className="text-center my-20">
              <Link
                className="text-xl font-bold py-2 px-16 text-white hover:bg-slate-500 bg-slate-600 rounded-full w-6/12"
                href={""}
                onClick={onSubmit}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
