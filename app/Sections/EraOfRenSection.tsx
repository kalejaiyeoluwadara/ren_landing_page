import React from "react";
import { Icons } from "../components/icons";
import Badge from "../components/shared/Badge";

function EraOfRenSection() {
  return (
    <main className="w-full md:px-0 px-6 flex-center py-12">
      <div>
        <Badge text="Scale Efficiently" icon={<Icons.Scale />} />
        <h2 className=" mb-3">Era of Ren</h2>
        <p className=" mb-6 md:w-[370px]">
          Ren transforms feedback into trust, growth, and success for your
          business.
        </p>
        <div className="md:w-[700px] w-full h-[450px] rounded-[20px] flex-center  bg-gray-200">
          <button className="btn bg-[#F22F46] text-white">Play</button>
        </div>
      </div>
    </main>
  );
}

export default EraOfRenSection;
