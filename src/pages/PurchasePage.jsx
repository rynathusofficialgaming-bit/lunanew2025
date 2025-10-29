import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { useTheme } from '@/hooks/useTheme';

const PurchasePage = () => {
  const { gradientClass, glowColor } = useTheme();

  return (
    <>
      <Helmet>
        <title>Purchase Tokens - {siteConfig.name}</title>
        <meta name="description" content="Purchase LUNA tokens and unlock premium features" />
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
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
                Purchase Tokens
              </h1>
              <p className="text-xl text-white/60">
                Get instant access to premium features
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              style={{
                boxShadow: `0 0 60px ${glowColor}`
              }}
            >
              <div className="aspect-[16/10] w-full">
                <iframe
                  src={siteConfig.links.sellApp}
                  className="w-full h-full"
                  title="Purchase Tokens"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 text-center text-white/60"
            >
              <p className="mb-2">Secure payment processing powered by Sell.app</p>
              <p className="text-sm">All transactions are encrypted and secure</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PurchasePage;