import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/siteConfig';
import { useTheme } from '@/hooks/useTheme';

const TokenPurchase = ({ onPurchaseClick }) => {
  const { gradientClass, glowColor } = useTheme();

  return (
    <section className="py-24 relative bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border border-white/10 bg-white/5 backdrop-blur-sm"
          style={{
            boxShadow: `0 0 60px ${glowColor}`,
          }}
        >
          <div className="text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
              Get Tokens
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Power up your experience by purchasing tokens. Get instant access to premium actions and features.
            </p>
            <Button
              size="lg"
              onClick={onPurchaseClick}
              className={`rounded-full px-10 py-6 text-lg bg-gradient-to-r ${gradientClass} hover:opacity-90 transition-opacity`}
            >
              Purchase Tokens Now
            </Button>
            <p className="mt-4 text-white/50">
              Only ${siteConfig.purchase.pricePerToken.toFixed(2)} per token!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenPurchase;