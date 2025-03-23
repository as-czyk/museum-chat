import { Loader2 } from "lucide-react";

export const Spinner = () => {
  return (
    <div className="flex h-full items-center justify-center bg-background/80">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
};
