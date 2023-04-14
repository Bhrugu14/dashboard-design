import React from "react";

interface ButtonProps {
  onClick: (e: any) => void;
  title: string;
  iconRight?: any;
  iconLeft?: any;
  disabled?: boolean;
  id?: string;
  secondary?: boolean;
  extraClass?: string;
  white?: boolean;
}

export const Button = ({
  title,
  iconLeft,
  iconRight,
  disabled,
  onClick,
  id,
  secondary,
  extraClass,
  white,
}: ButtonProps) => {
  let backgroundColor = white
    ? "bg-primaryBg"
    : secondary
    ? "bg-gray-300"
    : "bg-black";

  let buttonText = white
    ? "text-primary"
    : secondary
    ? "text-slate-700"
    : "text-white";

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`${backgroundColor} py-1 w-full rounded-md ${
        disabled ? "pointer-events-none opacity-60" : "shadow-xl"
      } flex justify-center active:scale-95 ${extraClass || ""}`}
    >
      <div className="flex items-center h-full">
        {iconLeft && (
          <img src={iconLeft} className="h-6 w-6 object-contain ml-2" alt="i" />
        )}
        <label
          className={`z-0 font-semibold text-xs cursor-pointer px-2 ${buttonText}`}
        >
          {title}
        </label>
        {iconRight && (
          <img
            src={iconRight}
            className="h-6 w-6 object-contain ml-2"
            alt="i"
          />
        )}
      </div>
    </button>
  );
};
