import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, ...props }, ref) => {
    if (asChild) {
      // If asChild is true, render children directly without ref
      return <>{props.children}</>;
    }
    return (
      <button
        className="bg-amber-400 hover:shadow-lg  text-black px-4 py-2 rounded-2xl hover:bg-amber-300 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-amber-300/50"
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
