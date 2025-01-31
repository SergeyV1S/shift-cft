import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@shared/lib";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      title_h1: "text-5xl font-bold font-inter leading-[58px] max-lg:text-4xl",
      title_h2: "text-2xl font-bold font-inter leading-8",
      title_h3: "text-xl font-semibold font-inter leading-6",
      paragraph12_regular: "text-sm font-normal font-inter leading-4",
      paragraph16_regular: "text-base font-normal font-roboto leading-6 opacity-50",
      paragraph24_regular: "text-2xl font-light font-inter leading-8 opacity-50",
      paragraph_Smedium: "text-sm font-medium font-inter leading-5 opacity-70",
      paragraph16_medium: "text-base font-medium font-inter leading-6"
    }
  },
  defaultVariants: {
    variant: "title_h1"
  }
});

type TTypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export interface ITypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  tag?: TTypographyTag;
  asChild?: boolean;
  children: React.ReactNode;
}

export const Typography = ({
  tag = "p",
  variant,
  asChild,
  children,
  className,
  ...props
}: ITypographyProps) => {
  const Component = asChild ? Slot : tag;

  return (
    <Component className={cn(typographyVariants({ variant }), className)} {...props}>
      {children}
    </Component>
  );
};
