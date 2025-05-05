import React from "react";

interface ButtonProps {
  name: string;
  onClick?: () => void;
  isPrimary: boolean;
}
function Button({ onClick, name, isPrimary }: ButtonProps) {
  return (
    <button
      className={`btn !font-light ${
        isPrimary ? "text-white primarybg " : "btn_gray"
      } `}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
