import Link from "next/link";

import * as Icon from "react-feather";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen pt-20 bg-slate-50 md:pt-36 ">
      <Hero />
      <div className="flex my-20 md:hidden">
        {" "}
        <Link href="https://cal.com/esther-lita/30min" target="_blank">
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-800 transition-all duration-150 bg-yellow-400 border border-transparent rounded-full shadow-md font-inter hover:shadow-lg hover:bg-yellow-500 hover:shadow-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 hover:-translate-y-2"
          >
            Let&apos;s Talk
            <Icon.ChevronRight className="ml-1" />
          </button>
        </Link>
      </div>
      <div className="hidden my-20 md:flex">
        {" "}
        <Link href="https://cal.com/esther-lita/30min" target="_blank">
          <button
            type="button"
            className="inline-flex items-center px-10 py-5 text-2xl font-medium text-gray-800 transition-all duration-150 bg-yellow-400 border border-transparent rounded-full shadow-md font-inter hover:shadow-lg hover:bg-yellow-500 hover:shadow-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 hover:-translate-y-2"
          >
            Let&apos;s Talk <Icon.ChevronRight className="ml-2" />
          </button>
        </Link>
      </div>
      <div>
        <div className="max-w-2xl p-4 mx-4 my-10 text-center border-b-2 border-gray-200 shadow-lg rounded-2xl shadow-yellow-300 md:mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl font-inter">
            Developer skills
          </h2>
          <p className="text-gray-600 md:text-lg lg:text-2xl font-robotoSlab ">
            Good knowledge of HTML, CSS, JavaScript, React.js and Next.js. I
            make responsive applications with Bootstrap and Tailwind CSS with
            interactive UI designs.
          </p>
        </div>
        <Services />
      </div>
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
