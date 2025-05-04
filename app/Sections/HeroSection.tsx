import React from "react";
import Button from "../components/shared/Button";
import Image from "next/image";
import { images } from "@/public/images";
import ReviewCard from "../components/shared/ReviewCard";
import SpecialButton from "../components/SpecialButton";

function HeroSection() {
  return (
    <div className="section-padding mt-26 md:mt-12 py-6 md:py-12 flex flex-col flex-center md:grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
      <section className="mt-6 md:block flex flex-col flex-center md:mt-12">
        <SpecialButton />
        <h2 className="mt-2 mb-4 mobile_center md:w-[90%]">
          Turn Conversations into Credible Reviews.
        </h2>
        <p className="mb-7 mobile_center text-gray-600">
          No apps to download. No forms to fill. Just send a Message to spark
          feedback that fuels your brand.
        </p>
        <div className="flex flex-row items-start sm:items-center gap-4">
          <Button isPrimary={true} name="Start Scaling" />
          <Button isPrimary={false} name="Sign up" />
        </div>
      </section>
      <div className="relative mt-8 md:mt-0">
        <div className="h-[400px] md:h-[580px] rounded-[20px] w-full absolute left-2 top-2 bg-[#E7E7E7]"></div>
        <section className="h-fit relative z-20 px-4 sm:px-8 md:px-12 pt-10 md:pt-20 pb-6 md:pb-10 flex flex-col items-center justify-center bg-white border border-gray-100 rounded-[20px]">
          <div className="w-full max-w-[280px] md:max-w-none">
            <Image
              src={images.trail}
              alt="image trail"
              className="w-full h-auto"
            />
          </div>
          <div className="translate-x-4 md:translate-x-10 -translate-y-4 md:-translate-y-6 w-full max-w-[280px] md:max-w-none">
            <ReviewCard />
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
