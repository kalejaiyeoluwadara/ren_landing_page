import { Icons } from "../icons";

const UserAvatar = ({
  initials,
  platform,
}: {
  initials: string;
  platform: string;
}) => {
  return (
    <div className="w-fit px-3 py-3 rounded-xl bg-red-500 text-white flex items-center relative justify-center font-semibold">
      {initials}
      <section className="absolute -right-2 -bottom-2">
        {platform === "telegram" && <Icons.Telegram />}
        {platform === "whatsapp" && <Icons.Whatsapp />}
      </section>
    </div>
  );
};

export default UserAvatar;
