import { ImageResponse } from "next/og";

export const alt = "Axiom Black: Engineering, Technology, Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default share image: black canvas, wireframe cube, tri-colour tagline. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#000", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, color: "#fff", fontFamily: "sans-serif" }}>
        <svg width="400" height="333" viewBox="0 0 600 500" style={{ position: "absolute", right: 40, top: 150 }}>
          <g stroke="#444" strokeWidth="2" fill="none">
            <path d="M300 120 L410 180 L410 300 L300 360 L190 300 L190 180 Z" />
            <path d="M300 120 L300 240 M300 240 L410 300 M300 240 L190 300" />
            <path d="M190 180 L300 240 L410 180" />
            <path d="M300 240 L410 300 L410 420 L300 480 L190 420 L190 300" />
          </g>
        </svg>
        <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 6 }}>AXIOM BLACK</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 760 }}>Resilient water infrastructure, engineered for the next century.</div>
          <div style={{ display: "flex", gap: 28, marginTop: 40, fontSize: 28 }}>
            <span style={{ color: "#0049ED" }}>Engineering</span>
            <span style={{ color: "#FF8710" }}>Technology</span>
            <span style={{ color: "#12BB1E" }}>Consulting</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
