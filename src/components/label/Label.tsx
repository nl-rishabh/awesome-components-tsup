import React from "react";

export interface LabelProps extends React.ComponentPropsWithoutRef<"label"> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <label
        ref={forwardedRef}
        className="text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:text-gray-600 peer-disabled:opacity-75"
        {...props}
      >
        Label
      </label>
    );
  }
);

export { Label };
