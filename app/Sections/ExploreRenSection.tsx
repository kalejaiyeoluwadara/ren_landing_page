import React from "react";
import { images } from "@/public/images";
import { Icons } from "../components/icons";
import Badge from "../components/shared/Badge";
import FeatureCard from "../components/shared/FeatureCard";

function ExploreRenSection() {
  return (
    <div className="section-padding w-full flex items-start flex-col py-12">
      <Badge text="Supercharged Reviews" icon={<Icons.Charge/>} />
      <h1 className="text-4xl w-[420px] font-bold mb-3">
        Ren is built for Scaling Businesses
      </h1>
      <p className="text-gray-500 mb-6 w-[370px]">
        Ren helps businesses collect, manage, and activate authentic feedback at
        scale.
      </p>
      <button className="btn bg-black text-white">Explore the Platfrom</button>

      <section className="grid mt-12 grid-cols-3 gap-5">
        <FeatureCard
          image={images.explore1}
          title="Real Conversations, Real Feedback"
          description="Personalized Message review requests Reach customers where they feel most comfortable"
        />
        <FeatureCard
          image={images.explore2}
          title="Instant Integration, Instant Insights"
          description="Ren collects and analyses responses in real-time, delivering actionable insights."
          className="pt-20"
        />
        <FeatureCard
          image={images.explore3}
          title="Real Conversations, Real Feedback"
          description="Personalized Message review requests Reach customers where they feel most comfortable"
        />
      </section>
    </div>
  );
}

export default ExploreRenSection;
