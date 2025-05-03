import { ThumbsUp } from "lucide-react";
import ReviewExample from "../components/Review/ReviewExample";
import Button from "../components/shared/Button";
export default function ReviewSharingSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto py-8 px-4">
      {/* Left review example */}
      <div className="w-full md:w-1/3">
        <ReviewExample
          reviewMessage="Superfast customer support, amazing team! 4"
          user="Michael Scott"
          time="12 Mins Ago"
          platform="telegram"
          requestMessage="Alex! We'd love to hear what you enjoyed about the Coffee Maker"
        />
      </div>

      {/* Middle CTA section */}
      <div className="w-full md:w-1/3 text-center flex flex-col items-center">
        <div className="text-red-500 mb-4">
          <ThumbsUp size={64} fill="currentColor" strokeWidth={0} />
        </div>
        <h4 className="mb-4 w-[90%] !text-3xl !leading-10">
          Share your Reviews with one click
        </h4>
        <p className=" mb-6">
          Start for free, no credit card required. Upgrade when you need a plan
          that fits your needs.
        </p>
        <Button isPrimary={true} name="Start Today" />
      </div>

      {/* Right review example */}
      <div className="w-full md:w-1/3">
        <ReviewExample
          user="Sharon Obanigyor"
          time="20 Mins Ago"
          platform="whatsapp"
          requestMessage="Alex! We'd love to hear what you enjoyed about the Coffee Maker"
          reviewMessage="Superfast customer support, amazing team! 4"
        />
      </div>
    </div>
  );
}
