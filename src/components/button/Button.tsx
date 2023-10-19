import React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <button
        ref={forwardedRef}
        className="flex items-center justify-center px-4 py-3 text-base text-white bg-red-600 rounded-md"
        {...props}
      >
        {children}
      </button>
    );
  }
);

export { Button };
