import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/siteConfig';
import { useTheme } from '@/hooks/useTheme';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { gradientClass } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-3xl font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}
            >
              {siteConfig.name}
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
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
                Terms
              </motion.span>
            </Link>
            <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer">
              <Button
                className={`rounded-full bg-gradient-to-r ${gradientClass} hover:opacity-90 transition-opacity`}
              >
                Join Discord
              </Button>
            </a>
            <a href={siteConfig.links.login} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="rounded-full border-white/20 hover:bg-white/10"
              >
                Login
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6 space-y-4"
          >
            <Link to="/status" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="text-white/70 hover:text-white transition-colors">Status</div>
            </Link>
            <Link to="/terms" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="text-white/70 hover:text-white transition-colors">Terms</div>
            </Link>
            <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer">
              <Button className={`w-full rounded-full bg-gradient-to-r ${gradientClass}`}>
                Join Discord
              </Button>
            </a>
            <a href={siteConfig.links.login} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full rounded-full border-white/20">
                Login
              </Button>
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;