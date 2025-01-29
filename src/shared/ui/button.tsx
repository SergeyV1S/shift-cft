import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        contained_primary:
          "bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-600 focus:border focus:border-slate-100 disabled:opacity-60",
        text_primary:
          "text-blue-500 bg-transparent hover:bg-blue-100 hover:text-blue-700 focus:text-blue-600 focus:border focus:border-slate-100 disabled:opacity-60",
        link_primary:
          "text-blue-500 px-0 w-fit no-underline relative before:content-[''] before:bottom-[2px] before:transition-all before:duration-200 before:left-0 before:absolute before:rounded-xl before:w-0 before:h-[2px] before:bg-blue-500 focus:before:bg-blue-600 focus:text-blue-600 hover:text-blue-800 hover:before:bg-blue-800 hover:before:w-full disabled:opacity-60",
        outline_secondary:
          "text-slate-700 bg-transparent border border-slate-200 hover:bg-slate-100 hover:border-slate-300 disabled:opacity-60",
        contained_secondary:
          "text-slate-700 bg-transparent hover:slate-100 hover:text-slate-600 focus:text-slate-600 disabled:opacity-60",
        link_secondary:
          "text-slate-700 px-0 no-underline relative inline-block before:content-[''] before:bottom-[2px] before:transition-all before:duration-200 before:left-0 before:absolute before:rounded-xl before:w-0 before:h-[2px] before:bg-slate-700 before:inline-block focus:before:bg-slate-600 focus:text-slate-600 hover:text-slate-800 hover:before:bg-slate-800 hover:before:w-full disabled:opacity-60"
      },
      size: {
        default: "h-9 py-2 px-4 space-x-2 rounded-lg",
        xs: "h-6 rounded-md text-xs",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 py-4 px-8 space-x-2 rounded-2xl",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "contained_primary",
      size: "default"
    }
  }
);

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

const Button = ({ className, variant, ref, size, asChild = false, ...props }: IButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
};

Button.displayName = "Button";

export { Button, buttonVariants };
