import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface FeatureCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  className?: string;
  imageClassName?: string;
  textClassName?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
  className = "",
  imageClassName = "",
  textClassName = "",
}) => {
  return (
    <div
      className={`border h-[470px] border-gray-200 flex justify-between items-center flex-col rounded-[20px] px-6 md:px-8 pb-8 pt-12 ${className}`}
    >
      <div className=" px-3 md:px-4">
        <Image src={image} className={`${imageClassName}`} alt={title} />
      </div>
      <div className={`${textClassName}`}>
        <h3 className="mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
