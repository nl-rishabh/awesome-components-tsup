import React from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <button
        ref={forwardedRef}
        className={cn(
          "flex items-center justify-center rounded-md bg-red-600 px-4 py-3 text-base text-white",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export { Button };
