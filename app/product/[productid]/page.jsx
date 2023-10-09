"use client";
import ProductBox from "@/app/Components/Box/ProductBox";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { api } from "@/api/api";

export default function page({ params }) {
  const [item, setItem] = useState([]);
  const [colorArray, setColorArray] = useState([]);
  const [comments, setComments] = useState([]);
  const [sizeArray, setSizeArray] = useState([]);
  const [finalimageArray, setFinalImageArray] = useState([]);
  useEffect(() => {
    AOS.init();
    const fatchData = async () => {
      const data = await api.get(`/product/${params.productid}`);
      setSizeArray(data.data.data.size);
      setColorArray(data.data.data.color);
      setComments(data.data.data.comment);
      setItem(data.data.data);
      const imageUrlArray = data.data.data.image[0][0].split(",");
      const cleanedImageUrlArray = imageUrlArray.map((url) => {
        return url.replace(/\[|\]/g, "");
      });
      setFinalImageArray(cleanedImageUrlArray);
    };
    fatchData();
  }, []);
  return (
    <>
      <div className="lg:flex p-4">
        <div className="lg:w-6/12 p-5">
          <div className="flex" data-aos="fade-left">
            <div className="w-2/12 px-5 space-y-5 overflow-y-auto">
              {Array.isArray(finalimageArray) && finalimageArray.length > 0 ? (
                finalimageArray.map((img) => {
                  console.log({ img });
                  return <img src={img} className="w-full block" />;
                })
              ) : (
                <p>No images available</p>
              )}
            </div>
            <div className="w-10/12">
              <img src={finalimageArray[0]} className="w-full h-80" alt="" />
            </div>
          </div>
          <div>
            <h1 className="font-bold py-10 text-3xl">
              {comments.length} Comments....
            </h1>
          </div>
          <div className="space-y-5" data-aos="fade-right">
            <div className="flex" data-aos="fade-right">
              <div className="w-2/12 text-ellipsis">
                <Image
                  src={""}
                  className="w-10 h-10 inline-block rounded-full"
                />
              </div>
              <div className="border w-10/12 border-x-2 border-y-2 rounded-3xl border-yellow-900 p-4">
                <h1 className="font-bold py-2 text-2xl">MD Naiem Hosen</h1>
                <h1 className="font-bold py-2 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  deserunt incidunt eos eveniet explicabo tenetur molestias,
                  distinctio accusantium aperiam id amet, ut a? Ullam dicta id
                  totam, officia hic incidunt.
                </h1>
              </div>
            </div>
            <div className="flex" data-aos="fade-right">
              <div className="w-2/12 text-ellipsis">
                <Image
                  src={""}
                  className="w-10 h-10 inline-block rounded-full"
                />
              </div>
              <div className="border w-10/12 border-x-2 border-y-2 rounded-3xl border-yellow-900 p-4">
                <h1 className="font-bold py-2 text-2xl">MD Naiem Hosen</h1>
                <h1 className="font-bold py-2 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  deserunt incidunt eos eveniet explicabo tenetur molestias,
                  distinctio accusantium aperiam id amet, ut a? Ullam dicta id
                  totam, officia hic incidunt.
                </h1>
              </div>
            </div>
            <div className="flex" data-aos="fade-right">
              <div className="w-2/12 text-ellipsis">
                <Image
                  src={""}
                  className="w-10 h-10 inline-block rounded-full"
                />
              </div>
              <div className="border w-10/12 border-x-2 border-y-2 rounded-3xl border-yellow-900 p-4">
                <h1 className="font-bold py-2 text-2xl">MD Naiem Hosen</h1>
                <h1 className="font-bold py-2 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  deserunt incidunt eos eveniet explicabo tenetur molestias,
                  distinctio accusantium aperiam id amet, ut a? Ullam dicta id
                  totam, officia hic incidunt.
                </h1>
              </div>
            </div>
            <div className="flex" data-aos="fade-right">
              <div className="w-2/12 text-ellipsis">
                <Image
                  src={""}
                  className="w-10 h-10 inline-block rounded-full"
                />
              </div>
              <div className="border w-10/12 border-x-2 border-y-2 rounded-3xl border-yellow-900 p-4">
                <h1 className="font-bold py-2 text-2xl">MD Naiem Hosen</h1>
                <h1 className="font-bold py-2 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  deserunt incidunt eos eveniet explicabo tenetur molestias,
                  distinctio accusantium aperiam id amet, ut a? Ullam dicta id
                  totam, officia hic incidunt.
                </h1>
              </div>
            </div>
            <div className="text-center p-5">
              <button className="py-2 px-8 hover:bg-slate-500 bg-slate-700 text-white font-bold rounded-full">
                Show more
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-6/12 p-5">
          <div>
            <h1 className="text-3xl font-bold py-1" data-aos="fade-left">
              {item.itemname}
            </h1>
            <div className="flex items-center" data-aos="fade-right">
              <span className="inline-block font-bold space-x-2">
                Rating: <span>*****</span>
                <span>{item.ratting}</span>
                <span>(Reviews: {item.review})</span>
              </span>
            </div>
            <h1 data-aos="fade-left" className="py-1">
              {item.oplicy}
            </h1>
            <h1 data-aos="fade-left" className="py-1 text-sm">
              7 From YourJini
            </h1>
            <h1 data-aos="fade-left" className="py-1 pt-5 text-5xl font-bold">
              {item.price} tk
            </h1>
            <h1 data-aos="fade-left" className="py-1 font-bold">
              <span className="">{item.oldprice} </span>
              <span>({item.offer})</span>
            </h1>
            <div data-aos="fade-left" className="pt-5">
              <h1 className="font-bold">Color</h1>
              <div className="space-x-4 space-y-2">
                {Array.isArray(colorArray) && colorArray.length > 0 ? (
                  colorArray.map((colori) => (
                    <div className="h-5 inline-block rounded-full w-5 bg-[{colori}]"></div>
                  ))
                ) : (
                  <p>No colors available</p>
                )}
              </div>
            </div>
            <div data-aos="fade-left" className="pt-5">
              <h1 className="font-bold">Color</h1>
              <div className="space-x-4 space-y-2">
                {Array.isArray(sizeArray) && sizeArray.length > 0 ? (
                  sizeArray.map((colori) => (
                    <div className="h-5 inline-block rounded-full w-5 bg-[{colori}]"></div>
                  ))
                ) : (
                  <p>No colors available</p>
                )}
              </div>
            </div>
            <div data-aos="fade-left" className="flex items-center pt-10">
              <div className="flex items-center w-6/12 space-x-4">
                <span className="text-xl font-bold">Total:</span>
                <div className="inline-block">
                  <div className="border cursor-pointer border-x-2 font-bold border-y-2 border-slate-800 h-5 flex items-center justify-center w-5 rounded-full p-1">
                    -
                  </div>
                </div>
                <div className="inline-block">0</div>
                <div className="inline-block">
                  <div className="border cursor-pointer border-x-2 font-bold border-y-2 border-slate-800 h-5 flex items-center justify-center w-5 rounded-full p-1">
                    +
                  </div>
                </div>
              </div>
              <div className="w-6/12 text-center space-x-10 space-y-5">
                <button className="text-white font-bold py-2 px-8 bg-slate-600 rounded-full inline-block">
                  Add to cart
                </button>
                <button className="text-white font-bold py-2 px-8 bg-slate-700 rounded-full inline-block">
                  Buy now
                </button>
              </div>
            </div>
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
          </div>
          <div>
            <h1 className="text-4xl font-bold py-4">Similar items</h1>
            <div className="text-center space-x-5 space-y-5">
              <ProductBox itemname={"bike"} price={1000} image={""} />
              <ProductBox itemname={"bike"} price={1000} image={""} />
              <ProductBox itemname={"bike"} price={1000} image={""} />
              <ProductBox itemname={"bike"} price={1000} image={""} />
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-center" data-aos="fade-left">
          <div className="w-5/12 bg-slate-800 h-1"></div>
          <div className="w-2/12 text-center font-bold text-2xl">
            Other items
          </div>
          <div className="w-5/12 bg-slate-800 h-1"></div>
        </div>
        <div className="text-center space-x-5 space-y-5">
          {" "}
          <ProductBox itemname={"bike"} price={1000} image={""} />
          <ProductBox itemname={"bike"} price={1000} image={""} />
          <ProductBox itemname={"bike"} price={1000} image={""} />
          <ProductBox itemname={"bike"} price={1000} image={""} />
          <ProductBox itemname={"bike"} price={1000} image={""} />
          <ProductBox itemname={"bike"} price={1000} image={""} />
          <ProductBox itemname={"bike"} price={1000} image={""} />
          <ProductBox itemname={"bike"} price={1000} image={""} />
          <ProductBox itemname={"bike"} price={1000} image={""} />
          <ProductBox itemname={"bike"} price={1000} image={""} />
          <ProductBox itemname={"bike"} price={1000} image={""} />
          <ProductBox itemname={"bike"} price={1000} image={""} />
          <ProductBox itemname={"bike"} price={1000} image={""} />
          <ProductBox itemname={"bike"} price={1000} image={""} />
          <ProductBox itemname={"bike"} price={1000} image={""} />
        </div>
      </div>
    </>
  );
}
