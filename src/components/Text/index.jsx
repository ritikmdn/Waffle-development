import React from "react";

const variantClasses = {
  h1: "font-medium sm:text-5xl md:text-5xl text-[80px]",
  h2: "font-medium sm:text-5xl md:text-5xl text-[75px]",
  h3: "font-normal sm:text-5xl md:text-5xl text-6xl",
  h4: "font-normal md:text-3xl sm:text-[28px] text-[32px]",
  h5: "font-bold sm:text-2xl md:text-[26px] text-[28px]",
  h6: "font-bold sm:text-[21px] md:text-[23px] text-[25px]",
  body1: "text-2xl md:text-[22px] sm:text-xl",
  body2: "font-bold text-lg",
  body3: "text-base",
  body4: "font-normal text-sm",
  body5: "font-normal sm:text-5xl md:text-5xl text-[100px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
