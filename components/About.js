import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";

import esther2 from "../public/img/esther2.jpeg";

export default function About() {
  return (
    <div id="about">
      <div className="bg-gradient-to-b from-slate-50 to-cyan-200    w-screen pt-32">
        <h4 className="text-lg text-gray-900 font-bold font-aboutH pb-10 md:text-2xl lg:text-3xl text-center px-10  ">
          If you&apos;ve made it all the way here it means you wank to know a
          little bit more about who I am...
        </h4>
      </div>
      <div className="bg-gradient-to-b from-cyan-200 to-yellow-200    w-screen">
        <div className="flex flex-col md:flex-row mx-3 md:mx-10 md:py-10">
          <div className="md:max-w-sm my-4 mx-auto md:mx-6 md:my-0 max-w-xs">
            {" "}
            <Image
              priority
              src={esther2}
              alt=""
              className="rounded-2xl -rotate-6 shadow-lg shadow-orange-300 "
            />
          </div>
          <div className="max-w-xl m-auto font-robotoSlab text-gray-800 md:text-lg lg:text-2xl">
            <p className=" pt-10 md:pt-0 md:pl-3">
              {" "}
              <Icon.CheckCircle className="inline mr-2 text-green-800" /> I am
              always motivated to learn something new, learning is essential for
              growth in any area.
            </p>
            <p className=" pt-10    md:pt-6 md:pl-3 ">
              <Icon.CheckCircle className="inline mr-2 text-green-800" />I am
              very passionated about building, it is amazing to be part of the
              creation of a project and see how line after line of code things
              fall in place.
            </p>{" "}
            <p className=" pt-10 md:pl-3 ">
              <Icon.CheckCircle className="inline mr-2 text-green-800" />I am
              strongly driven to help people, therefore capture the team wants
              and needs to meet the standards required for the assignment is
              very important for me in a business relationship.
            </p>{" "}
            <p className=" pt-10 md:pl-3 ">
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
      <div className="bg-gradient-to-b  from-yellow-200 to-slate-50   w-screen pb-32 ">
        <div className=" ">
          <h2 className="text-3xl text-gray-900 font-bold font-josefinSans mb-10 md:text-4xl pt-20 md:pt-0 text-center lg:text-6xl">
            I&apos;m Esther
          </h2>
        </div>
        <p className="text-gray-700 md:text-lg text-center px-8 pt-10 lg:text-xl">
          In this momment I&apos;m seeking for new opportunities in front-end
          development. I&apos;m open to work remotely and have flexible hours.
        </p>
      </div>
    </div>
  );
}
