import React from 'react'


interface BadgeProps {
  icon: React.ReactNode;
  text: string;
}

function Badge({ text, icon }: BadgeProps) {
  return (
    <div className="btn_gray mb-4 flex gap-2 items-center">{icon} {text}</div>
  )
}

export default Badge
