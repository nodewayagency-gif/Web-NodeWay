import Link from "next/link";
import { cityHubs, presenceStatusLabels, type PresenceStatus } from "@/lib/seo-data";

/**
 * Mapa do Brasil em pontos, com as cidades onde a Nodeway atende.
 * Contorno simplificado (lon, lat) desenhado à mão: serve para um mapa
 * ilustrativo, não para precisão cartográfica.
 */
const outline: [number, number][] = [
  [-73.8, -7.3], [-72.9, -5.2], [-70.5, -4.3], [-69.9, -4.2], [-69.4, -1.1], [-69.8, 1.7],
  [-67.8, 2.0], [-66.9, 1.2], [-64.0, 2.0], [-63.4, 3.9], [-62.7, 4.0], [-61.0, 4.5],
  [-60.6, 5.2], [-59.8, 4.0], [-59.5, 2.4], [-58.8, 1.3], [-56.5, 1.9], [-54.6, 2.3],
  [-52.9, 2.2], [-51.6, 4.2], [-51.0, 3.9], [-50.0, 1.8], [-49.9, 0.0], [-48.5, -1.0],
  [-46.0, -1.0], [-44.3, -2.5], [-41.8, -2.9], [-38.5, -3.7], [-35.2, -5.4], [-34.8, -7.1],
  [-35.0, -8.9], [-37.0, -11.0], [-38.5, -13.0], [-39.0, -16.0], [-39.7, -19.5], [-40.3, -20.3],
  [-41.0, -22.0], [-42.0, -23.0], [-43.2, -23.0], [-45.4, -23.8], [-46.3, -24.0], [-48.0, -25.3],
  [-48.6, -26.5], [-48.6, -28.5], [-49.7, -29.4], [-50.6, -31.0], [-52.1, -32.2], [-53.4, -33.7],
  [-53.1, -32.6], [-53.7, -32.0], [-55.6, -30.9], [-56.0, -30.1], [-57.6, -30.2], [-56.0, -28.2],
  [-55.0, -27.3], [-53.8, -27.1], [-53.6, -26.2], [-54.6, -25.6], [-54.3, -24.0], [-55.4, -23.9],
  [-55.7, -22.6], [-57.8, -22.1], [-58.1, -20.2], [-57.7, -19.0], [-58.2, -17.4], [-58.4, -16.3],
  [-60.2, -16.3], [-60.0, -13.6], [-61.8, -13.5], [-64.4, -12.4], [-65.4, -10.9], [-66.6, -9.9],
  [-68.7, -11.0], [-70.6, -11.0], [-70.6, -9.5], [-72.2, -10.0], [-73.2, -9.4],
];

/** Coordenadas aproximadas e posição do rótulo de cada cidade. */
const pins: Record<string, { lon: number; lat: number; label: "left" | "right" | "top" | "bottom" | "bottomLeft" }> = {
  cascavel: { lon: -53.46, lat: -24.96, label: "bottomLeft" },
  // Toledo fica a 40 km de Cascavel: o pino é afastado um pouco para não sumir atrás da sede.
  toledo: { lon: -54.7, lat: -24.2, label: "top" },
  blumenau: { lon: -49.07, lat: -26.92, label: "right" },
  curitiba: { lon: -49.27, lat: -25.43, label: "right" },
  guanambi: { lon: -42.78, lat: -14.22, label: "right" },
};

const SCALE = 10;
const LON0 = -75;
const LAT0 = 6.5;
const KX = Math.cos((15 * Math.PI) / 180); // correção de largura na latitude média do país
const project = (lon: number, lat: number): [number, number] => [(lon - LON0) * SCALE * KX, (LAT0 - lat) * SCALE];

const W = Math.ceil(42 * SCALE * KX);
const H = 42 * SCALE;

const polygon = outline.map(([lon, lat]) => project(lon, lat));

