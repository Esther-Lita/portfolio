import Image from "next/image";
import Link from "next/link";
import weatherapp from "../public/img/weatherapp.png";
import weatherapp1 from "../public/img/weatherapp1.png";
import croissant from "../public/img/croissant-project.png";
import lanzarote from "../public/img/lanzarote-project.png";
import dictionary from "../public/img/dictionary.png";

export default function Projects() {
  return (
    <div className="py-32 ">
      <h2 className="text-3xl text-gray-900 font-bold mb-20 md:text-4xl text-center">
        Here are some of my creations{" "}
      </h2>
      <div className=" lg:grid lg:grid-cols-2 lg:grid-rows-2 flex flex-col">
        <div className="max-w-lg  bg-white  my-5 mx-5 border-transparent p-4 rounded-2xl shadow-md  lg:my-12 relative group hover:shadow-xl hover:shadow-gray-500 hover:border-gray-300 hover:border-b hover:cursor-pointer">
          <Link
            href="https://dashing-crisp-63467d.netlify.app/"
            target="_blank"
          >
            {" "}
            <Image src={weatherapp} className=" rounded-2xl  " />
          </Link>
          <div className="absolute bottom-0 left-0 right-0 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-80  p-2 px-4 rounded-b-2xl group-hover:cursor-pointer">
            <div className="flex justify-center w-full">
              <div className="font-normal ">
                <p className="text-sm text-center">Weather App</p>
                <p className="text-xs text-center"> React.js, CSS, HTML</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg    bg-white my-5 mx-5 border-transparent p-4 rounded-2xl shadow-md  lg:my-12 relative group hover:shadow-xl hover:shadow-gray-500 hover:border-gray-300 hover:border-b">
          <Image src={weatherapp1} className=" rounded-2xl  " />
          <div className="absolute bottom-0 left-0 right-0 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-80  p-2 px-4 rounded-b-2xl">
            <div className="flex justify-center w-full">
              <div className="font-normal ">
                <p className="text-sm text-center">Weather App</p>
                <p className="text-xs text-center">
                  HTML, CSS, Vanilla Javascript
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg   bg-white my-5 mx-5 border-transparent p-4 rounded-2xl shadow-md  lg:my-12 relative group hover:shadow-xl hover:shadow-gray-500 hover:border-gray-300 hover:border-b">
          <Image src={croissant} className=" rounded-2xl " />
          <div className="absolute bottom-0 left-0 right-0 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-80  p-2 px-4 rounded-b-2xl">
            <div className="flex justify-center w-full">
              <div className="font-normal ">
                <p className="text-sm text-center">Croissant Web</p>
                <p className="text-xs text-center">
                  HTML, CSS, Bootstrap, Flexbox
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg   bg-white  my-5 mx-5 border-transparent p-4 rounded-2xl shadow-md  lg:my-12 relative group hover:shadow-xl hover:shadow-gray-500 hover:border-gray-300 hover:border-b">
          <Image src={lanzarote} className=" rounded-2xl " />
          <div className="absolute bottom-0 left-0 right-0 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-80  p-2 px-4 rounded-b-2xl">
            <div className="flex justify-center w-full">
              <div className="font-normal ">
                <p className="text-sm text-center">Lanzarote Web</p>
                <p className="text-xs text-center">HTML, CSS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg   bg-white  my-5 mx-5 border-transparent p-4 rounded-2xl shadow-md  lg:my-12 relative group hover:shadow-xl hover:shadow-gray-500 hover:border-gray-300 hover:border-b">
          <Image src={dictionary} className=" rounded-2xl m-auto" />
          <div className="absolute bottom-0 left-0 right-0 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-80  p-2 px-4 rounded-b-2xl">
            <div className="flex justify-center w-full">
              <div className="font-normal ">
                <p className="text-sm text-center">Dictionary Web</p>
                <p className="text-xs text-center">
                  React.js, CSS, HTML, Tailwindcss
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg  bg-white   my-5 mx-5 border-transparent p-4 rounded-2xl shadow-md  lg:my-12 relative group hover:shadow-xl hover:shadow-gray-500 hover:border-gray-300 hover:border-b">
          <Image src={weatherapp} className=" rounded-2xl " />
          <div className="absolute bottom-0 left-0 right-0 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-80  p-2 px-4 rounded-b-2xl">
            <div className="flex justify-center w-full">
              <div className="font-normal ">
                <p className="text-sm text-center">Weather App</p>
                <p className="text-xs text-center">React.js, CSS, HTML</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}