"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Icons } from "../icons";

interface ReviewCardProps {
  returnAll?: boolean;
}
function ReviewCard({ returnAll = false }: ReviewCardProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/reviews/1");
      }}
      className="cursor-pointer"
    >
      <section className="h-10 w-10  rounded-xl primarybg  flex-center">
        <p className="!text-white">SO</p>
      </section>
      <section className=" mt-2 mb-1">
        <h4 className="font-semibold">Sharon Obanigyor</h4>
        <p>Mar 15, 2025</p>
      </section>
      <section>
        <p>★★★★☆</p>
      </section>
      <section className="mt-3">
        <p>
          PixelPerfect lives up to its name. Their design team delivered a
          clean, responsive, and brand-consistent website ahead of schedule.
          Navigation is intuitive, load times are fast, and every element feels
          purposefully placed.
        </p>
      </section>
      {returnAll && (
        <section className="mt-6 flex gap-3">
          <div className="flex gap-1 items-center">
            <Icons.BuildingIcon /> <span>Whatsapp</span>
          </div>
          <div className="flex gap-1 items-center">
            <Icons.BuildingIcon /> <span>1,156</span>
          </div>
        </section>
      )}
    </div>
  );
}

export default ReviewCard;
