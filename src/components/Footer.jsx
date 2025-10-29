import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/siteConfig';
import { useTheme } from '@/hooks/useTheme';

const Footer = () => {
  const { gradientClass } = useTheme();

  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className={`text-4xl font-bold mb-6 bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
            {siteConfig.name}
          </div>
          
          <p className="text-white/60 max-w-3xl mx-auto mb-8 leading-relaxed">
            {siteConfig.footer.description}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Link to="/status">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                Status
              </motion.span>
            </Link>
            <Link to="/terms">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </motion.span>
            </Link>
            <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                Discord
              </motion.span>
            </a>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-white/40 text-sm mb-2">
              {siteConfig.footer.copyright}
            </p>
            <p className="text-white/30 text-xs">
              {siteConfig.footer.disclaimer}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;