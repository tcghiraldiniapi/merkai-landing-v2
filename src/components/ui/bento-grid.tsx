"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-3", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative p-5 rounded-2xl overflow-hidden transition-all duration-300",
            "border border-white/[0.07] bg-[#0c0c0c]",
            "hover:-translate-y-0.5 will-change-transform",
            item.colSpan === 2 ? "md:col-span-2" : "md:col-span-1",
            item.hasPersistentHover && "md:-translate-y-0.5"
          )}
        >
          {/* Dot pattern on hover */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-0 md:opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          {/* Gradient border on hover */}
          <div
            className={cn(
              "absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-white/10 to-transparent transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-0 md:opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          />

          <div className="relative flex flex-col space-y-4 h-full">
            {/* Header: icon + status */}
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.06] group-hover:bg-white/[0.09] transition-colors duration-300">
                {item.icon}
              </div>
              {item.status && (
                <span className="text-xs font-medium px-2 py-1 rounded-lg bg-white/[0.06] text-white/40 group-hover:text-white/60 transition-colors duration-300">
                  {item.status}
                </span>
              )}
            </div>

            {/* Body */}
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold text-white/90 tracking-tight text-[15px] leading-snug">
                {item.title}
                {item.meta && (
                  <span className="ml-2 text-xs text-white/25 font-normal">{item.meta}</span>
                )}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Footer: tags */}
            {item.tags && (
              <div className="flex items-center justify-between pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.05] text-white/30 tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {item.cta && (
                  <span className="text-xs text-white/20 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    {item.cta}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export { BentoGrid };
