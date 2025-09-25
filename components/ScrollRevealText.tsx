"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  { text: "I'm " },
  { text: "a ", highlight: true },
  { text: "computer ", highlight: true },
  { text: "science ", highlight: true },
  { text: "graduate ", highlight: true },
  { text: "and " },
  { text: "software ", highlight: true },
  { text: "engineer ", highlight: true },
  { text: "with " },
  { text: "a " },
  { text: "strong " },
  { text: "foundation " },
  { text: "in " },
  { text: "algorithms, ", highlight: true },
  { text: "system ", highlight: true },
  { text: "design, ", highlight: true },
  { text: "and " },
  { text: "databases. ", highlight: true },
  { text: "My " },
  { text: "skill " },
  { text: "set " },
  { text: "spans " },
  { text: "backend ", highlight: true },
  { text: "and " },
  { text: "cloud ", highlight: true },
  { text: "development, " },
  { text: "and " },
  { text: "I " },
  { text: "enjoy " },
  { text: "building " },
  { text: "scalable ", highlight: true },
  { text: "and " },
  { text: "high-performance ", highlight: true },
  { text: "applications. " },
  { text: "With " },
  { text: "experience " },
  { text: "in " },
  { text: "tools " },
  { text: "like " },
  { text: "Flask, ", highlight: true },
  { text: "FastAPI, ", highlight: true },
  { text: "Redis, ", highlight: true },
  { text: "and " },
  { text: "AWS, ", highlight: true },
  { text: "I " },
  { text: "thrive " },
  { text: "at " },
  { text: "the " },
  { text: "intersection " },
  { text: "of " },
  { text: "problem-solving ", highlight: true },
  { text: "and " },
  { text: "innovation. " },
  { text: "I'm " },
  { text: "looking " },
  { text: "forward " },
  { text: "to " },
  { text: "contributing " },
  { text: "to " },
  { text: "impactful ", highlight: true },
  { text: "projects ", highlight: true },
  { text: "and " },
  { text: "sharpening " },
  { text: "my " },
  { text: "expertise " },
  { text: "further." },
];


export function ScrollRevealText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.5", "end 0.8"], // Adjusted offset for shorter scroll length
  });

  // Precompute styles for each word
  const wordStyles = words.map((_, i) => {
    const start = i / (words.length * 1.5); // Adjusted to make the effect end sooner
    const opacity = useTransform(
      scrollYProgress,
      [start, Math.min(start + 0.1, 1)],
      [0.2, 1]
    );
    const color = useTransform(
      scrollYProgress,
      [start, Math.min(start + 0.1, 1)],
      ["#333", words[i].highlight ? "#fff" : "#ccc"]
    );
    return { opacity, color };
  });

  return (
    <motion.div
      ref={containerRef}
      className="py-32 px-4 max-w-5xl mx-auto text-center"
    >
      <motion.p className="text-[clamp(1.5rem,5vw,2.5rem)] leading-relaxed font-light">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className={` ${word.highlight ? "text-rose-600 font-bold" : ""}`}
            style={wordStyles[i]} // Apply precomputed styles here
          >
            {word.text}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
}
