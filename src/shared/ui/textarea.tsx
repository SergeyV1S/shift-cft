import { cn } from "@shared/lib";

const Textarea = ({ className, ref, ...props }: TComponentPropsWithRef<"textarea">) => (
  <textarea
    className={cn(
      "flex  min-h-12 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      className
    )}
    ref={ref}
    {...props}
  />
);
Textarea.displayName = "Textarea";

export { Textarea };
