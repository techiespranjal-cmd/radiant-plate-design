import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FloatingChili,
  FloatingBasil,
  FloatingTomato,
  FloatingMint,
  FloatingLemon,
  FloatingCoriander,
  DecorativeRing,
} from "@/components/FloatingElements";
import { ArrowRight, Star, Phone } from "lucide-react";

// Food dish images
import dishButterChicken from "@/assets/dish-butter-chicken.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishPaneerTikka from "@/assets/dish-paneer-tikka.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-background">
      {/* Floating Food Elements - Large and Visible */}
      <FloatingChili className="top-20 left-8 z-20" size="lg" delay={0} />
      <FloatingBasil className="top-32 right-12 z-20" size="xl" delay={0.5} />
      <FloatingTomato className="bottom-40 left-16 z-20" size="lg" delay={1} />
      <FloatingMint className="top-1/2 left-4 z-20" size="md" delay={1.5} />
      <FloatingLemon className="top-24 left-1/3 z-20" size="lg" delay={0} rotate />
      <FloatingCoriander className="bottom-24 right-8 z-20" size="lg" delay={2} />
      <FloatingChili className="bottom-1/3 right-1/4 z-20" size="md" delay={0.8} />
      <FloatingBasil className="top-3/4 left-1/4 z-20" size="md" delay={1.2} />
      
      {/* Decorative Rings */}
      <DecorativeRing className="w-[600px] h-[600px] -top-40 -right-40" />
      <DecorativeRing className="w-[400px] h-[400px] -bottom-20 -left-20" />

      <div className="container mx-auto px-4 py-12 lg:py-0 min-h-screen">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          
          {/* Left Content */}
          <motion.div
            className="relative z-10 pt-20 lg:pt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="font-body text-sm font-medium text-primary">
                #1 Rated Catering in Delhi NCR
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Crafting{" "}
              <span className="text-gradient-warm">Unforgettable</span>
              <br />
              Culinary Moments
            </motion.h1>

            {/* Description */}
            <motion.p
              className="font-body text-lg md:text-xl text-muted-foreground mt-6 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              From intimate gatherings to grand celebrations, our passionate chefs 
              bring authentic flavors and impeccable service to every event.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button variant="hero" size="xl">
                Book Your Event
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" className="gap-2">
                <Phone className="w-5 h-5" />
                +91 98765 43210
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap gap-8 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "5000+", label: "Events Catered" },
                { value: "4.9", label: "Customer Rating", icon: Star },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground flex items-center justify-center gap-1">
                    {stat.value}
                    {stat.icon && <stat.icon className="w-5 h-5 text-primary fill-primary" />}
                  </div>
                  <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Food Images Collage */}
          <motion.div
            className="relative z-10 h-[500px] lg:h-[700px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Large Image */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elegant border-8 border-card z-10"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={dishButterChicken}
                alt="Delicious Butter Chicken"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>

            {/* Secondary Image - Top Right */}
            <motion.div
              className="absolute top-8 right-4 md:top-12 md:right-8 w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-elegant rotate-6 z-20"
              animate={{
                y: [0, -10, 0],
                rotate: [6, 8, 6],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <img
                src={dishBiryani}
                alt="Aromatic Biryani"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Tertiary Image - Bottom Left */}
            <motion.div
              className="absolute bottom-12 left-0 md:bottom-16 md:left-4 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-elegant -rotate-6 z-20"
              animate={{
                y: [0, -12, 0],
                rotate: [-6, -8, -6],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <img
                src={dishPaneerTikka}
                alt="Paneer Tikka"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Badge */}
            <motion.div
              className="absolute bottom-24 right-0 md:bottom-32 md:right-8 bg-card rounded-2xl shadow-elegant p-4 md:p-6 z-30"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">50+ Expert Chefs</p>
                  <p className="font-body text-sm text-muted-foreground">Ready to serve</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Price Tag */}
            <motion.div
              className="absolute top-4 left-4 md:top-8 md:left-8 bg-primary text-primary-foreground rounded-xl px-4 py-2 shadow-warm z-30"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="font-display font-bold text-lg">From ₹599</p>
              <p className="font-body text-xs opacity-90">per plate</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-foreground/50 rounded-full"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
