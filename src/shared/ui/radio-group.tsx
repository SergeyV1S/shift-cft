import { Check } from "lucide-react";

import { cn } from "@shared/lib";

const RadioInput = ({ className, ref, ...props }: TComponentPropsWithRef<"input">) => (
  <>
    <input ref={ref} type='radio' className={cn("hidden peer", className)} {...props} />
    <span className='absolute border cursor-pointer border-slate-400 rounded-xl bg-slate-50 size-5 left-0 flex items-center justify-center peer-checked:bg-blue-600 peer-checked:border-none'>
      <Check className='text-slate-50 size-3' />
    </span>
  </>
);

export { RadioInput };
