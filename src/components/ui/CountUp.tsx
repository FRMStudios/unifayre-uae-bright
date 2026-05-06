"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

type Props = {
  value: number;
  duration?: number;
  padTo?: number;
  formatter?: (n: number) => string;
  className?: string;
};

export default function CountUp({
  value,
  duration = 1.5,
  padTo,
  formatter,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        const rounded = Math.round(v);
        node.textContent = formatter
          ? formatter(rounded)
          : padTo
            ? rounded.toString().padStart(padTo, "0")
            : rounded.toLocaleString("en-US");
      },
    });
    return () => controls.stop();
  }, [inView, value, duration, padTo, formatter]);

  const initial = formatter
    ? formatter(0)
    : padTo
      ? "0".padStart(padTo, "0")
      : "0";

  return (
    <span ref={ref} className={className}>
      {initial}
    </span>
  );
}
