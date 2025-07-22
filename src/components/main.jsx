import { cn } from "@/lib/utils";
import { Headbar } from "../features/header/components/headbar";

export function Main({ children, className }) {
  return (
    <>
      <Headbar />
      <main
        className={cn(
          "mx-auto mb-16 w-full max-w-6xl flex-1 px-4 py-24 sm:px-8",
          className
        )}
      >
        {children}
      </main>
    </>
  );
}
