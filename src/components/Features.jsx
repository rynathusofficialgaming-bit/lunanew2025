import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smile, RefreshCw, Shield, Headphones, Users, MailCheck, Phone } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { useTheme } from '@/hooks/useTheme';

const iconMap = {
  Globe,
  Smile,
  RefreshCw,
  Shield,
  Headphones,
  Users,
  MailCheck,
  Phone,
};

const Features = () => {
  const { gradientClass, glowColor } = useTheme();

  return (
    <section className="py-24 relative bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
            Features We Offer
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Everything you need for the ultimate Discord experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all group"
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
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${gradientClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {Icon ? <Icon className="w-7 h-7 text-white" /> : null}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;