import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';
import { useTheme } from '@/hooks/useTheme';

const DiscordWidget = () => {
  const { gradientClass, glowColor } = useTheme();

  return (
    <section className="py-24 relative bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
            Join Our Community
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Connect with thousands of users and get instant support
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
            style={{
              boxShadow: `0 0 60px ${glowColor}`,
            }}
          >
            <iframe
              src={`https://discord.com/widget?id=${siteConfig.links.discordWidgetId}&theme=dark`}
              width="100%"
              height="500"
              allowTransparency="true"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              title="Discord Widget"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscordWidget;