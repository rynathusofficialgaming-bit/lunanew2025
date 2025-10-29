import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { useTheme } from '@/hooks/useTheme';

const DiscountAlert = () => {
  const { gradientClass } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('discountAlertDismissed');
    if (siteConfig.alert.enabled && !isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('discountAlertDismissed', 'true');
    setIsVisible(false);
  };

  const AlertContent = () => (
    <div className="flex items-center justify-center gap-4">
      <p>{siteConfig.alert.message}</p>
      {siteConfig.alert.link && <ArrowRight className="w-5 h-5 hidden sm:inline-block" />}
    </div>
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className={`relative z-[70] text-white font-semibold text-center p-3 bg-gradient-to-r ${gradientClass}`}
        >
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex-grow flex justify-center">
              {siteConfig.alert.link ? (
                <a href={siteConfig.alert.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  <AlertContent />
                </a>
              ) : (
                <AlertContent />
              )}
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <button onClick={handleDismiss} className="p-1 rounded-full hover:bg-white/20 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiscountAlert;