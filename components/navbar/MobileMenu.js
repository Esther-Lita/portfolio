import Link from "next/link";

export default function MobileMenu(props) {
  return (
    <div
      onClick={props.function}
      className=" flex flex-col  w-full  py-12 pt-40 pl-12 space-y-3 text-lg uppercase text-gray-800 bg-slate-50 absolute top-0 left-0 font-inter "
    >
      <Link href="/" className="hover:text-violet-700 ">
        Home
      </Link>
      <Link href="#projects" className="hover:text-violet-700">
        Projects
      </Link>
      <Link href="#about" className="hover:text-violet-700">
        About
      </Link>
      <Link href="#contact" className="hover:text-violet-700">
        Contact
      </Link>
    </div>
  );
}
