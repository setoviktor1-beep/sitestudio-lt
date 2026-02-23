"use client";

import { useRef, ReactNode, MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  imageRef?: React.RefObject<HTMLImageElement | null>;
}

export default function TiltCard({ children, className = "", imageRef }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const rotateX = ((y - cy) / cy) * -12;
    const rotateY = ((x - cx) / cx) * 12;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`;

    // Parallax image
    if (imageRef?.current) {
      const moveX = ((x - cx) / cx) * -8;
      const moveY = ((y - cy) / cy) * -8;
      imageRef.current.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
    }

    // Glare
    if (glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
      glareRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";

    if (imageRef?.current) {
      imageRef.current.style.transform = "scale(1) translate(0px, 0px)";
    }

    if (glareRef.current) {
      glareRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{ transition: "transform 0.15s ease-out", transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare overlay */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 z-10 rounded-xl opacity-0"
        style={{ transition: "opacity 0.3s ease" }}
      />
      {children}
    </div>
  );
}
