import { cn } from "@/lib/utils"

function Skeleton({
  classNameName,
  ...props
}) {
  return (
    (<div
      classNameName={cn("animate-pulse rounded-md bg-primary/10", classNameName)}
      {...props} />)
  );
}

export { Skeleton }
