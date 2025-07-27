import { cn } from "@/lib/utils";
import { Headbar } from "../features/header/components/headbar";

export function Main({ children, className }) {
  return (
    <>
      <Headbar />
      <main
        className={cn(
          "mx-auto w-full max-w-7xl flex-1 px-4 sm:px-8",
          className
        )}
      >
        {children}
      </main>
    </>
  );
}
