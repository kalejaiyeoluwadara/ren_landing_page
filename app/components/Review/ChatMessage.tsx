import UserAvatar from "./UserAvatar";
import { MessageSquare } from "lucide-react";
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
    <div className="flex gap-3 bg-gray-100 p-2 rounded-lg items-start mb-2">
      <UserAvatar
        platform={platform}
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
      </div>
    </div>
  );
};

export default ChatMessage;
