import React from "react";

import { cn } from "@/lib/utils";

export interface LabelProps extends React.ComponentPropsWithoutRef<"label"> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <label
        ref={forwardedRef}
        className={cn(
          "text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:text-gray-600 peer-disabled:opacity-75",
          className
        )}
        {...props}
      >
        {children}
      </label>
    );
  }
);

export { Label };
