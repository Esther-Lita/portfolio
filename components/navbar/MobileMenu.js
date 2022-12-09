import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className=" flex flex-col  w-full  py-1 pt-40 pl-12 space-y-3 text-lg uppercase text-gray-800 bg-slate-50 absolute top-0 left-0 ">
      <Link href="/" className="hover:text-gray-600 ">
        Home
      </Link>
      <Link href="/about" className="hover:text-gray-600">
        About
      </Link>
      <Link href="/contact" className="hover:text-gray-600">
        Contact
      </Link>
    </div>
  );
}
