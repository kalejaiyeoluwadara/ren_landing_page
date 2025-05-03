import React from "react";

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
}

function Badge({ text, icon }: BadgeProps) {
  return (
    <div className="btn_gray  w-fit mb-4 flex gap-2 items-center">
      {icon} <span className="AnonymousPro">{text}</span>
    </div>
  );
}

export default Badge;
