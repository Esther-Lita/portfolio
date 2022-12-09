import Link from "next/link";

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";

export default function Home() {
  return (
    <div className=" bg-slate-50 min-h-screen  justify-center items-center flex flex-col md:pt-36 pt-20 w-screen">
      <Hero />
      <div className="my-20 ">
        {" "}
        <Link href="https://cal.com/esther-lita/30min" target="_blank">
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-gray-800 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
          >
            Let&apos;s Talk
          </button>
        </Link>
      </div>
      <div>
        <div className="p-4 text-center shadow-lg rounded-2xl shadow-yellow-300 max-w-2xl border-b-2 border-gray-300 mx-4 my-10">
          <h2 className="text-3xl text-gray-900 font-bold mb-5 md:text-4xl">
            Developer skills
          </h2>
          <p className="text-gray-600 md:text-lg">
            Good knowledge of HTML, CSS, Javascript, React.js and Next.js. I
            make responsive applications with Bootstrap and Tailwind CSS with
            interactive UI designs.
          </p>
        </div>
      </div>
      <Projects />
      <About />
    </div>
  );
}
