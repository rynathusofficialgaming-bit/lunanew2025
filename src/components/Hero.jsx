import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/siteConfig';
import { useTheme } from '@/hooks/useTheme';

const Hero = ({ onLunaPurchaseClick }) => {
  const { gradientClass, glowColor } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: `radial-gradient(circle at center, ${glowColor} 0%, transparent 50%)`,
          backgroundSize: '200% 200%',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              animate={{
                boxShadow: [
                  `0 0 20px ${glowColor}`,
                  `0 0 60px ${glowColor}`,
                  `0 0 20px ${glowColor}`,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${gradientClass} mb-8`}
            >
              <div className="flex items-center gap-2">
                {[...Array(Math.floor(siteConfig.trustpilot.rating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
                {siteConfig.trustpilot.rating % 1 !== 0 && <Star className="w-5 h-5 fill-white text-white" style={{ clipPath: 'inset(0 50% 0 0)' }} />}
                <span className="text-white font-semibold ml-2">
                  {siteConfig.trustpilot.rating} on Trustpilot
                </span>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
                {siteConfig.title}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
             data-sell-store="59669"     // ← Replace with your Sell.app store slug/ID
             data-sell-product="291374" // ← Replace with your product slug/ID
             data-sell-darkmode="true"             // Forces dark mode to match your site's theme
           // Optional: data-sell-theme="#yourhex" // e.g., "#60a5fa" to match your blue gradient accent
            className={`rounded-full px-8 py-6 text-lg bg-gradient-to-r ${gradientClass} hover:opacity-90 transition-opacity font-bold text-white`}
            style={{
              boxShadow: `0 0 40px ${glowColor}`,
             }}
             >
              Purchase LUNA Now
            </button>

            <a href={siteConfig.links.trustpilot} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-white/20 hover:bg-white/10"
              >
                View Reviews
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default Hero;
