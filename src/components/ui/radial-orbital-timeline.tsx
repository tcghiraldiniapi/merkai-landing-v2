"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});

  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // RAF-based rotation — direct DOM manipulation, no React re-renders
  const angleRef = useRef(0);
  const autoRotateRef = useRef(true);
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Responsive radius
  const [radius, setRadius] = useState(170);

  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 360) setRadius(100);
      else if (w < 380) setRadius(115);
      else if (w < 480) setRadius(130);
      else if (w < 768) setRadius(150);
      else setRadius(170);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const positionNodes = useCallback(() => {
    const total = timelineData.length;
    timelineData.forEach((item, index) => {
      const el = nodeRefs.current[item.id];
      if (!el) return;

      const angle = ((index / total) * 360 + angleRef.current) % 360;
      const radian = (angle * Math.PI) / 180;
      const x = radius * Math.cos(radian);
      const y = radius * Math.sin(radian);
      const zIndex = Math.round(100 + 50 * Math.cos(radian));
      const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));

      const isExpanded = expandedItems[item.id];
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.zIndex = isExpanded ? "200" : String(zIndex);
      el.style.opacity = isExpanded ? "1" : String(opacity);
    });
  }, [timelineData, radius, expandedItems]);

  // RAF loop — runs once, never causes re-render
  useEffect(() => {
    const tick = (now: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = now;
      const dt = Math.min(32, now - lastTimeRef.current);
      lastTimeRef.current = now;

      if (autoRotateRef.current) {
        angleRef.current = (angleRef.current + dt * 0.006) % 360;
        positionNodes();
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [positionNodes]);

  // Re-position when expanded items change (for z-index/opacity)
  useEffect(() => {
    positionNodes();
  }, [expandedItems, positionNodes]);

  const centerViewOnNode = useCallback((nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    angleRef.current = 270 - targetAngle;
    positionNodes();
  }, [timelineData, positionNodes]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      autoRotateRef.current = true;
    }
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        autoRotateRef.current = false;
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => { newPulseEffect[relId] = true; });
        setPulseEffect(newPulseEffect);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        autoRotateRef.current = true;
        setPulseEffect({});
      }
      return newState;
    });
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed": return "text-white bg-black border-white";
      case "in-progress": return "text-black bg-white border-black";
      case "pending": return "text-white bg-black/40 border-white/50";
      default: return "text-white bg-black/40 border-white/50";
    }
  };

  const orbitSize = radius * 2 + 20;

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px", willChange: "transform" }}
        >
          {/* Centro pulsante */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-red-900 via-red-700 to-orange-600 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-red-500/30 animate-ping opacity-70" />
            <div className="absolute w-28 h-28 rounded-full border border-red-500/15 animate-ping opacity-40" style={{ animationDelay: "0.5s" }} />
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
              <span className="text-red-400 text-xs font-bold">!</span>
            </div>
          </div>

          {/* Anel orbital — responsivo */}
          <div
            className="absolute rounded-full border border-white/8"
            style={{ width: orbitSize, height: orbitSize }}
          />

          {timelineData.map((item) => {
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute cursor-pointer"
                style={{ willChange: "transform, opacity", transition: "opacity 0.3s" }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                {/* Aura de energia */}
                <div
                  className={`absolute rounded-full ${isPulsing ? "animate-pulse" : ""}`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.4 + 40}px`,
                    height: `${item.energy * 0.4 + 40}px`,
                    left: `-${(item.energy * 0.4 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.4 + 40 - 40) / 2}px`,
                  }}
                />

                {/* Nó */}
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${isExpanded ? "bg-white text-black" : isRelated ? "bg-white/40 text-white" : "bg-black text-white"}
                  border-2
                  ${isExpanded ? "border-white shadow-lg shadow-white/20" : isRelated ? "border-white animate-pulse" : "border-white/30"}
                  transition-all duration-300
                  ${isExpanded ? "scale-150" : "hover:scale-110"}
                `}>
                  <Icon size={15} />
                </div>

                {/* Label */}
                <div className={`
                  absolute top-12 whitespace-nowrap text-center
                  text-[11px] font-semibold tracking-wide
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-110" : "text-white/60"}
                `}
                  style={{ left: "50%", transform: isExpanded ? "translateX(-50%) scale(1.1)" : "translateX(-50%)" }}
                >
                  {item.title}
                </div>

                {/* Card expandido — clampado na viewport */}
                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-[min(18rem,calc(100vw-3rem))] bg-black/95 backdrop-blur-xl border-white/20 shadow-2xl shadow-black/80 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/30" />
                    <CardHeader className="pb-2 pt-4 px-4">
                      <Badge className={`w-fit px-2 text-[10px] mb-2 ${getStatusStyles(item.status)}`}>
                        PROBLEMA ATIVO
                      </Badge>
                      <CardTitle className="text-sm font-semibold text-white leading-snug">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-white/70 px-4 pb-4 leading-relaxed">
                      <p>{item.content}</p>
                      {item.relatedIds.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-white/10">
                          <div className="flex items-center mb-2">
                            <Link size={9} className="text-white/40 mr-1" />
                            <span className="text-[10px] uppercase tracking-wider text-white/40">Relacionado a</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="h-5 px-2 py-0 text-[10px] rounded-full border-white/20 bg-transparent hover:bg-white/10 text-white/60 hover:text-white transition-all"
                                  onClick={(e) => { e.stopPropagation(); toggleItem(relatedId); }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
