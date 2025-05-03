// Component for review message
const ReviewMessage = ({ message }: { message: string }) => {
  return (
    <div className="bg-red-50 rounded-lg p-3 mt-2 mb-4">
      <p className="text-gray-800">{message}</p>
    </div>
  );
};

export default ReviewMessage;
