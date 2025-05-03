import React from "react";
import { Icons } from "../components/icons";
import Badge from "../components/shared/Badge";

function EraOfRenSection() {
  return (
    <main className="w-full flex-center py-12">
      <div>
        <Badge text="Scale Efficiently" icon={<Icons.Scale />} />
        <h2 className=" mb-3">Era of Ren</h2>
        <p className=" mb-6 w-[370px]">
          Ren transforms feedback into trust, growth, and success for your
          business.
        </p>
        <div className="w-[700px] h-[450px] rounded-[20px] flex-center  bg-gray-200">
          <button className="btn bg-[#F22F46] text-white">Play</button>
        </div>
      </div>
    </main>
  );
}

export default EraOfRenSection;
