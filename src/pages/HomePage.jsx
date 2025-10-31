import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
		const webhookUrl = "https://discord.com/api/webhooks/1433733999607676940/Fs6NCplZFfXSNiwW_MtJoCm-wC-AMx_HVB8jGnnKUl3hmaisV3F3DXfg6V3npiAfjbm6"; // <-- Replace with your webhook URL

    const visitorId = Math.random().toString(36).substring(2, 8).toUpperCase();
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const referrer = document.referrer || "Direct Visit";
    const pageUrl = window.location.href;
    const pageTitle = document.title;
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
    const deviceType = isMobile ? "📱 Mobile" : "💻 Desktop";

    // Fetch visitor IP from ipify
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((ipData) => {
        const userIP = ipData.ip || "Unknown";

        const embed = {
          username: "Website Vistor logs",
          avatar_url: "https://i.imgur.com/AfFp7pu.png",
          embeds: [
            {
              title: "👀 New Visitor on Homepage",
              color: 0x5865F2,
              fields: [
                { name: "🌍 Page", value: `[${pageTitle}](${pageUrl})`, inline: false },
                { name: "🧭 Referrer", value: referrer, inline: false },
                { name: "📡 IP Address", value: `\`${userIP}\``, inline: false },
                { name: "💻 Device", value: `${deviceType}\n**OS:** ${platform}`, inline: true },
                { name: "🌐 Browser Info", value: `\`\`\`${userAgent}\`\`\``, inline: false },
                { name: "🕒 Timestamp", value: new Date().toLocaleString(), inline: true },
                { name: "🪶 Visitor ID", value: visitorId, inline: true },
              ],
              footer: {
                text: "Website Activity Logger",
              },
            },
          ],
        };

        // Send webhook to Discord
        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(embed),
        }).catch((err) => console.error("Failed to send webhook:", err));
      })
      .catch((err) => console.warn("Failed to fetch IP address:", err));
  }, []);

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
