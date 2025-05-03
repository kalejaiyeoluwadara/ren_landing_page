const UserAvatar = ({ initials }: { initials: string }) => {
  return (
    <div className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center font-semibold">
      {initials}
    </div>
  );
};

export default UserAvatar;
