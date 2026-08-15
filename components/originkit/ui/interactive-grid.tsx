"use client";

import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

export interface SkillItem {
  name: string;
}

const DEFAULTS = {
  padding: "10px 0px",
  columns: 5,
  gap: 10,
  rounded: 8,
  cardFill: "#0f172a66", // slate-900/40
  cardBorder: "#1e293b", // slate-800
  shadow: false,
  cardShadow: "rgba(6, 182, 212, 0.4)",
  glow: true,
  glowStart: "rgba(6, 182, 212, 0.3)", // Cyan glow start
  glowEnd: "#06b6d4", // Cyan glow end
  glowIntensity: 45,
  perspective: 1000,
  rotateX: 0,
  rotateY: 0,
};

const MAX_GLOW_BLUR = 14;
const DURATION = 200;
const LEAVE_DELAY = 150;
const NS = "framer-animate-grid";

const CSS = `
.${NS}-card {
  transition: all ${DURATION}ms ease-out;
}
.${NS}-shadow {
  box-shadow:
    2px 2px 5px var(--ag-shadow),
    3px 3px 10px var(--ag-shadow);
}
.${NS}-small {
  transform: scale(1.02) translateZ(0);
}
.${NS}-big {
  transform: scale(1.06) translateZ(12px);
  border-color: rgba(6, 182, 212, 0.4) !important;
}
.${NS}-glow-big {
  animation: ${NS}-glow 1.5s ease-in-out infinite alternate;
}
.${NS}-glow-small {
  animation: ${NS}-glow-small 1.5s ease-in-out infinite alternate;
}
@keyframes ${NS}-glow {
  0%  { filter: drop-shadow(0 0 2px var(--ag-glow-start)); }
  to  { filter: drop-shadow(0 2px var(--ag-glow-blur) var(--ag-glow-end)); }
}
@keyframes ${NS}-glow-small {
  0%  { filter: drop-shadow(0 0 2px var(--ag-glow-start)); }
  to  { filter: drop-shadow(0 1px var(--ag-glow-blur-small) var(--ag-glow-start)); }
}
`;

interface InteractiveGridProps {
  items: SkillItem[];
  padding?: string;
  columns?: number;
  gap?: number;
  rounded?: number;
  cardFill?: string;
  cardBorder?: string;
  shadow?: boolean;
  cardShadow?: string;
  glow?: boolean;
  glowStart?: string;
  glowEnd?: string;
  glowIntensity?: number;
  perspective?: number;
  rotateX?: number;
  rotateY?: number;
  style?: CSSProperties;
}

interface GridCardProps {
  index: number;
  item: SkillItem;
  isBig: boolean;
  isSmall: boolean;
  shadow: boolean;
  glow: boolean;
  cardFill: string;
  cardBorder: string;
  rounded: number;
  zIndex: number;
  onEnter: (i: number) => void;
}

const GridCard = memo(function GridCard({
  index,
  item,
  isBig,
  isSmall,
  shadow,
  glow,
  cardFill,
  cardBorder,
  rounded,
  zIndex,
  onEnter,
}: GridCardProps) {
  const className = [
    `${NS}-card`,
    shadow && `${NS}-shadow`,
    isBig && `${NS}-big`,
    isSmall && `${NS}-small`,
    glow && isBig && `${NS}-glow-big`,
    glow && isSmall && `${NS}-glow-small`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      onPointerEnter={() => onEnter(index)}
      className={className}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 14px",
        background: cardFill,
        border: `1px solid ${cardBorder}`,
        borderRadius: rounded,
        boxSizing: "border-box",
        minWidth: 0,
        minHeight: "44px", // Compact height for text tiles
        overflow: "visible",
        zIndex,
        cursor: "pointer",
      }}
    >
      <span
        style={{
          color: isBig ? "#67e8f9" : "#E0E0E0", // Lights up text cyan when hovered
          fontSize: "0.875rem",
          fontWeight: 500,
          textAlign: "center",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "0.02em",
          transition: "color 200ms ease",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {item.name}
      </span>
    </div>
  );
});

export default function InteractiveGrid(props: InteractiveGridProps) {
  const {
    items = [],
    padding = DEFAULTS.padding,
    columns = DEFAULTS.columns,
    gap = DEFAULTS.gap,
    rounded = DEFAULTS.rounded,
    cardFill = DEFAULTS.cardFill,
    cardBorder = DEFAULTS.cardBorder,
    shadow = DEFAULTS.shadow,
    cardShadow = DEFAULTS.cardShadow,
    glow = DEFAULTS.glow,
    glowStart = DEFAULTS.glowStart,
    glowEnd = DEFAULTS.glowEnd,
    glowIntensity = DEFAULTS.glowIntensity,
    perspective = DEFAULTS.perspective,
    rotateX = DEFAULTS.rotateX,
    rotateY = DEFAULTS.rotateY,
    style,
  } = props;

  const cols = Math.max(1, Math.round(columns));
  const count = items.length;
  const rowCount = Math.ceil(count / cols);

  const [hovered, setHovered] = useState<number | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  const neighbours = useMemo(() => {
    if (hovered === null) return [];
    const out: number[] = [];
    if (hovered % cols !== 0) out.push(hovered - 1);
    if (hovered % cols !== cols - 1) out.push(hovered + 1);
    out.push(hovered - cols);
    out.push(hovered + cols);
    return out.filter((n) => n >= 0 && n < count);
  }, [hovered, cols, count]);

  const onEnter = useCallback((i: number) => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setHovered(i);
  }, []);

  const onLeave = useCallback(() => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setHovered(null), LEAVE_DELAY);
  }, []);

  const glowBlur = useMemo(
    () => (Math.min(100, Math.max(0, glowIntensity)) / 100) * MAX_GLOW_BLUR,
    [glowIntensity]
  );

  const gridStyle = useMemo(
    () =>
      ({
        ...style,
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding,
        boxSizing: "border-box",
        "--ag-shadow": cardShadow,
        "--ag-glow-start": glowStart,
        "--ag-glow-end": glowEnd,
        "--ag-glow-blur": `${glowBlur.toFixed(1)}px`,
        "--ag-glow-blur-small": `${(glowBlur / 2).toFixed(1)}px`,
      }) as CSSProperties,
    [style, padding, cardShadow, glowStart, glowEnd, glowBlur]
  );

  return (
    <div style={gridStyle}>
      <style>{CSS}</style>
      <div
        onPointerLeave={onLeave}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rowCount}, minmax(0, 1fr))`,
          gap,
          width: "100%",
          transform: `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {items.map((item, i) => {
          const isBig = hovered === i;
          const isSmall = !isBig && neighbours.includes(i);
          return (
            <GridCard
              key={`${item.name}-${i}`}
              index={i}
              item={item}
              isBig={isBig}
              isSmall={isSmall}
              shadow={shadow}
              glow={glow}
              cardFill={cardFill}
              cardBorder={cardBorder}
              rounded={rounded}
              zIndex={isBig ? count + 1 : i + 1}
              onEnter={onEnter}
            />
          );
        })}
      </div>
    </div>
  );
}