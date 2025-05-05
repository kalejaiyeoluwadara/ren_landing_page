import React from "react";
import { images } from "@/public/images";
import { Icons } from "../components/icons";
import Badge from "../components/shared/Badge";
import FeatureCard from "../components/shared/FeatureCard";

function ExploreRenSection() {
  return (
    <div className="section-padding w-full flex items-start flex-col py-12">
      <Badge text="Supercharged Reviews" icon={<Icons.Charge />} />
      <h2 className=" md:w-[420px] w-[90%]  mb-3">
        Ren is built for Scaling Businesses
      </h2>
      <p className="text-gray-500 mb-6 w-[370px]">
        Ren helps businesses collect, manage, and activate authentic feedback at
        scale.
      </p>
      <button className="btn bg-black text-white">Explore the Platfrom</button>

      <section className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-5">
        <FeatureCard
          image={images.Cycle}
          title="Real Conversations, Real Feedback"
          description="Personalized Message review requests Reach customers where they feel most comfortable"
        />
        <FeatureCard
          image={images.explore2}
          title="Instant Integration, Instant Insights"
          description="Ren collects and analyses responses in real-time, delivering actionable insights."
          className="pt-20"
          textClassName="-translate-y-6"
        />
        <FeatureCard
          image={images.AI_analysis}
          title="Real Conversations, Real Feedback"
          description="Personalized Message review requests Reach customers where they feel most comfortable"
          className="relative overflow-hidden"
          imageClassName="absolute top-10 -right-2"
        />
      </section>
    </div>
  );
}

export default ExploreRenSection;
