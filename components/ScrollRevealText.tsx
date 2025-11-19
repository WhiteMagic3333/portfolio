"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  { text: "Software " },
  { text: "Engineer ", highlight: true },
  { text: "with " },
  { text: "2 ", highlight: true },
  { text: "years ", highlight: true },
  { text: "of " },
  { text: "experience " },
  { text: "in " },
  { text: "backend ", highlight: true },
  { text: "and " },
  { text: "full-stack ", highlight: true },
  { text: "development, " },

  { text: "focused " },
  { text: "on " },
  { text: "building ", highlight: true },
  { text: "tools, ", highlight: true },
  { text: "enhancing ", highlight: true },
  { text: "system ", highlight: true },
  { text: "performance, ", highlight: true },
  { text: "and " },
  { text: "improving ", highlight: true },
  { text: "high-traffic ", highlight: true },
  { text: "user " },
  { text: "experiences. " },

  { text: "At " },
  { text: "Internshala, " , highlight: true},
  { text: "I " },
  { text: "automated ", highlight: true },
  { text: "recurring ", highlight: true },
  { text: "engineering " },
  { text: "workflows, " },
  { text: "developed ", highlight: true },
  { text: "administrative ", highlight: true },
  { text: "tools, " },
  { text: "optimized ", highlight: true },
  { text: "high-load ", highlight: true },
  { text: "pages, " },
  { text: "improved ", highlight: true },
  { text: "page " },
  { text: "stability ", highlight: true },
  { text: "across " },
  { text: "production " },
  { text: "pages, " },
  { text: "and " },
  { text: "contributed " },
  { text: "to " },
  { text: "responsive " },
  { text: "landing ", highlight: true },
  { text: "pages " },
  { text: "for " },
  { text: "major " },
  { text: "campaigns. " },

  { text: "Previously, " },
  { text: "I " },
  { text: "worked " },
  { text: "at " },
  { text: "CodeChef, ", highlight: true },
  { text: "creating " },
  { text: "solution " },
  { text: "content " },
  { text: "for " },
  { text: "programming " },
  { text: "problems. " },

  { text: "With " },
  { text: "1500+ ", highlight: true },
  { text: "solved ", highlight: true },
  { text: "problems " },
  { text: "across " },
  { text: "competitive ", highlight: true },
  { text: "programming ", highlight: true },
  { text: "platforms, " },
  { text: "I " },
  { text: "bring " },
  { text: "strong ", highlight: true },
  { text: "algorithmic ", highlight: true },
  { text: "thinking " },
  { text: "and " },
  { text: "a " },
  { text: "structured " },
  { text: "approach ", highlight: true },
  { text: "to " },
  { text: "backend ", highlight: true },
  { text: "development. " },

  { text: "I’m " },
  { text: "also " },
  { text: "ranked " },
  { text: "top ", highlight: true },
  { text: "1.88% ", highlight: true },
  { text: "on " },
  { text: "LeetCode ", highlight: true },
  { text: "(whitemagic7456). " }
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
