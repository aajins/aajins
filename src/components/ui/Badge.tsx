"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "glow";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    outline: "border border-gray-600 text-gray-400",
    glow: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,212,255,0.2)]",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
