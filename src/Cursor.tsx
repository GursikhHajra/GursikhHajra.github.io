import { useEffect, useRef } from "react";

function Cursor() {
  const ring = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ring.current;
    const stage = el?.parentElement;
    if (!el || !stage) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let raf = 0;

    const move = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      el.classList.add("cursor--on");
      el.classList.toggle(
        "cursor--grow",
        !!(e.target as HTMLElement).closest("a, button"),
      );
    };
    const leave = () => el.classList.remove("cursor--on");
    const tick = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerleave", leave);
    tick();
    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <div ref={ring} className="cursor" aria-hidden="true" />;
}

export default Cursor;
