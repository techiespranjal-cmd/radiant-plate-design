import { motion } from "framer-motion";
import { UtensilsCrossed, Users, Calendar, Truck, ChefHat, Award } from "lucide-react";
import { FloatingMint, FloatingTomato, DecorativeCircle } from "@/components/FloatingElements";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Wedding Catering",
    description: "Make your special day unforgettable with our exquisite wedding menus tailored to your taste.",
  },
  {
    icon: Users,
    title: "Corporate Events",
    description: "Impress your clients and colleagues with professional catering for meetings and conferences.",
  },
  {
    icon: Calendar,
    title: "Private Parties",
    description: "From birthdays to anniversaries, we bring restaurant-quality dining to your home.",
  },
  {
    icon: Truck,
    title: "Outdoor Catering",
    description: "Garden parties, picnics, and outdoor celebrations with seamless on-site service.",
  },
  {
    icon: ChefHat,
    title: "Live Cooking Stations",
    description: "Interactive dining experience with our chefs preparing fresh dishes before your guests.",
  },
  {
    icon: Award,
    title: "Premium Packages",
    description: "All-inclusive luxury packages with decor, service staff, and complete event management.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 lg:py-32 bg-muted overflow-hidden">
      {/* Floating Elements */}
      <FloatingMint className="top-20 right-16 z-10" size="lg" delay={0} />
      <FloatingTomato className="bottom-32 left-12 z-10" size="md" delay={1} />
      <DecorativeCircle className="w-80 h-80 -top-40 -right-40" />
      <DecorativeCircle className="w-48 h-48 bottom-20 -left-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-elegant text-xl text-primary italic">What We Offer</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Our Premium <span className="text-gradient-warm">Services</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">
            From intimate gatherings to grand celebrations, we deliver exceptional
            culinary experiences that delight your guests.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 rounded-xl bg-gradient-cta flex items-center justify-center shadow-warm mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Line */}
              <motion.div
                className="mt-6 h-1 bg-gradient-warm rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
