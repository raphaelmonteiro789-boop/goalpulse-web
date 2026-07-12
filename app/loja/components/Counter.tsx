'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useMotionValueEvent, useSpring } from 'framer-motion';

interface CounterProps {
  to: number;
  suffix?: string;
  className?: string;
}

export default function Counter({ to, suffix = '', className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(to);
  }, [inView, to, motionVal]);

  useMotionValueEvent(spring, 'change', (v) => setDisplay(Math.round(v)));

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
