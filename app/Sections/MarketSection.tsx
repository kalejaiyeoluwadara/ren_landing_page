import React from "react";
import { images } from "@/public/images";
import { Icons } from "../components/icons";
import Badge from "../components/shared/Badge";
import ReviewCard from "../components/shared/ReviewCard";
import Image from "next/image";
function MarketSection() {
  return (
    <div className="section-padding w-full flex items-start flex-col py-12">
      <section className="flex w-full justify-between items-center">
        <div>
          <Badge text="Customer’s" icon={<Icons.Time />} />
          <h2 className=" w-[420px]  mb-3">
            Happy customers, growing market presence
          </h2>
          <p className="text-gray-500 mb-6 w-[370px]">
            Start for free, no credit card required. Upgrade when you need a
            plan that fits your needs.
          </p>
        </div>

        {/* svg */}
        <div className="w-1/2 flex-center">
          <Image src={images.man_svg} alt="man_svg" />
        </div>
      </section>
      <div className="grid grid-cols-3 gap-6 mt-12">
        {[1, 2, 3].map((d, id) => {
          return <ReviewCard key={d} />;
        })}
      </div>
    </div>
  );
}

export default MarketSection;
