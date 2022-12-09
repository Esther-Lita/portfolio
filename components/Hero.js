import Image from "next/image";

import esther from "../public/img/esther.jpeg";

export default function Hero() {
  return (
    <div
      id="hero"
      className=" bg-yellow-400 flex flex-row relative  w-screen md:py-6"
    >
      <div className="md:my-10 text-left lg:text-center ml-4 m-auto">
        <h1 className="md:text-7xl font-extrabold  text-black text-5xl pt-2">
          Esther Lizardo
        </h1>
        <p className="lg:text-lg mt-4 text-gray-600 ">
          I&apos;m a Front-end developer based in Europe.
        </p>
      </div>
      <div className="">
        <div className="md:bottom-2 md:absolute md:right-10 mr-16 md:mr-0 my-2 md:my-0 lg:right-20">
          <Image
            src={esther}
            alt="Esther Lizardo"
            className="  rounded-full  w-40  md:w-56 shadow-lg shadow-yellow-600 border-l"
          />
        </div>
      </div>
    </div>
  );
}
