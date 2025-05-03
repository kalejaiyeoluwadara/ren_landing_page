import ChatMessage from "./ChatMessage";
import ReviewMessage from "./ReviewMessage";
const ReviewExample = ({
  user,
  time,
  platform,
  requestMessage,
}: {
  user: string;
  time: string;
  platform: string;
  requestMessage: string;
  reviewMessage: string;
}) => {
  return (
    <div className="bg-white  p-4 mb-4">
      <ChatMessage
        sender={user}
        message="The automation for sharing feedback to X is a big..."
        time={time}
        platform={platform}
      />
      <div className="">
        <div className="ml-12">
          <div className="text-gray-500 ml-3 mt-2">Ren</div>
          <ReviewMessage message={requestMessage} />
        </div>
        <div className="text-gray-800 ml-3">{user.split(" ")[0]}</div>
        <div className="bg-red-500 text-white p-3 rounded-xl mb-4">
          <span>Superfast customer support, amazing team! 4</span>
        </div>
        <div className="ml-12">
          <div className="text-gray-500 ml-3 mt-2">Ren</div>
          <ReviewMessage message={requestMessage} />
        </div>
      </div>
    </div>
  );
};

export default ReviewExample;
