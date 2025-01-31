import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@shared/lib";

const Progress = ({
  className,
  value,
  ref,
  ...props
}: TComponentPropsWithRef<typeof ProgressPrimitive.Root>) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-[5px] w-full overflow-hidden rounded-full bg-slate-300", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className='h-full w-full flex-1 bg-green-500 transition-all'
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
