import { Fragment } from "react";
import Link from "next/link";

import * as Icon from "react-feather";
import HamburguerBtn from "./HamburguerBtn";


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-4 font-bold text-gray-800 md:pr-12 bg-slate-50 ">
      <Link href="/">
        <div className="group">
          <div className="p-2 mt-0 transition-all duration-150 hover:cursor-pointer hover:rounded-full hover:shadow-2xl hover:border-slate-200 hover:border h-14 w-14 lg:ml-10">
            <Icon.Home className="w-8 h-8 m-auto" />
          </div>
        </div>
      </Link>

      <div className="hidden h-10 pt-1 text-lg lg:space-x-8 lg:flex font-inter">
        <div className="group"></div>
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
