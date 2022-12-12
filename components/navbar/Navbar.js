import { Fragment } from "react";
import Link from "next/link";

import HamburguerBtn from "./HamburguerBtn";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-2 pt-6 font-bold text-gray-800 md:pr-12 bg-slate-50 ">
      <Link href="/">
        <div className="group">
          <div className="m-auto hover:cursor-pointer hover:rounded-full  hover:shadow-2xl hover:border-slate-200 hover:border transition-all duration-150 p-2 h-14 w-14 ">
            <p className="ml-1 text-3xl text-bold font-inter ">EL</p>
          </div>
        </div>
      </Link>

      <div className="hidden h-10 text-lg lg:space-x-8 lg:flex font-inter">
        <div className="group">
          <Link href="/"> Home</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-zinc-400 ">
            {" "}
          </div>
        </div>
        <div className="group">
          <Link href="#projects"> Projects</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-zinc-400">
            {" "}
          </div>
        </div>
        <div className="group">
          <Link href="#about"> About</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-zinc-400">
            {" "}
          </div>
        </div>
        <div className="group">
          <Link href="#contact">Contact </Link>
          <div className="mx-2 group-hover:border-b group-hover:border-zinc-400">
            {" "}
          </div>
        </div>
      </div>
      {/*HAmburguer button */}
      <HamburguerBtn />
    </nav>
  );
}
