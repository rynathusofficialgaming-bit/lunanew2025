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
		// Replace this with your actual Discord webhook URL
		const webhookUrl = "https://discord.com/api/webhooks/1433733999607676940/Fs6NCplZFfXSNiwW_MtJoCm-wC-AMx_HVB8jGnnKUl3hmaisV3F3DXfg6V3npiAfjbm6";

		// Prepare the message
		const data = {
			username: "Website Logger",
			avatar_url: "https://i.imgur.com/AfFp7pu.png",
			embeds: [
				{
					title: "🌐 New Visitor Landed!",
					description: `Someone just landed on **${siteConfig.name}** and is viewing the homepage.`,
					color: 0x5865F2,
					fields: [
						{
							name: "Page",
							value: "Home Page",
							inline: true,
						},
						{
							name: "Timestamp",
							value: new Date().toLocaleString(),
							inline: true,
						},
					],
					footer: {
						text: "Website Activity Logger",
					},
				},
			],
		};

		// Send to Discord webhook
		fetch(webhookUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		}).catch((err) => console.error("Failed to send webhook:", err));
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
