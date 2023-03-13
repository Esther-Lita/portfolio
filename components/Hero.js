import Image from "next/image";

import esther from "../public/img/esther.jpeg";

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative flex flex-row w-screen bg-yellow-400 md:py-6"
    >
      <div className="mx-auto my-8 ml-4 text-left md:my-10 lg:ml-20 lg:text-center md:mx-10">
        <h1 className="pt-2 text-6xl font-bold text-black md:text-7xl lg:text-8xl xl:text-9xl font-oswald ">
          Esther Lizardo
        </h1>
        <p className="mt-4 text-gray-600 md:text-lg lg:text-2xl font-robotoCondensed">
         Software Developer 
        </p>
      </div>
      <div className="">
        <div className="pt-2 my-2 mr-16 md:bottom-2 md:absolute md:right-10 md:mr-0 md:my-0 lg:right-20 ">
          <Image
            priority
            src={esther}
            alt="Esther Lizardo"
            className="w-48 border-l rounded-full shadow-lg md:w-56 xl:w-64 shadow-yellow-600"
          />
        </div>
      </div>
    </div>
  );
}
