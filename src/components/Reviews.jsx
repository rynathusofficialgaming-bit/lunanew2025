import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { useTheme } from '@/hooks/useTheme';

const Reviews = () => {
  const { gradientClass, glowColor } = useTheme();

  return (
    <section className="py-24 relative bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
            Customer Reviews
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Top Reviews from Our Community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {siteConfig.reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all"
              style={{
                boxShadow: `0 0 0 rgba(255,255,255,0)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 40px ${glowColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 rgba(255,255,255,0)';
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{review.name}</h3>
              <p className="text-white/70 leading-relaxed italic">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;