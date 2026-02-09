import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { FloatingLemon, FloatingCoriander, DecorativeCircle } from "@/components/FloatingElements";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Wedding Client",
    content: "SpiceHaven made our wedding absolutely magical! The food was exquisite, and our guests are still talking about the paneer tikka. Truly exceptional service.",
    rating: 5,
  },
  {
    name: "Rajesh Gupta",
    role: "Corporate Client",
    content: "We've used SpiceHaven for all our corporate events. Their professionalism and the quality of food is unmatched. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anita Patel",
    role: "Birthday Celebration",
    content: "The live cooking station was a huge hit at my 50th birthday! The chefs were entertaining and the biryani was the best I've ever had.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-20 lg:py-32 bg-foreground overflow-hidden">
      {/* Floating Elements */}
      <FloatingLemon className="top-20 right-16 z-10 opacity-60" size="lg" delay={0} />
      <FloatingCoriander className="bottom-20 left-12 z-10 opacity-50" size="md" delay={1} />
      <DecorativeCircle className="w-96 h-96 -top-48 -left-48 opacity-10" />
      <DecorativeCircle className="w-64 h-64 bottom-0 right-0 opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-elegant text-xl text-primary italic">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-card mt-2">
            What Our <span className="text-gradient-warm">Clients Say</span>
          </h2>
          <p className="font-body text-card/70 mt-4 text-lg">
            Don't just take our word for it – hear from the families and businesses
            we've had the pleasure to serve.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-elegant relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
                whileHover={{ scale: 1.2 }}
              >
                <Quote className="w-16 h-16 text-primary" />
              </motion.div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="font-display text-lg font-bold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </motion.div>
                <div>
                  <h4 className="font-display font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-warm"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
