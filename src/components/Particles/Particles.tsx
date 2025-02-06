"use client";

import { useRef } from "react";
import styles from "./Particles.module.css";
import useParticles from "./useParticles";

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useParticles(containerRef);

  return <div ref={containerRef} className={styles.container} />;
}
