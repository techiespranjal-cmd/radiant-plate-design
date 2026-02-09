import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { FloatingBasil, FloatingChili, DecorativeRing } from "@/components/FloatingElements";

const features = [
  "Fresh, locally-sourced ingredients",
  "Customizable menu options",
  "Professional service staff",
  "On-time delivery guaranteed",
  "Dietary accommodations available",
  "Elegant presentation & plating",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* Floating Elements */}
      <FloatingBasil className="top-20 left-8 z-10" size="lg" delay={0.5} />
      <FloatingChili className="bottom-20 right-12 z-10" size="md" delay={1} />
      <DecorativeRing className="w-64 h-64 -bottom-32 -left-32" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              {/* Decorative Frame */}
              <motion.div
                className="absolute -inset-4 border-4 border-primary/20 rounded-3xl"
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              {/* Image placeholder with gradient */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    className="w-32 h-32 mx-auto rounded-full bg-gradient-cta flex items-center justify-center shadow-warm mb-6"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="font-display text-5xl font-bold text-primary-foreground">15+</span>
                  </motion.div>
                  <p className="font-display text-2xl text-foreground">Years of Excellence</p>
                  <p className="font-body text-muted-foreground mt-2">Serving happiness on every plate</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-elegant p-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-primary">5000+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-elegant text-xl text-primary italic">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              A Legacy of <span className="text-gradient-warm">Culinary Excellence</span>
            </h2>
            
            <p className="font-body text-muted-foreground mt-6 text-lg leading-relaxed">
              For over 15 years, SpiceHaven has been the premier choice for discerning 
              hosts who demand nothing but the best. Our team of award-winning chefs 
              crafts authentic dishes that celebrate rich flavors and traditions.
            </p>
            
            <p className="font-body text-muted-foreground mt-4 text-lg leading-relaxed">
              We believe every event deserves extraordinary cuisine. From intimate dinners 
              to lavish weddings, our commitment to quality and service excellence has 
              made us the trusted partner for life's most memorable moments.
            </p>

            {/* Features List */}
            <motion.div
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-body text-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button variant="hero" size="lg">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
