import React from "react";
import Button from "../components/shared/Button";
import Image from "next/image";
import { images } from "@/public/images";
import ReviewCard from "../components/shared/ReviewCard";

function HeroSection() {
  return (
    <div className="section-padding py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      <section className="mt-12">
        <button className="btn text-white primarybg rounded-md hover:bg-opacity-80 transition">
          Verted Reviews
        </button>
        <h2 className=" mt-2 mb-4  md:w-[90%]">
          Turn Conversations into Credible Reviews.
        </h2>
        <p className="mb-7">
          No apps to download. No forms to fill. Just send a Message to spark
          feedback that fuels your brand.
        </p>
        <div className="flex items-center gap-4">
          <Button isPrimary={true} name="Start Scaling" />
          <Button isPrimary={false} name="Sign up" />
        </div>
      </section>
      <section className="h-fit px-12 pt-20 pb-10 flex flex-col items-center justify-center bg-white border border-gray-100 rounded-[20px]">
        <Image src={images.trail} alt="image trail" />
        <div className=" translate-x-10 -translate-y-6">
          <ReviewCard />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
