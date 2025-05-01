import React from "react";
import { images } from "@/public/images";
import { Icons } from "../components/icons";
import Badge from "../components/shared/Badge";
import FeatureCard from "../components/shared/FeatureCard";

function MarketSection() {
  return (
    <div className="section-padding w-full flex items-start flex-col py-12">
      <Badge text="Customer’s" icon={<Icons.Time/>} />
      <h2 className=" w-[420px]  mb-3">
      Happy customers, growing market presence
      </h2>
      <p className="text-gray-500 mb-6 w-[370px]">
      Start for free, no credit card required.
      Upgrade when you need a plan that fits your needs.
      </p>
     

     
    </div>
  );
}

export default MarketSection;
