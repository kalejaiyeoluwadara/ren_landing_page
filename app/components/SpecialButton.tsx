import { div } from "framer-motion/client";
import React from "react";
import { Icons } from "./icons";

function SpecialButton() {
  return (
    <div className="relative w-fit">
      {/* <div className="h-[40px] top-[15px]  rounded-full bg-red-700 w-full absolute "></div> */}
      <button className="btn relative z-20 text-white primarybg rounded-md hover:bg-opacity-80  transition">
        <span className="mt-1 flex items-center gap-2">
          <Icons.Gaurd />
          Verted Reviews
        </span>
      </button>
    </div>
  );
}

export default SpecialButton;
