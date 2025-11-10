import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertCircle, XCircle, Wrench } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { useTheme } from '@/hooks/useTheme';

const StatusPage = () => {
  const { gradientClass } = useTheme();

  // 🟩 Send latest statuses to Discord only once every 10 minutes
  useEffect(() => {
    const webhookUrl = "https://discord.com/api/webhooks/1437444324039200820/NcbTY53lPnYOXko5iQANI-DWOe8p9Ur5LtwKr92Z_lFLVt9M8MEP84qbdQzcTm88YvUs";
    const cooldownMs = 10 * 60 * 1000; // 10 minutes
    const lastPostTime = localStorage.getItem('lastStatusPostTime');
    const now = Date.now();

    // Check if cooldown expired
    if (lastPostTime && now - parseInt(lastPostTime) < cooldownMs) {
      console.log("⏳ Cooldown active, skipping Discord update.");
      return;
    }

    const isOverallOperational = siteConfig.status.services.every(
      (s) => s.status === 'operational'
    );

    const fields = siteConfig.status.services.map((s) => ({
      name: s.name,
      value: `Status: **${s.status}**`,
      inline: true,
    }));

    const payload = {
      username: siteConfig.name + " Status Bot",
      embeds: [
        {
          title: isOverallOperational
            ? "✅ All Systems Operational"
            : "⚠️ Some Systems Affected",
          description: siteConfig.status.message || "Status update",
          color: isOverallOperational ? 0x22c55e : 0xfacc15,
          fields: fields,
          footer: {
            text: `Last updated: ${new Date().toLocaleString()}`,
          },
        },
      ],
    };

    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to send status to Discord");
        console.log("✅ Status successfully sent to Discord");
        localStorage.setItem('lastStatusPostTime', now.toString());
      })
      .catch((err) => console.error("❌ Failed to send status to Discord:", err));
  }, []);

  // ✅ Your existing UI below

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-6 h-6 text-yellow-500" />;
      case 'down':
        return (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <XCircle className="w-6 h-6 text-red-500" />
          </motion.div>
        );
      case 'maintenance':
        return (
          <motion.div
            animate={{ rotate: [0, 15, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Wrench className="w-6 h-6 text-blue-500" />
          </motion.div>
        );
      default:
        return <CheckCircle className="w-6 h-6 text-green-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'border-green-500/30 bg-green-500/5';
      case 'degraded':
        return 'border-yellow-500/30 bg-yellow-500/5';
      case 'down':
        return 'border-red-500/30 bg-red-500/5 animate-pulse';
      case 'maintenance':
        return 'border-blue-500/30 bg-blue-500/5';
      default:
        return 'border-green-500/30 bg-green-500/5';
    }
  };

  const isOverallOperational = siteConfig.status.services.every(
    (s) => s.status === 'operational'
  );

  return (
    <>
      <Helmet>
        <title>System Status - {siteConfig.name}</title>
        <meta name="description" content="Check the current status of LUNA services" />
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
                System Status
              </h1>
              <p className="text-xl text-white/60">
                Real-time status of all LUNA services
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`mb-8 p-8 rounded-2xl border ${
                isOverallOperational
                  ? 'border-green-500/30 bg-green-500/5'
                  : 'border-yellow-500/30 bg-yellow-500/5'
              } backdrop-blur-sm`}
              style={{
                boxShadow: `0 0 40px ${
                  isOverallOperational
                    ? 'rgba(34, 197, 94, 0.2)'
                    : 'rgba(249, 115, 22, 0.2)'
                }`,
              }}
            >
              <div className="flex items-center gap-4">
                {isOverallOperational ? (
                  <CheckCircle className="w-12 h-12 text-green-500" />
                ) : (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <AlertCircle className="w-12 h-12 text-yellow-500" />
                  </motion.div>
                )}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {isOverallOperational
                      ? 'All Systems Operational'
                      : 'Some Systems Affected'}
                  </h2>
                  <p className="text-white/60">{siteConfig.status.message}</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-4">
              {siteConfig.status.services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className={`p-6 rounded-xl border ${getStatusColor(
                    service.status
                  )} backdrop-blur-sm transition-all hover:scale-[1.02]`}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(service.status)}
                      <span className="text-lg font-semibold text-white">
                        {service.name}
                      </span>
                    </div>
                    <span className="text-sm text-white/60 capitalize">
                      {service.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12 text-center text-white/40 text-sm"
            >
              Last updated: {new Date('2025-10-28T10:00:00Z').toLocaleString()}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StatusPage;
