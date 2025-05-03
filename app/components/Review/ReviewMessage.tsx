// Component for review message
const ReviewMessage = ({ message }: { message: string }) => {
  return (
    <div className="gray100 rounded-xl p-3  mb-4">
      <p className="text-gray-800 text-sm">{message}</p>
    </div>
  );
};

export default ReviewMessage;
