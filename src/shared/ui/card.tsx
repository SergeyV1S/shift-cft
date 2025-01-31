import { cn } from "@shared/lib";

const Card = ({ className, ref, ...props }: THTMLElementPropsWithRef<HTMLDivElement>) => (
  <div ref={ref} className={cn("rounded-3xl bg-white shadow-md", className)} {...props} />
);
Card.displayName = "Card";

const CardHeader = ({ className, ref, ...props }: THTMLElementPropsWithRef<HTMLDivElement>) => (
  <div ref={ref} className={cn("flex flex-col text-center space-y-1.5", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({
  className,
  ref,
  ...props
}: THTMLElementPropsWithRef<HTMLParagraphElement>) => (
  <h3 ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({
  className,
  ref,
  ...props
}: THTMLElementPropsWithRef<HTMLParagraphElement>) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
);
CardDescription.displayName = "CardDescription";

const CardContent = ({ className, ref, ...props }: THTMLElementPropsWithRef<HTMLDivElement>) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
);
CardContent.displayName = "CardContent";

const CardFooter = ({ className, ref, ...props }: THTMLElementPropsWithRef<HTMLDivElement>) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
