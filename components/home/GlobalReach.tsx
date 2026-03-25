"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const W = 1000;
const H = 500;

function toXY(lon: number, lat: number): [number, number] {
  return [((lon + 180) / 360) * W, ((90 - lat) / 180) * H];
}

function poly(coords: [number, number][]): string {
  return coords.map(([lon, lat]) => toXY(lon, lat).join(",")).join(" ");
}

const LAND: [number, number][][] = [
  [[-170,65],[-165,72],[-140,70],[-130,68],[-115,70],[-100,73],[-85,73],[-70,72],[-60,62],[-57,52],[-60,47],[-67,44],[-75,35],[-80,30],[-82,25],[-90,30],[-97,26],[-105,20],[-117,32],[-120,35],[-124,42],[-125,50],[-130,55],[-140,60],[-155,60],[-170,65]],
  [[-105,20],[-100,18],[-92,16],[-87,14],[-83,10],[-80,8],[-82,15],[-85,15],[-90,16],[-97,20],[-105,20]],
  [[-80,8],[-77,6],[-72,12],[-62,6],[-52,3],[-48,0],[-44,-3],[-38,-8],[-35,-10],[-40,-23],[-48,-28],[-53,-33],[-58,-38],[-65,-42],[-68,-50],[-73,-52],[-75,-48],[-75,-42],[-72,-35],[-70,-18],[-75,-10],[-78,-2],[-80,5],[-80,8]],
  [[-10,36],[0,38],[3,43],[-9,43],[-5,48],[-6,50],[0,51],[5,53],[8,54],[10,55],[12,56],[16,55],[18,57],[20,58],[22,60],[25,60],[28,62],[30,65],[30,70],[25,71],[18,70],[12,64],[8,58],[5,54],[0,52],[-5,48],[-10,42],[-10,36]],
  [[5,58],[8,58],[12,64],[18,70],[25,71],[28,70],[30,68],[30,65],[28,62],[24,60],[20,58],[18,57],[16,58],[12,60],[8,60],[5,58]],
  [[30,50],[30,70],[40,68],[50,70],[60,72],[75,73],[90,72],[105,72],[115,70],[125,65],[130,60],[135,55],[140,52],[145,50],[140,45],[135,42],[130,40],[120,42],[110,45],[100,50],[90,52],[80,55],[70,55],[60,52],[50,48],[40,45],[30,50]],
  [[-17,15],[-17,21],[-13,28],[-5,36],[10,37],[12,33],[25,32],[33,30],[38,25],[42,18],[50,12],[44,0],[42,-5],[40,-12],[35,-25],[30,-34],[25,-34],[18,-28],[12,-18],[10,-5],[5,5],[-5,5],[-10,8],[-17,15]],
  [[30,32],[33,30],[38,25],[42,18],[50,12],[55,15],[60,25],[55,28],[52,30],[50,30],[48,32],[45,35],[42,38],[38,37],[35,35],[30,32]],
  [[68,22],[72,10],[78,8],[80,12],[82,15],[85,22],[88,22],[92,22],[95,10],[98,8],[100,2],[105,-6],[100,-6],[98,2],[95,8],[88,10],[82,8],[78,5],[73,8],[68,22]],
  [[68,22],[72,10],[78,8],[80,15],[78,22],[75,28],[72,30],[68,25],[68,22]],
  [[75,28],[78,35],[80,40],[85,42],[90,45],[100,50],[110,45],[118,42],[122,38],[125,35],[122,30],[118,25],[112,22],[108,18],[100,15],[95,18],[90,28],[85,35],[80,38],[75,28]],
  [[98,8],[100,14],[105,18],[108,16],[106,12],[105,5],[102,2],[98,8]],
  [[114,-12],[120,-14],[130,-12],[140,-12],[148,-18],[152,-25],[153,-28],[150,-35],[140,-38],[132,-35],[128,-32],[120,-28],[115,-24],[114,-18],[114,-12]],
  [[-55,60],[-48,60],[-25,65],[-18,72],[-20,78],[-35,82],[-50,82],[-55,78],[-53,72],[-50,68],[-55,64],[-55,60]],
  [[-6,50],[-5,52],[-3,54],[-5,57],[-3,58],[-2,57],[0,53],[2,52],[0,51],[-3,50],[-6,50]],
  [[130,31],[132,34],[135,35],[140,40],[142,44],[145,45],[144,40],[140,36],[136,33],[130,31]],
  [[166,-35],[170,-37],[175,-42],[178,-46],[177,-44],[174,-40],[170,-36],[166,-35]],
  [[44,-12],[48,-15],[50,-20],[49,-25],[46,-26],[44,-22],[44,-12]],
  [[-24,64],[-22,64],[-14,65],[-14,66],[-18,66],[-22,66],[-24,65],[-24,64]],
  [[118,7],[120,12],[122,16],[124,18],[126,16],[124,10],[120,7],[118,7]],
  [[95,-2],[100,0],[105,-5],[108,-7],[112,-8],[118,-8],[122,-8],[128,-4],[132,-3],[128,-8],[120,-10],[112,-9],[106,-8],[100,-5],[95,-2]],
  [[126,34],[127,36],[128,38],[130,38],[130,35],[128,33],[126,34]],
  [[120,22],[121,24],[122,25],[122,23],[120,22]],
];

