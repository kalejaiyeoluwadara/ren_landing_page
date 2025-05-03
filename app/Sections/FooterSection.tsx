import { useState } from "react";
import { MessageSquare, ThumbsUp } from "lucide-react";

// Component for user avatar
const UserAvatar = ({ initials }: { initials: string }) => {
  return (
    <div className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center font-semibold">
      {initials}
    </div>
  );
};

// Component for chat message
const ChatMessage = ({
  sender,
  message,
  time,
  platform,
}: {
  sender: string;
  message: string;
  time: string;
  platform: string;
}) => {
  return (
    <div className="flex gap-3 items-start mb-2">
      <UserAvatar
        initials={sender
          .split(" ")
          .map((word) => word[0])
          .join("")}
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-medium">{sender}</span>
          <span className="text-gray-500 text-sm">{time}</span>
        </div>
        <p className="text-gray-700">{message}</p>
        {platform === "telegram" && (
          <MessageSquare size={16} className="text-blue-500 mt-1" />
        )}
        {platform === "whatsapp" && (
          <div className="text-green-500 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

// Component for review message
const ReviewMessage = ({ message }: { message: string }) => {
  return (
    <div className="bg-red-50 rounded-lg p-3 mt-2 mb-4">
      <p className="text-gray-800">{message}</p>
    </div>
  );
};

// Component for individual review example
const ReviewExample = ({
  user,
  time,
  platform,
  requestMessage,
  reviewMessage,
}: {
  user: string;
  time: string;
  platform: string;
  requestMessage: string;
  reviewMessage: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <ChatMessage
        sender={user}
        message="The automation for sharing feedback to X is a big..."
        time={time}
        platform={platform}
      />
      <div className="ml-12">
        <div className="text-gray-500 my-2">Ren</div>
        <ReviewMessage message={requestMessage} />
        <div className="text-gray-800">{user.split(" ")[0]}</div>
        <div className="bg-red-500 text-white p-3 rounded-lg mt-1 mb-4">
          <p>Superfast customer support, amazing team! 4</p>
        </div>
        <div className="text-gray-500 my-2">Ren</div>
        <ReviewMessage message={requestMessage} />
      </div>
    </div>
  );
};

// Main component
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
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Share your Reviews with one click
        </h2>
        <p className="text-gray-600 mb-6">
          Start for free, no credit card required. Upgrade when you need a plan
          that fits your needs.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-full transition-colors">
          Start Today
        </button>
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
