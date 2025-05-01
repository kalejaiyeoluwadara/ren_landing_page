import React from "react";
import Image from "next/image";
import { images } from "@/public/images";
import { Icons } from "../components/icons";
import Badge from "../components/shared/Badge";
function ExploreRenSection() {
  return (
    <div className="section-padding w-full flex items-start flex-col py-12">
      <Badge text="Supercharged Reviews" icon={<Icons.Lock/>} />
      <h1 className="text-4xl w-[420px] font-bold mb-3">
        Ren is built for Scaling Businesses
      </h1>
      <p className="text-gray-500 mb-6 w-[370px]">
        Ren helps businesses collect, manage, and activate authentic feedback at
        scale.
      </p>
      <button className="btn bg-black text-white">Explore the Platfrom</button>

      <section className="grid mt-12 grid-cols-3 gap-5">
        <div className="border border-gray-200 flex justify-between items-center flex-col rounded-[20px] px-8 pb-4 pt-12">
          <Image src={images.explore1}  alt="Ren Logo" />
          <div className="mt-8">
            <h3 className="mb-2">
              Real Conversations, Real Feedback
            </h3>
            <p>
              Personalized Message review requests Reach customers where they
              feel most comfortable
            </p>
          </div>
        </div>
        <div className="border border-gray-200 flex justify-between  items-center flex-col rounded-[20px] px-8 pb-4 pt-20">
          <Image src={images.explore2}  alt="Ren Logo" />
          <div className="mt-8 mb-7">
            <h3 className="mb-2">
            Instant Integration, Instant Insights
            </h3>
            <p>
            Ren collects and analyses responses in real-time, delivering actionable insights.
            </p>
          </div>
        </div>
       
        <div className="border border-gray-200 flex flex-col justify-between rounded-[20px] px-8 pb-4 pt-12">
          <Image src={images.explore3}  alt="Ren Logo" />
          <div className="mt-8 mb-2">
            <h3 className="mb-2">
              Real Conversations, Real Feedback
            </h3>
            <p>
              Personalized Message review requests Reach customers where they
              feel most comfortable
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExploreRenSection;
