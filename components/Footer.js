import * as Icon from "react-feather";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      id="contact"
      className="relative mx-auto w-full max-w-[1440px]  md:px-9 z-20  md:pb-8"
    >
      <footer className="flex flex-row justify-between w-full h-full px-5 bg-pink-500 shadow-xl md:rounded-3xl md:flex-col py-14 md:px-14 lg:px-16 lg:pb-16 lg:pt-20 shadow-orange-200">
        <div className="flex flex-col justify-center ml-4 md:flex-row ">
          <div className="m-auto ">
            <h3 className="mb-3 text-xl font-bold text-white md:text-3xl lg:text-5xl md:mb-8 md:text-center font-inter">
              Let&apos;s work together!
            </h3>
            <Link href="mailto:estherlitalg@gmail.com">
              <p className="text-center text-white md:text-xl lg:text-2xl hover:underline font-robotoCondensed">
                estherlitalg@gmail.com
              </p>
            </Link>
          </div>
          <div className="hidden m-auto md:flex">
            {" "}
            <Link href="https://cal.com/esther-lita/30min" target="_blank">
              <button
                type="button"
                className="inline-flex items-center px-10 py-5 text-xl font-medium text-white transition-all duration-150 bg-pink-400 border border-transparent rounded-full shadow-md font-inter hover:shadow-lg shadow-pink-800 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 hover:shadow-cyan-700 hover:-translate-y-2"
              >
                Let&apos;s Chat
                <Icon.Calendar className="ml-3" />
              </button>
            </Link>
          </div>
          <div className="flex mx-auto mt-16 md:hidden">
            <Link href="https://cal.com/esther-lita/30min" target="_blank">
              <button
                type="button"
                className="inline-flex items-center transition-all duration-150 px-3.5 py-2 border border-transparent text-sm leading-4 font-medium font-inter rounded-full shadow-md hover:shadow-lg shadow-pink-800 bg-pink-400 text-white  hover:bg-cyan-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 hover:shadow-cyan-700  hover:-translate-y-2"
              >
                Let&apos;s Chat
                <Icon.Calendar className="ml-3" />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between m-auto space-y-4 text-white md:mt-24 ">
          {/* icons container*/}
          <div className="flex flex-col items-center mx-auto space-y-3 md:space-y-0 md:space-x-7 md:justify-end md:mx-0 md:flex-row font-robotoCondensed">
            <div className="h-8 m-auto group">
              <Link
                href="https://www.instagram.com/esther_lita/"
                target="_blank"
              >
                <div className="flex flex-row md:flex-col ">
                  {" "}
                  <Icon.Instagram className="inline w-8 h-8 p-1 mr-1 rounded-full md:mx-5 group-hover:bg-slate-50 group-hover:text-pink-700 group-hover:shadow-md group-hover:shadow-pink-800" />
                  <p className="inline mt-1 group-hover:underline">
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
                <div className="flex flex-row md:flex-col ">
                  <Icon.Linkedin className="inline w-8 h-8 p-1 mr-1 md:mx-3 group-hover:bg-slate-50 group-hover:rounded-full group-hover:text-pink-700 group-hover:shadow-md group-hover:shadow-pink-800" />
                  <p className="inline-block mt-1 group-hover:underline">
                    {" "}
                    Linkedin
                  </p>
                </div>
              </Link>
            </div>
            <div className="h-8 group">
              <Link href="https://twitter.com/esther_ligar" target="_blank">
                <div className="flex flex-row md:flex-col ">
                  <Icon.Twitter className="inline w-8 h-8 p-1 mr-1 rounded-full md:mx-3 group-hover:bg-slate-50 group-hover:text-pink-700 group-hover:shadow-md group-hover:shadow-pink-800" />
                  <p className="inline mt-1 group-hover:underline"> Twitter</p>
                </div>
              </Link>
            </div>
            <div className="h-8 group">
              <Link
                href="https://github.com/litaesther10?tab=repositories"
                target="_blank"
              >
                <div className="flex flex-row md:flex-col ">
                  <Icon.GitHub className="inline w-8 h-8 p-1 mr-1 rounded-full md:mx-3 group-hover:bg-slate-50 group-hover:text-pink-700 group-hover:shadow-md group-hover:shadow-pink-800" />
                  <p className="inline mt-1 group-hover:underline">GitHub</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
