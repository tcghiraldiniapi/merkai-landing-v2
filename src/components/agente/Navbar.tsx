"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { BrandName } from "@/components/agente/BrandName";
import { openDiagnosticForm } from "@/lib/open-diagnostic-form";

const menuItems = [
  { name: "Problema", href: "#problema" },
  { name: "Solução", href: "#solucao" },
  { name: "Benefícios", href: "#beneficios" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav data-state={menuState && "active"} className="fixed z-40 w-full px-2 group">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl rounded-2xl border border-white/20 px-6 transition-all duration-300 lg:px-12",
            isScrolled && "max-w-5xl border-white/25 bg-black/45 backdrop-blur-xl lg:px-6",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="#" aria-label="home" className="flex items-center space-x-2">
                <BrandName className="text-lg font-semibold tracking-tight text-white" />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Fechar menu" : "Abrir menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-white"
              >
                <Menu className="group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-white/55 transition-colors duration-150 hover:text-white"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Overlay para fechar menu mobile */}
            {menuState && (
              <div
                className="fixed inset-0 z-[-1] lg:hidden"
                onClick={() => setMenuState(false)}
              />
            )}

            <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-6 rounded-2xl border border-white/[0.08] bg-black/90 backdrop-blur-xl p-5 shadow-2xl shadow-black/25 group-data-[state=active]:block lg:mb-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none lg:rounded-none">
              <div className="lg:hidden">
                <ul className="space-y-1 text-base">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="block min-h-11 py-2.5 text-white/70 transition-colors duration-150 hover:text-white"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {
                  setMenuState(false);
                  openDiagnosticForm();
                }}
                className="inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white transition-all active:scale-95 lg:w-auto tracking-[0.03em]"
              style={{
                background: "linear-gradient(135deg, #c45008 0%, #ff731c 100%)",
                boxShadow: "0 0 20px rgba(255,115,28,0.3)",
              }}
              >
                Agendar Diagnóstico
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
