import * as Icon from "react-feather";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative mx-auto w-full max-w-[1440px]  md:px-9 z-20  md:pb-8">
      <footer className="bg-pink-500   md:rounded-3xl   flex h-full w-full justify-between flex-row md:flex-col px-5 py-14  md:px-14 lg:px-16 lg:pb-16 lg:pt-20 shadow-xl shadow-orange-200">
        <div className="flex flex-col md:flex-row justify-center ml-4 ">
          <div className="  m-auto ">
            <h3 className="text-xl  text-white md:text-3xl lg:text-5xl mb-3 md:mb-8 md:text-center font-inter font-bold">
              Let&apos;s work together!
            </h3>
            <Link href="mailto:estherlitalg@gmail.com">
              <p className="text-white md:text-xl lg:text-2xl text-center hover:underline  font-robotoCondensed">
                estherlitalg@gmail.com
              </p>
            </Link>
          </div>
          <div className="m-auto  hidden md:flex">
            {" "}
            <Link href="https://cal.com/esther-lita/30min" target="_blank">
              <button
                type="button"
                className="inline-flex items-center px-10 py-5 border border-transparent text-xl font-medium font-inter rounded-full shadow-md hover:shadow-lg shadow-pink-800 bg-pink-400 text-white  hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 hover:shadow-cyan-700  hover:-translate-y-2"
              >
                Let&apos;s Chat
                <Icon.Video className="ml-3" />
              </button>
            </Link>
          </div>
          <div className=" mt-16 mx-auto flex md:hidden">
            <Link href="https://cal.com/esther-lita/30min" target="_blank">
              <button
                type="button"
                className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium font-inter rounded-full shadow-md hover:shadow-lg shadow-pink-800 bg-pink-400 text-white  hover:bg-cyan-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 hover:shadow-cyan-700  hover:-translate-y-2"
              >
                Let&apos;s Chat
                <Icon.Video className="ml-3" />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-4 text-white  md:mt-24 items-center m-auto ">
          {/* icons container*/}
          <div className="flex items-center  mx-auto space-y-3 md:space-y-0 md:space-x-7 md:justify-end md:mx-0 flex-col md:flex-row font-robotoCondensed">
            <div className="h-8 group  m-auto">
              <Link
                href="https://www.instagram.com/esther_lita/"
                target="_blank"
              >
                <div className="flex md:flex-col flex-row ">
                  {" "}
                  <Icon.Instagram className="inline md:mx-5 mr-1  group-hover:bg-slate-50 h-8 w-8 rounded-full p-1 group-hover:text-pink-700 group-hover:shadow-md group-hover:shadow-pink-800" />
                  <p className="inline  group-hover:underline  mt-1">
                    Instagram
                  </p>
                </div>
              </Link>
            </div>
            <div className="h-8 group ">
              <Link
                href="https://www.linkedin.com/in/esther-lizardo-garcia-4823ab240/"
                target="_blank"
              >
                <div className="flex md:flex-col flex-row ">
                  <Icon.Linkedin className="inline md:mx-3 mr-1 group-hover:bg-slate-50 h-8 w-8 group-hover:rounded-full p-1 group-hover:text-pink-700 group-hover:shadow-md group-hover:shadow-pink-800" />
                  <p className="inline-block group-hover:underline mt-1">
                    {" "}
                    Linkedin
                  </p>
                </div>
              </Link>
            </div>
            <div className="h-8 group">
              <Link href="https://twitter.com/esther_ligar" target="_blank">
                <div className="flex md:flex-col flex-row ">
                  <Icon.Twitter className="inline md:mx-3 mr-1 group-hover:bg-slate-50 h-8 w-8 rounded-full p-1 group-hover:text-pink-700 group-hover:shadow-md group-hover:shadow-pink-800" />
                  <p className="inline group-hover:underline mt-1"> Twitter</p>
                </div>
              </Link>
            </div>
            <div className="h-8 group">
              <Link
                href="https://github.com/litaesther10?tab=repositories"
                target="_blank"
              >
                <div className="flex md:flex-col flex-row ">
                  <Icon.GitHub className="inline md:mx-3 mr-1 group-hover:bg-slate-50 h-8 w-8 rounded-full p-1 group-hover:text-pink-700 group-hover:shadow-md group-hover:shadow-pink-800" />
                  <p className="inline group-hover:underline mt-1">GitHub</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
