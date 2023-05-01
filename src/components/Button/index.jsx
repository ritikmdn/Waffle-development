import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder10: "rounded-[10px]" };
const variants = {
  FillBluegray80026: "bg-bluegray_800_26 text-bluegray_801",
  FillOrangeA100: "bg-orange_A100 text-black_900",
  FillRed40026: "bg-red_400_26 text-red_300",
};
const sizes = { sm: "p-2", md: "p-3", lg: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf([
    "FillBluegray80026",
    "FillOrangeA100",
    "FillRed40026",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
