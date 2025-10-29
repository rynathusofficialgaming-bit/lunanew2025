import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DiscordWidget from '@/components/DiscordWidget';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import PurchaseModal from '@/components/PurchaseModal';
import LunaPurchaseModal from '@/components/LunaPurchaseModal';
import Snowfall from '@/components/Snowfall';
import { siteConfig } from '@/config/siteConfig';
import TokenPurchase from '@/components/TokenPurchase';

const HomePage = () => {
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);
  const [isLunaModalOpen, setIsLunaModalOpen] = useState(false);
  const showSnow = siteConfig.theme.season === 'winter' && siteConfig.theme.colors.winter.snowEffect;

  return (
    <>
      <Helmet>
        <title>{siteConfig.name} - {siteConfig.title}</title>
        <meta name="description" content={siteConfig.subtitle} />
      </Helmet>
      {showSnow && <Snowfall />}
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero onLunaPurchaseClick={() => setIsLunaModalOpen(true)} />
        <Features />
        <TokenPurchase onPurchaseClick={() => setIsTokenModalOpen(true)} />
        <DiscordWidget />
        <Reviews />
        <Footer />
      </div>
      <PurchaseModal isOpen={isTokenModalOpen} onClose={() => setIsTokenModalOpen(false)} />
      <LunaPurchaseModal isOpen={isLunaModalOpen} onClose={() => setIsLunaModalOpen(false)} />
    </>
  );
};

export default HomePage;