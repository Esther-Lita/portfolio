import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";

import esther2 from "../public/img/esther2.jpeg";

export default function About() {
  return (
    <div id="about">
      <div className="w-screen pt-32 bg-gradient-to-b from-slate-50 to-cyan-200">
        <h4 className="px-10 pb-10 text-lg font-bold text-center text-gray-900 font-aboutH md:text-2xl lg:text-3xl ">
          If you&apos;ve made it all the way here it means you want to know a
          little bit more about who I am...
        </h4>
      </div>
      <div className="w-screen bg-gradient-to-b from-cyan-200 to-yellow-200">
        <div className="flex flex-col mx-3 md:flex-row md:mx-10 md:py-10">
          <div className="max-w-xs mx-auto my-4 md:max-w-sm md:mx-6 md:my-0">
            {" "}
            <Image
              priority
              src={esther2}
              alt=""
              className="shadow-lg rounded-2xl -rotate-6 shadow-orange-300 "
            />
          </div>
          <div className="max-w-xl m-auto text-gray-800 font-robotoSlab md:text-lg lg:text-2xl">
            <p className="pt-10 md:pt-0 md:pl-3">
              {" "}
              <Icon.CheckCircle className="inline mr-2 text-green-800" /> I am
              always motivated to learn something new, learning is essential for
              growth in any area.
            </p>
            <p className="pt-10 md:pt-6 md:pl-3">
              <Icon.CheckCircle className="inline mr-2 text-green-800" />I am
              very passionated about building, it is amazing to be part of the
              creation of a project and see how line after line of code things
              fall in place.
            </p>{" "}
            <p className="pt-10 md:pl-3">
              <Icon.CheckCircle className="inline mr-2 text-green-800" />I am
              strongly driven to help people, therefore capture the team wants
              and needs to meet the standards required for the assignment is
              very important for me in a business relationship.
            </p>{" "}
            <p className="pt-10 md:pl-3">
              <Icon.CheckCircle className="inline mr-2 text-green-800" />I am a
              certificated React Developer by{" "}
              <Link
                href="https://www.shecodes.io/workshops"
                target="_blank"
                className="text-purple-700 hover:underline "
              >
                Shecodes
              </Link>{" "}
              Workshops in 2022.
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="w-screen pb-32 bg-gradient-to-b from-yellow-200 to-slate-50 ">
        <div className="">
          <h2 className="pt-20 mb-10 text-3xl font-bold text-center text-gray-900 font-josefinSans md:text-4xl md:pt-0 lg:text-6xl">
            I&apos;m Esther
          </h2>
        </div>
        <p className="px-8 pt-10 text-center text-gray-700 md:text-lg lg:text-xl">
          In this momment I&apos;m seeking for new opportunities in front-end
          development. I&apos;m open to work remotely and have flexible hours.
        </p>
      </div>
    </div>
  );
}
