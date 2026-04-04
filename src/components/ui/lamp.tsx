"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampContainer({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-0 w-full flex-col items-center justify-center overflow-hidden rounded-md bg-transparent z-0",
        className,
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.35, width: "14rem" }}
          whileInView={{ opacity: 0.7, width: "26rem" }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at center top, #34C0D0, transparent, transparent)",
          }}
          className="absolute inset-auto right-1/2 h-56 w-[26rem] overflow-visible [filter:saturate(0.9)]"
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-black [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.35, width: "14rem" }}
          whileInView={{ opacity: 0.7, width: "26rem" }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at center top, transparent, transparent, #34C0D0)",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[26rem] [filter:saturate(0.9)]"
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-black [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div
          className="absolute inset-auto z-50 h-32 w-[24rem] -translate-y-1/2 rounded-full opacity-25 blur-3xl"
          style={{ backgroundColor: "#34C0D0" }}
        />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "14rem" }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-28 w-56 -translate-y-[5rem] rounded-full opacity-18 blur-2xl"
          style={{ backgroundColor: "#34C0D0" }}
        />
        <motion.div
          initial={{ width: "14rem" }}
          whileInView={{ width: "26rem" }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-px w-[26rem] -translate-y-[6.25rem]"
          style={{ backgroundColor: "#34C0D0" }}
        />

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black" />
      </div>

      {children ? (
        <div className="relative z-50 flex -translate-y-44 flex-col items-center px-5">
          {children}
        </div>
      ) : null}
    </div>
  );
}