const CITIES: { lon: number; lat: number; name: string }[] = [
  { lon: 2.35,  lat: 48.86, name: "Paris"       },
  { lon: -0.12, lat: 51.51, name: "London"       },
  { lon: 13.4,  lat: 52.52, name: "Berlin"       },
  { lon: 12.5,  lat: 41.9,  name: "Rome"         },
  { lon: -3.7,  lat: 40.42, name: "Madrid"       },
  { lon: 23.72, lat: 37.97, name: "Athens"       },
  { lon: -7.62, lat: 33.59, name: "Casablanca"   },
  { lon: 3.04,  lat: 36.75, name: "Algiers"      },
  { lon: 3.39,  lat: 6.45,  name: "Lagos"        },
  { lon: 31.24, lat: 30.04, name: "Cairo"        },
  { lon: 36.82, lat: -1.29, name: "Nairobi"      },
  { lon: 55.3,  lat: 25.2,  name: "Dubai"        },
  { lon: 77.21, lat: 28.61, name: "New Delhi"    },
  { lon: 100.5, lat: 13.76, name: "Bangkok"      },
  { lon: 103.85,lat: 1.35,  name: "Singapore"    },
  { lon: 121.47,lat: 31.23, name: "Shanghai"     },
  { lon: 139.69,lat: 35.69, name: "Tokyo"        },
  { lon: -73.94,lat: 40.67, name: "New York"     },
  { lon: -87.63,lat: 41.88, name: "Chicago"      },
  { lon:-118.24,lat: 34.05, name: "Los Angeles"  },
  { lon: -46.63,lat:-23.55, name: "São Paulo"    },
  { lon: -99.13,lat: 19.43, name: "Mexico City"  },
  { lon: -79.38,lat: 43.65, name: "Toronto"      },
  { lon: 151.21,lat:-33.87, name: "Sydney"       },
  { lon: 28.05, lat:-26.2,  name: "Johannesburg" },
  { lon: 126.98,lat: 37.57, name: "Seoul"        },
  { lon: 114.17,lat: 22.32, name: "Hong Kong"    },
  { lon: 46.68, lat: 24.71, name: "Riyadh"       },
  { lon: 18.07, lat: 59.33, name: "Stockholm"    },
  { lon: -9.14, lat: 38.74, name: "Lisbon"       },
];

const HQ = { lon: 2.35, lat: 48.86 };

function WorldMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const hqXY = toXY(HQ.lon, HQ.lat);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      {LAND.map((coords, i) => (
        <polygon
          key={i}
          points={poly(coords)}
          fill="#2563EB"
          fillOpacity={0.12}
          stroke="#2563EB"
          strokeWidth={0.5}
          strokeOpacity={0.2}
        />
      ))}

      {CITIES.map((city, i) => {
        const cityXY = toXY(city.lon, city.lat);
        const dx = cityXY[0] - hqXY[0];
        const dy = cityXY[1] - hqXY[1];
        const dist = Math.sqrt(dx * dx + dy * dy);
        const midX = (hqXY[0] + cityXY[0]) / 2;
        const midY = (hqXY[1] + cityXY[1]) / 2 - dist * 0.15;
        const d = `M${hqXY[0]},${hqXY[1]} Q${midX},${midY} ${cityXY[0]},${cityXY[1]}`;
        const delay = (i * 0.4) % 8;

        return (
          <g key={city.name}>
            <path
              d={d}
              fill="none"
              stroke="#2563EB"
              strokeWidth={0.7}
              opacity={0.15}
              className="net-arc"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
            <circle r={1.8} fill="#2563EB" opacity={0.7} className="travel-dot">
              <animateMotion
                dur={`${3 + (i % 3)}s`}
                repeatCount="indefinite"
                begin={`${delay}s`}
                path={d}
              />
            </circle>
          </g>
        );
      })}

      {CITIES.map((city) => {
        const [cx, cy] = toXY(city.lon, city.lat);
        const isHQ = city.lon === HQ.lon && city.lat === HQ.lat;
        const isHov = city.name === hovered;

        return (
          <g key={`dot-${city.name}`}>
            <circle
              cx={cx} cy={cy} r={12} fill="transparent"
              onMouseEnter={() => setHovered(city.name)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            />
            {isHQ && (
              <circle cx={cx} cy={cy} r={8} fill="none" stroke="#2563EB"
                strokeWidth={0.8} opacity={0.5} className="hq-ring" />
            )}
            {!isHQ && (
              <circle cx={cx} cy={cy} r={5} fill="none" stroke="#2563EB"
                strokeWidth={0.4} opacity={0.15} className="city-glow" />
            )}
            <circle
              cx={cx} cy={cy}
              r={isHQ ? 4 : isHov ? 3.5 : 2}
              fill="#2563EB"
              opacity={isHQ ? 1 : isHov ? 0.95 : 0.55}
            />
            {isHov && (
              <g>
                <rect
                  x={cx - city.name.length * 3.5 - 6} y={cy - 22}
                  width={city.name.length * 7 + 12} height={16}
                  fill="#2563EB" rx={2}
                />
                <text
                  x={cx} y={cy - 12} textAnchor="middle" fill="#fff"
                  fontSize={8} fontFamily="var(--font-mono, monospace)"
                  fontWeight={600} letterSpacing="0.05em"
                >
                  {city.name}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

const stats = [
  { val: "120+", label: "Countries Reached" },
  { val: "4",    label: "Content Verticals"  },
  { val: "12",   label: "Active Languages"   },
  { val: "40+",  label: "Media Properties"   },
];

export default function GlobalReach({ backgroundColor = "var(--color-surface)" }: { backgroundColor?: string }) {
  const [mapVisible, setMapVisible] = useState(false);

  return (
    <section
      style={{
        backgroundColor,
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "64px 40px",
          position: "relative",
          minHeight: 520,
          cursor: "crosshair",
          overflow: "hidden",
        }}
        onMouseEnter={() => setMapVisible(true)}
        onMouseLeave={() => setMapVisible(false)}
      >
        {/* ── Content layer (visible by default, fades on hover) ── */}
        <div
          className="gr-content"
          style={{
            position: "relative",
            zIndex: 2,
            opacity: mapVisible ? 0 : 1,
            transform: mapVisible ? "translateY(-12px)" : "translateY(0)",
            transition: "opacity 500ms ease, transform 500ms ease",
            pointerEvents: mapVisible ? "none" : "auto",
          }}
        >
          <ScrollReveal>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#2563EB",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Global Data Network
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Audience intelligence across{" "}
              <span style={{ color: "#2563EB" }}>120+ countries</span>.
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: 16,
                color: "var(--color-muted-foreground)",
                lineHeight: 1.8,
                marginBottom: 48,
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 48px",
              }}
            >
              Our media network generates first-party data signals from readers
              across every major market — with Paris as our operational hub.
            </p>

            {/* Stats row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 1,
                backgroundColor: "var(--color-border)",
                border: "1px solid var(--color-border)",
                maxWidth: 700,
                margin: "0 auto",
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    backgroundColor: "var(--color-surface)",
                    padding: "20px 16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 28,
                      fontWeight: 400,
                      color: "var(--color-foreground)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {s.val}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-muted-foreground)",
                      textAlign: "center",
                      lineHeight: 1.3,
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Hover hint */}
            <p
              style={{
                textAlign: "center",
                marginTop: 32,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                color: "var(--color-muted-foreground)",
                opacity: 0.5,
              }}
            >
              ↑ Hover to explore the network
            </p>
          </ScrollReveal>
        </div>

        {/* ── Map layer (hidden by default, fades in on hover) ── */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: mapVisible
              ? "translate(-50%, -50%) scale(1)"
              : "translate(-50%, -50%) scale(0.96)",
            width: "90%",
            maxWidth: 1000,
            zIndex: 1,
            opacity: mapVisible ? 1 : 0,
            transition: "opacity 500ms ease, transform 500ms ease",
            pointerEvents: mapVisible ? "auto" : "none",
          }}
        >
          <WorldMap />
        </div>

        {/* ── Subtle map ghost (always faintly visible behind content) ── */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 1000,
            zIndex: 0,
            opacity: mapVisible ? 0 : 0.06,
            transition: "opacity 500ms ease",
            pointerEvents: "none",
          }}
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", display: "block" }}
          >
            {LAND.map((coords, i) => (
              <polygon
                key={i}
                points={poly(coords)}
                fill="#2563EB"
                stroke="none"
              />
            ))}
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes ringPulse {
          0%, 100% { r: 8; opacity: 0.5; }
          50% { r: 18; opacity: 0; }
        }
        .hq-ring { animation: ringPulse 2s ease-out infinite; }

        @keyframes arcDraw {
          from { stroke-dashoffset: 600; }
          to   { stroke-dashoffset: 0; }
        }
        .net-arc {
          stroke-dasharray: 600;
          animation: arcDraw 1.5s ease-out forwards;
        }

        @keyframes cityGlow {
          0%, 100% { r: 5; opacity: 0.15; }
          50% { r: 9; opacity: 0; }
        }
        .city-glow { animation: cityGlow 3s ease-in-out infinite; }

        @keyframes travelPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .travel-dot { animation: travelPulse 1s ease-in-out infinite; }

        @media (max-width: 768px) {
          .gr-content p:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
