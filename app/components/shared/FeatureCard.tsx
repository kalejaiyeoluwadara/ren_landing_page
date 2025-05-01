import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface FeatureCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`border h-[470px] border-gray-200 flex justify-between items-center flex-col rounded-[20px] px-8 pb-8 pt-12 ${className}`}>
      <div className="px-12">
        <Image src={image} alt={title} />
      </div>
      <div className="mt-8">
        <h3 className="mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard; 