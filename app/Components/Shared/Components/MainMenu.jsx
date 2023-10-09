import Link from "next/link";
import React from "react";

export default function MainMenu() {
  return (
    <>
      <div className="bg-slate-500 flex items-center space-x-4 px-20">
        <Link
          className="inline-block py-2 px-4 text-white font-bold hover:bg-slate-300 hover:text-black"
          href={"/"}
        >
          Clothing
        </Link>
        <Link
          className="inline-block py-2 px-4 text-white font-bold hover:bg-slate-300 hover:text-black"
          href={"/"}
        >
          Stickers
        </Link>
        <Link
          className="inline-block py-2 px-4 text-white font-bold hover:bg-slate-300 hover:text-black"
          href={"/"}
        >
          Phone cose
        </Link>
        <Link
          className="inline-block py-2 px-4 text-white font-bold hover:bg-slate-300 hover:text-black"
          href={"/"}
        >
          Electronic
        </Link>
        <Link
          className="inline-block py-2 px-4 text-white font-bold hover:bg-slate-300 hover:text-black"
          href={"/"}
        >
          Others
        </Link>
      </div>
    </>
  );
}
