import { motion, type Transition } from "framer-motion";

// Import all floating food images
import floatingChili from "@/assets/floating-chili.png";
import floatingBasil from "@/assets/floating-basil.png";
import floatingTomato from "@/assets/floating-tomato.png";
import floatingCoriander from "@/assets/floating-coriander.png";
import floatingTurmeric from "@/assets/floating-turmeric.png";
import floatingMint from "@/assets/floating-mint.png";
import floatingLemon from "@/assets/floating-lemon.png";

interface FloatingElementProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  delay?: number;
  duration?: number;
  rotate?: boolean;
}

const sizeMap = {
  sm: "w-12 h-12",
  md: "w-20 h-20",
  lg: "w-28 h-28",
  xl: "w-36 h-36",
};

const floatAnimation = (delay: number = 0, duration: number = 6) => ({
  y: [0, -25, 0],
  rotate: [0, 5, -5, 0],
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  } satisfies Transition,
});

const rotateAnimation = (delay: number = 0, duration: number = 20) => ({
  rotate: [0, 360],
  transition: {
    duration,
    repeat: Infinity,
    ease: "linear" as const,
    delay,
  } satisfies Transition,
});

export const FloatingChili = ({ 
  className = "", 
  size = "md", 
  delay = 0, 
  duration = 6,
  rotate = false 
}: FloatingElementProps) => (
  <motion.img
    src={floatingChili}
    alt=""
    className={`absolute object-contain pointer-events-none drop-shadow-lg ${sizeMap[size]} ${className}`}
    animate={rotate ? rotateAnimation(delay, duration) : floatAnimation(delay, duration)}
    aria-hidden="true"
  />
);

export const FloatingBasil = ({ 
  className = "", 
  size = "md", 
  delay = 0, 
  duration = 7 
}: FloatingElementProps) => (
  <motion.img
    src={floatingBasil}
    alt=""
    className={`absolute object-contain pointer-events-none drop-shadow-lg ${sizeMap[size]} ${className}`}
    animate={floatAnimation(delay, duration)}
    aria-hidden="true"
  />
);

export const FloatingTomato = ({ 
  className = "", 
  size = "md", 
  delay = 0, 
  duration = 5 
}: FloatingElementProps) => (
  <motion.img
    src={floatingTomato}
    alt=""
    className={`absolute object-contain pointer-events-none drop-shadow-lg ${sizeMap[size]} ${className}`}
    animate={floatAnimation(delay, duration)}
    aria-hidden="true"
  />
);

export const FloatingCoriander = ({ 
  className = "", 
  size = "md", 
  delay = 0, 
  duration = 8 
}: FloatingElementProps) => (
  <motion.img
    src={floatingCoriander}
    alt=""
    className={`absolute object-contain pointer-events-none drop-shadow-lg ${sizeMap[size]} ${className}`}
    animate={floatAnimation(delay, duration)}
    aria-hidden="true"
  />
);

export const FloatingTurmeric = ({ 
  className = "", 
  size = "md", 
  delay = 0, 
  duration = 6 
}: FloatingElementProps) => (
  <motion.img
    src={floatingTurmeric}
    alt=""
    className={`absolute object-contain pointer-events-none drop-shadow-lg ${sizeMap[size]} ${className}`}
    animate={floatAnimation(delay, duration)}
    aria-hidden="true"
  />
);

export const FloatingMint = ({ 
  className = "", 
  size = "md", 
  delay = 0, 
  duration = 7 
}: FloatingElementProps) => (
  <motion.img
    src={floatingMint}
    alt=""
    className={`absolute object-contain pointer-events-none drop-shadow-lg ${sizeMap[size]} ${className}`}
    animate={floatAnimation(delay, duration)}
    aria-hidden="true"
  />
);

export const FloatingLemon = ({ 
  className = "", 
  size = "md", 
  delay = 0, 
  duration = 15,
  rotate = true 
}: FloatingElementProps) => (
  <motion.img
    src={floatingLemon}
    alt=""
    className={`absolute object-contain pointer-events-none drop-shadow-lg ${sizeMap[size]} ${className}`}
    animate={rotate ? rotateAnimation(delay, duration) : floatAnimation(delay, duration)}
    aria-hidden="true"
  />
);

// Decorative animated circle
export const DecorativeCircle = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute rounded-full bg-primary/10 ${className}`}
    animate={{
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    }}
    aria-hidden="true"
  />
);

// Rotating ring decoration
export const DecorativeRing = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute rounded-full border-4 border-primary/20 ${className}`}
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear" as const,
    }}
    aria-hidden="true"
  />
);

// Spice dots pattern
export const SpiceDots = ({ className = "" }: { className?: string }) => (
  <div className={`absolute flex gap-2 ${className}`} aria-hidden="true">
    {[0, 0.2, 0.4].map((delay, i) => (
      <motion.div
        key={i}
        className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-accent' : 'bg-secondary'}`}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay,
        }}
      />
    ))}
  </div>
);
