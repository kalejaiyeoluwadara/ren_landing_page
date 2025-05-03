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

export default ChatMessage;
