import { useEffect, useRef } from "react";

const LABELS = [
  "Python",
  "TypeScript",
  "React",
  "Kotlin",
  "Java",
  "SQL",
  "Git",
  "Node.js",
  "CSS",
  "Automation",
  "Inventory",
  "Cloud",
];

function NetworkHero() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const mouse = { x: -999, y: -999 };
    const nodes = LABELS.map((label) => ({
      label,
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0004,
      vy: (Math.random() - 0.5) * 0.0004,
    }));
    let w = 0;
    let h = 0;
    let raf = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const pts = nodes.map((n) => {
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0.03 || n.x > 0.97) n.vx *= -1;
          if (n.y < 0.05 || n.y > 0.95) n.vy *= -1;
        }
        return { n, px: n.x * w, py: n.y * h };
      });

      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].px - pts[j].px, pts[i].py - pts[j].py);
          if (d < 230) {
            ctx.strokeStyle = `rgba(255,255,255,${0.3 * (1 - d / 230)})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].px, pts[i].py);
            ctx.lineTo(pts[j].px, pts[j].py);
            ctx.stroke();
          }
        }
      }

      for (const p of pts) {
        const dm = Math.hypot(p.px - mouse.x, p.py - mouse.y);
        if (dm < 240) {
          ctx.strokeStyle = `rgba(255,255,255,${0.9 * (1 - dm / 240)})`;
          ctx.beginPath();
          ctx.moveTo(p.px, p.py);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        const near = dm < 120;
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(p.px, p.py, near ? 7 : 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = `${near ? 600 : 400} ${near ? 17 : 13}px "Hanken Grotesk", sans-serif`;
        ctx.fillStyle = `rgba(255,255,255,${near ? 1 : 0.7})`;
        ctx.fillText(p.n.label, p.px + 12, p.py + 5);
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw();
    };
    const move = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };

    resize();
    if (!reduce) draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return <canvas ref={ref} className="stage__canvas" aria-hidden="true" />;
}

export default NetworkHero;
