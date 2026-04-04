import { cn } from "@/lib/utils";

type SectionSideLightsProps = {
  className?: string;
  reverse?: boolean;
};

export function SectionSideLights({
  className,
  reverse = false,
}: SectionSideLightsProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className={cn(
          "absolute top-[6%] h-[32rem] w-[28rem] rounded-full blur-3xl",
          reverse ? "right-[-12rem]" : "left-[-12rem]",
        )}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.09) 34%, rgba(255,255,255,0) 74%)",
        }}
      />
      <div
        className={cn(
          "absolute bottom-[6%] h-[34rem] w-[30rem] rounded-full blur-3xl",
          reverse ? "left-[-13rem]" : "right-[-13rem]",
        )}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.07) 38%, rgba(255,255,255,0) 78%)",
        }}
      />
      <div
        className={cn(
          "absolute top-[16%] h-[20rem] w-[10rem] blur-2xl",
          reverse ? "right-[2%]" : "left-[2%]",
        )}
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.14), rgba(255,255,255,0))",
        }}
      />
    </div>
  );
}
