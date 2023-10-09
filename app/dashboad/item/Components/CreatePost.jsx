"use client";

import { api } from "@/api/api";
import { useState } from "react";

export const CreatePost = ({ closecreatepostbox }) => {
  const [error, setError] = useState("");
  const [errorBox, setErrorBox] = useState(false);
  const [postData, setPostData] = useState({
    itemname: "",
    color: "",
    tags: "",
    deliverystatus: "",
    offer: "",
    price: "",
    description: "",
    image: [],
  });

  // onclinge hundler
  const onChangeHundler = (e) => {
    const { name, value } = e.target;
    setPostData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  // onsibmit hundler
  const onSubmit = async () => {
    try {
      const data = await api.post("/product/create", postData);
      console.log(data);
      closecreatepostbox();
    } catch (error) {}
    setError(error);
    console.log(error);
    setErrorBox(true);
  };

  //hundle onclick
  const handleSubboxClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        onClick={closecreatepostbox}
        className="backdrop-blur-xl bg-slate-800 z-30 py-20 fixed w-screen h-screen"
      >
        <div
          onClick={handleSubboxClick}
          className="lg:w-6/12 h-96 m-auto bg-white rounded-2xl overflow-y-auto shadow-lg p-10"
        >
          {errorBox && (
            <h1 className="text-sm bg-slate-500 font-bold text-center">
              {error}
            </h1>
          )}
          <h1 className="text-2xl font-bold text-center">Product details</h1>

          <div className="p-5">
            <label htmlFor="itemname" className="block text-xl font-bold">
              Enter product name
            </label>
            <input
              type="text"
              onChange={onChangeHundler}
              itemID="itemname"
              name="itemname"
              className="text-xl py-2 px-4 rounded-2xl shadow-md block w-full"
              placeholder="Enter your product name"
            />
          </div>
          <div className="p-5">
            <label htmlFor="color" className="block text-xl font-bold">
              Enter color name
            </label>
            <input
              type="text"
              onChange={onChangeHundler}
              itemID="color"
              name="color"
              className="text-xl py-2 px-4 rounded-2xl shadow-md block w-full"
              placeholder="Enter your color name"
            />
          </div>
          <div className="p-5">
            <label htmlFor="tags" className="block text-xl font-bold">
              Enter product tags
            </label>
            <input
              type="text"
              onChange={onChangeHundler}
              itemID="tags"
              name="tags"
              className="text-xl py-2 px-4 rounded-2xl shadow-md block w-full"
              placeholder="Enter your product tags"
            />
          </div>
          <div className="p-5">
            <label htmlFor="deliverystatus" className="block text-xl font-bold">
              Enter product deliverystatus
            </label>
            <input
              type="text"
              onChange={onChangeHundler}
              itemID="deliverystatus"
              name="deliverystatus"
              className="text-xl py-2 px-4 rounded-2xl shadow-md block w-full"
              placeholder="Enter your product deliverystatus"
            />
          </div>
          <div className="p-5">
            <label htmlFor="offer" className="block text-xl font-bold">
              Enter product offer
            </label>
            <input
              type="text"
              onChange={onChangeHundler}
              itemID="offer"
              name="offer"
              className="text-xl py-2 px-4 rounded-2xl shadow-md block w-full"
              placeholder="Enter your product offer"
            />
          </div>
          <div className="p-5">
            <label htmlFor="price" className="block text-xl font-bold">
              Enter product price
            </label>
            <input
              type="number"
              onChange={onChangeHundler}
              itemID="price"
              name="price"
              className="text-xl py-2 px-4 rounded-2xl shadow-md block w-full"
              placeholder="Enter your product price"
            />
          </div>
          <div className="p-5">
            <label htmlFor="description" className="block text-xl font-bold">
              Enter product description
            </label>
            <textarea
              itemID="description"
              onChange={onChangeHundler}
              name="description"
              cols={20}
              className="text-xl py-2 px-4 rounded-2xl shadow-md block w-full"
              placeholder="Enter your product description"
            ></textarea>
          </div>
          <div className="p-5">
            <label htmlFor="image" className="block text-xl font-bold">
              Enter product image
              <h1 className="text-sm">Sefarate your image link by using []</h1>
            </label>
            <input
              type="text"
              onChange={onChangeHundler}
              itemID="image"
              name="image"
              className="text-xl py-2 px-4 rounded-2xl shadow-md block w-full"
              placeholder="Enter your product image link"
            />
          </div>
          <div className="p-5 text-center">
            <button
              onClick={onSubmit}
              className="text-xl font-bold py-2 px-8 rounded-full bg-slate-800 hover:bg-slate-500 text-white inline-block"
            >
              Post now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
