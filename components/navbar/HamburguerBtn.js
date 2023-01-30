import { useState } from "react";
import MobileMenu from "../navbar/MobileMenu";
import { classNames } from "../../lib/classNames";

export default function HamburguerBtn() {
  const [openState, setOpen] = useState(false);

  function buttonClick() {
    setOpen(!openState);
  }

  return (
    <div className="lg:hidden ">
      <button
        type="button"
        className={classNames(
          openState && "open",
          "z-40 block lg:hidden focus:outline-none hamburguer right-4  p-6 h-5 w-5  hover:rounded-full  hover:shadow-2xl hover:border-slate-200 hover:border transition-all duration-150"
        )}
        onClick={buttonClick}
      >
        <span className="hamburguer-top "></span>
        <span className="hamburguer-middle"></span>
        <span className="hamburguer-bottom"></span>
      </button>
      {openState && <MobileMenu function={buttonClick} />}
    </div>
  );
}
