import React from "react";
import Badge from "../components/shared/Badge";
import { Icons } from "../components/icons";
import { images } from "@/public/images";
import FeatureCard from "../components/shared/FeatureCard";

function FeaturesSection() {
  return (
    <div className="section-padding w-full flex items-center flex-col py-12">
      <Badge text="Features for Days" icon={<Icons.Stack />} />
      <div className="w-[580px]">
        <h2 className=" text-center   mb-3">
          Powerful Features to Showcase Your Credibility
        </h2>
        <p className=" mb-8 w-[90%] mt-4 text-center">
          Manage your reviews with Ren’s tools to build trust and grow
          effortlessly .
        </p>
      </div>
      <section className="mt-12 px-20 flex items-center justify-center gap-6">
        <FeatureCard
          image={images.Ren}
          title="Ren Profile"
          description="Get a Ren Profile [renreviews.com/businessname] to automatically showcase your business details, ratings, and reviews in a single page."
          className="w-1/2"
        />
        <FeatureCard
          image={images.Mobbin}
          title="Ren Feed"
          description="Discover businesses through a social feed of real customer reviews. Reviews to build credibility and connect with potential customers."
          className="w-1/2"
        />
      </section>
    </div>
  );
}

export default FeaturesSection;
