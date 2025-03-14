import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@shared/lib";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      title_h1:
        "text-5xl max-xl:text-4xl font-bold font-inter leading-[58px] max-lg:text-4xl max-xs:text-2xl",
      title_h2: "text-2xl font-bold font-inter leading-8",
      title_h3: "text-xl font-semibold font-inter leading-6",
      paragraph12_regular: "text-sm font-normal font-inter leading-4",
      paragraph16_regular: "text-base font-normal font-roboto leading-6 opacity-50 max-md:text-sm",
      paragraph24_regular: "text-2xl font-light font-inter leading-8 opacity-50 max-xs:text-lg",
      paragraph_Smedium: "text-sm font-medium font-inter leading-5 opacity-70",
      paragraph16_medium: "text-base font-medium font-inter leading-6 max-md:text-sm",
      tabbar:
        "text-xs md:text-base font-normal font-inter text-slate-400 leading-3 hover:text-blue-500 flex items-center gap-1 flex-col duration-200 p-0"
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
