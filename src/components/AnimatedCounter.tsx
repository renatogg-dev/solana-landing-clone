"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  className,
  style,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(formatNumber(latest, decimals));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value, duration, decimals]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

function formatNumber(num: number, decimals: number): string {
  if (decimals > 0) {
    return num.toFixed(decimals);
  }
  
  // Format with commas for thousands
  return Math.round(num).toLocaleString("en-US");
}

// Helper to parse formatted numbers like "11.5M+", "3,969", "$0.00025"
export function parseStatValue(value: string): {
  prefix: string;
  number: number;
  suffix: string;
  decimals: number;
} {
  // Handle currency prefix
  const currencyMatch = value.match(/^(\$)/);
  const prefix = currencyMatch ? currencyMatch[1] : "";
  
  // Remove currency prefix for parsing
  let cleanValue = prefix ? value.slice(1) : value;
  
  // Handle suffix like M+, M, K, %
  const suffixMatch = cleanValue.match(/([MKBmkb]\+?|%|\+)$/);
  const suffix = suffixMatch ? suffixMatch[0] : "";
  
  // Remove suffix for parsing
  cleanValue = suffix ? cleanValue.slice(0, -suffix.length) : cleanValue;
  
  // Remove commas and parse
  cleanValue = cleanValue.replace(/,/g, "");
  const number = parseFloat(cleanValue) || 0;
  
  // Determine decimals
  const decimalMatch = cleanValue.match(/\.(\d+)/);
  const decimals = decimalMatch ? decimalMatch[1].length : 0;
  
  return { prefix, number, suffix, decimals };
}
