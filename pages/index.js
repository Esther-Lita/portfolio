import Link from "next/link";

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className=" bg-slate-50 min-h-screen  justify-center items-center flex flex-col md:pt-36 pt-20 w-screen">
      <Hero />
      <div className="my-20 flex md:hidden">
        {" "}
        <Link href="https://cal.com/esther-lita/30min" target="_blank">
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium font-inter rounded-full shadow-md hover:shadow-lg text-gray-800 bg-yellow-400 hover:bg-yellow-500 hover:shadow-yellow-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 hover:-translate-y-2"
          >
            Let&apos;s Talk
          </button>
        </Link>
      </div>
      <div className="my-20 hidden md:flex">
        {" "}
        <Link href="https://cal.com/esther-lita/30min" target="_blank">
          <button
            type="button"
            className="inline-flex items-center px-10 py-5 border border-transparent text-2xl font-medium font-inter rounded-full shadow-md hover:shadow-lg text-gray-800 bg-yellow-400 hover:bg-yellow-500 hover:shadow-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 hover:-translate-y-2"
          >
            Let&apos;s Talk
          </button>
        </Link>
      </div>
      <div>
        <div className="p-4 text-center shadow-lg rounded-2xl shadow-yellow-300 max-w-2xl border-b-2 border-gray-300 mx-4 my-10">
          <h2 className="text-3xl text-gray-900 font-bold mb-5 md:text-4xl lg:text-5xl font-inter">
            Developer skills
          </h2>
          <p className="text-gray-600 md:text-lg lg:text-2xl font-robotoSlab  ">
            Good knowledge of HTML, CSS, JavaScript, React.js and Next.js. I
            make responsive applications with Bootstrap and Tailwind CSS with
            interactive UI designs.
          </p>
        </div>
      </div>
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
