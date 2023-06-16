"use client";
import Image from "next/image";

function CustomButton({
  title,
  type,
  onClick,
  containerStyles,
  textStyles,
  rightIcon,
}: ICustomButton) {
  return (
    <button
      type={type || "button"}
      className={`custom-btn ${containerStyles || ""}`}
      onClick={onClick}
    >
      <span className={`flex-1 ${textStyles || ""}`}>{title}</span>
      {rightIcon ? (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      ) : null}
    </button>
  );
}

export default CustomButton;
