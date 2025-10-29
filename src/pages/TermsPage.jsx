import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { useTheme } from '@/hooks/useTheme';

const TermsPage = () => {
  const { gradientClass } = useTheme();

  return (
    <>
      <Helmet>
        <title>Terms of Service - {siteConfig.name}</title>
        <meta name="description" content="Terms of Service for LUNA" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-12">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
                Terms of Service
              </h1>
              <p className="text-xl text-white/60">
                Last updated: {siteConfig.termsOfService.lastUpdated}
              </p>
            </div>

            <div className="space-y-8">
              {siteConfig.termsOfService.sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all"
                >
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-center"
            >
              <p className="text-white/60">
                By using LUNA, you agree to these terms. If you have any questions, please contact us through our Discord server.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;