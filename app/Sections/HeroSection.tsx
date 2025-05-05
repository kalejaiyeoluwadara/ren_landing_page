import React from "react";
import Button from "../components/shared/Button";
import Image from "next/image";
import { images } from "@/public/images";
import ReviewCard from "../components/shared/ReviewCard";
import SpecialButton from "../components/SpecialButton";

function HeroSection() {
  return (
    <div className="section-padding mt-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      <section className="mt-12 md:block flex flex-col items-center justify-center">
        <SpecialButton />
        <h2 className=" mt-2 mb-4 mobile_center  md:w-[90%]">
          Turn Conversations into Credible Reviews.
        </h2>
        <p className="mb-7 mobile_center">
          No apps to download. No forms to fill. Just send a Message to spark
          feedback that fuels your brand.
        </p>
        <div className="flex items-center gap-4">
          <Button isPrimary={true} name="Start Scaling" />
          <Button isPrimary={false} name="Sign up" />
        </div>
      </section>
      <div className="relative">
        <div className="md:h-[580px] h-[505px] rounded-[20px] w-full absolute left-2 top-2 bg-[#E7E7E7] "></div>
        <section className="h-fit relative z-20 px-12 pt-20 pb-10 flex flex-col items-center justify-center bg-white border border-gray-100 rounded-[20px]">
          <Image src={images.trail} alt="image trail" />
          <div className=" translate-x-0 md:translate-x-10 -translate-y-6">
            <ReviewCard />
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
