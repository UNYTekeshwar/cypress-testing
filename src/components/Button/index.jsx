import React from "react";
import "./CustomButton.scss";

const CustomButton = ({
  type = "default",
  size = "medium",
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={`btn btn-${type} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
