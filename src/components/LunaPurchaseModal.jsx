import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

const LunaPurchaseModal = ({ isOpen, onClose }) => {
  const { gradientClass, glowColor } = useTheme();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: -20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl mx-4 rounded-2xl border border-white/10 bg-slate-900 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: `0 0 80px ${glowColor}`,
            }}
          >
            <div className={`p-6 border-b border-white/10 flex justify-between items-center bg-gradient-to-r ${gradientClass}`}>
              <h2 className="text-2xl font-bold text-white">Get {siteConfig.name}</h2>
              <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
                <X className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Unlock the Ultimate Raiding Experience
                </h3>
                <p className="text-white/70 max-w-md mx-auto">
                  Complete your purchase below to get instant access to LUNA.
                </p>
              </div>
              <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-white/10">
                <iframe
                  src={siteConfig.links.lunaPurchase}
                  className="w-full h-full"
                  title={`Purchase ${siteConfig.name}`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="p-4 bg-slate-950/50 border-t border-white/10 text-center">
              <p className="text-sm text-white/50">Secure payments powered by Sell.app</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LunaPurchaseModal;