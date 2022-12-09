import * as Icon from "react-feather";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative mx-auto w-full max-w-[1440px]  md:px-9 z-20  md:pb-8">
      <footer className="bg-pink-500   md:rounded-3xl   flex h-full w-full justify-between flex-col px-5 py-14  md:px-14 lg:px-16 lg:pb-16 lg:pt-20 ">
        <div className="flex flex-row justify-center">
          <div className="mx-6 md:m-auto">
            <h3 className="text-xl  text-white md:text-3xl mb-3 md:mb-8 text-center">
              Let&apos;s work together!
            </h3>
            <Link href="mailto:estherlitalg@gmail.com">
              <p className="text-white md:text-xl text-center hover:underline">
                <span className="md:text-2xl"> 📬</span> estherlitalg@gmail.com
              </p>
            </Link>
          </div>
          <div className=" mx-6 md:m-auto">
            {" "}
            <Link href="https://cal.com/esther-lita/30min" target="_blank">
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-gray-700 bg-white hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
              >
                Let&apos;s Chat
                <Icon.Video className="ml-3" />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-4 text-white mt-12 md:mt-24 items-center">
          {/* icons container*/}
          <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0 ">
            <div className="h-8 group">
              <Link href="#">
                <Icon.Instagram />{" "}
              </Link>
            </div>
            <div className="h-8 group">
              <Link href="#">
                {" "}
                <Icon.Facebook />
              </Link>
            </div>
            <div className="h-8 group">
              <Link href="#">
                {" "}
                <Icon.Twitter />
              </Link>
            </div>
            <div className="h-8 group">
              <Link href="#">
                {" "}
                <Icon.GitHub />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
