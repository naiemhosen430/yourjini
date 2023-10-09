import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="w-10/12 m-auto">
        <div className="flex items-center">
          <h1 className="font-bold text-black text-3xl py-5">
            Cart information
          </h1>
        </div>
        <Link href={"/check-out/something"}>
          <div className="flex space-x-5 cursor-pointer hover:bg-slate-400 rounded-md shadow-md my-4 p-4">
            <div className="w-2/12 bg-slate-600">
              <Image src={""} height={0} width={0} className="w-full" />
            </div>
            <div className="w-10/12">
              <h1 className="text-xl font-bold py-1 pt-0">Item name</h1>
              <h1 className="text-sm font-bold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis ab atque, quisquam praesentium possimus, quis odio
                exercitationem sapiente nulla magnam rerum, repellat iste
                placeat dolore aperiam autem in nemo enim.
              </h1>
            </div>
          </div>
        </Link>
        <Link href={"/check-out/something"}>
          <div className="flex space-x-5 cursor-pointer hover:bg-slate-400 rounded-md shadow-md my-4 p-4">
            <div className="w-2/12 bg-slate-600">
              <Image src={""} height={0} width={0} className="w-full" />
            </div>
            <div className="w-10/12">
              <h1 className="text-xl font-bold py-1 pt-0">Item name</h1>
              <h1 className="text-sm font-bold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis ab atque, quisquam praesentium possimus, quis odio
                exercitationem sapiente nulla magnam rerum, repellat iste
                placeat dolore aperiam autem in nemo enim.
              </h1>
            </div>
          </div>
        </Link>
        <Link href={"/check-out/something"}>
          <div className="flex space-x-5 cursor-pointer hover:bg-slate-400 rounded-md shadow-md my-4 p-4">
            <div className="w-2/12 bg-slate-600">
              <Image src={""} height={0} width={0} className="w-full" />
            </div>
            <div className="w-10/12">
              <h1 className="text-xl font-bold py-1 pt-0">Item name</h1>
              <h1 className="text-sm font-bold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis ab atque, quisquam praesentium possimus, quis odio
                exercitationem sapiente nulla magnam rerum, repellat iste
                placeat dolore aperiam autem in nemo enim.
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