function inside([x, y]: [number, number]) {
  let hit = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

const STEP = 8;
const dots: [number, number][] = [];
for (let y = STEP / 2; y < H; y += STEP) {
  for (let x = STEP / 2; x < W; x += STEP) {
    if (inside([x, y])) dots.push([x, y]);
  }
}

const outlinePath = "M" + polygon.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join("L") + "Z";

const color: Record<PresenceStatus, string> = {
  sede: "#22d3ee",
  cliente_ativo: "#34d399",
  em_expansao: "#a78bfa",
  nacional: "#94a3b8",
};

export function BrazilMap() {
  const cities = cityHubs.filter((c) => pins[c.slug]);
  const hq = project(pins.cascavel.lon, pins.cascavel.lat);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      role="img"
      aria-label="Mapa do Brasil com as cidades onde a Nodeway atende"
    >
      <defs>
        <linearGradient id="map-arc" x1="0" x2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>

      <path d={outlinePath} fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.2" strokeLinejoin="round" />
      <g fill="currentColor" fillOpacity="0.22">
        {dots.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.9} />
        ))}
      </g>

      {/* Linhas saindo da sede */}
      {cities
        .filter((c) => c.slug !== "cascavel")
        .map((c, i) => {
          const [x, y] = project(pins[c.slug].lon, pins[c.slug].lat);
          const mx = (hq[0] + x) / 2;
          const my = Math.min(hq[1], y) - Math.max(20, Math.hypot(x - hq[0], y - hq[1]) * 0.35);
          const dashed = c.presenceStatus === "em_expansao";
          return (
            <path
              key={c.slug}
              d={`M${hq[0]},${hq[1]} Q${mx},${my} ${x},${y}`}
              fill="none"
              stroke={dashed ? color.em_expansao : "url(#map-arc)"}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeDasharray={dashed ? "3 4" : "6 6"}
              opacity="0.85"
            >
              <animate attributeName="stroke-dashoffset" from="24" to="0" dur={`${1.2 + i * 0.2}s`} repeatCount="indefinite" />
            </path>
          );
        })}

      {/* Pinos */}
      {cities.map((c) => {
        const p = pins[c.slug];
        const [x, y] = project(p.lon, p.lat);
        const fill = color[c.presenceStatus];
        const isHq = c.presenceStatus === "sede";
        const r = isHq ? 6 : 4.5;
        const tx = p.label === "left" || p.label === "bottomLeft" ? x - 8 : p.label === "right" ? x + 10 : x;
        const ty = p.label === "top" ? y - 12 : p.label === "bottom" || p.label === "bottomLeft" ? y + 20 : y + 4;
        const anchor = p.label === "left" || p.label === "bottomLeft" ? "end" : p.label === "right" ? "start" : "middle";
        return (
          <Link key={c.slug} href={`/atendimento/${c.slug}`} aria-label={`${c.name}: ${presenceStatusLabels[c.presenceStatus]}`}>
            <g className="cursor-pointer [&:hover_text]:fill-[var(--foreground)]">
              <circle cx={x} cy={y} r={r} fill={fill} opacity="0.35">
                <animate attributeName="r" values={`${r};${r * 3.2}`} dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.45;0" dur="2.2s" repeatCount="indefinite" />
              </circle>
              {c.presenceStatus === "em_expansao" ? (
                <circle cx={x} cy={y} r={r} fill="var(--background)" stroke={fill} strokeWidth="1.8" strokeDasharray="2 2" />
              ) : (
                <circle cx={x} cy={y} r={r} fill={fill} stroke="var(--background)" strokeWidth="1.5" />
              )}
              <circle cx={x} cy={y} r={16} fill="transparent" />
              <text
                x={tx}
                y={ty}
                textAnchor={anchor}
                fontSize={isHq ? 13 : 11.5}
                fontWeight={isHq ? 600 : 500}
                fill="currentColor"
                fillOpacity={isHq ? 1 : 0.8}
                style={{ paintOrder: "stroke", stroke: "var(--background)", strokeWidth: 4, strokeLinejoin: "round" }}
              >
                {c.name}
                {isHq ? " · sede" : ""}
              </text>
            </g>
          </Link>
        );
      })}
    </svg>
  );
}

export const mapLegend = (["sede", "cliente_ativo", "em_expansao"] as PresenceStatus[]).map((s) => ({
  status: s,
  label: presenceStatusLabels[s],
  color: color[s],
}));
