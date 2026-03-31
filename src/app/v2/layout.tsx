import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "V2 — Component Showcase",
  description: "Landing page v2 with assembled components.",
};

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="v2-theme">{children}</div>;
}
