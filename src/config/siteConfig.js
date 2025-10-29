export const siteConfig = {
  name: "LUNA",
  title: "ULTIMATE DISCORD WEB RAIDER",
  subtitle: "LUNA elevates your raiding experience with the latest premium features at your fingertips.",
  
  links: {
    login: "https://panel.lunaraids.vip/login",
    trustpilot: "https://uk.trustpilot.com/review/lunaraids.vip",
    discord: "https://discord.gg/2EjgYFK5RA",
    discordWidgetId: "1382031759834615868",
    sellApp: "https://lunatools.mysellauth.com/product/discord-tokens-fresh",
    lunaPurchase: "https://lunatoolsio.sell.app/product/product-1744163763?quantity=1"
  },

  alert: {
    enabled: true,
    message: "🎉 Special Offer! Get 10% off on all purchases this week only!",
    link: "" // Optional: "https://your-link.com"
  },
  
  trustpilot: {
    rating: 4.5,
    maxRating: 5
  },
  
  theme: {
    season: "summer", // "winter", "spring", "summer", "fall"
    colors: {
      winter: {
        primary: "from-blue-600 to-cyan-600",
        glow: "rgba(59, 130, 246, 0.5)",
        accent: "cyan",
        snowEffect: true // Toggle snow effect for winter
      },
      spring: {
        primary: "from-green-600 to-emerald-600",
        glow: "rgba(34, 197, 94, 0.5)",
        accent: "emerald"
      },
      summer: {
        primary: "from-orange-600 to-yellow-600",
        glow: "rgba(249, 115, 22, 0.5)",
        accent: "orange"
      },
      fall: {
        primary: "from-red-600 to-orange-600",
        glow: "rgba(239, 68, 68, 0.5)",
        accent: "red"
      }
    }
  },
  
  purchase: {
    inStock: false,
    pricePerToken: 0.25,
    outOfStockMessage: "Currently out of stock. Please check back later!",
    inStockMessage: "Tokens available now!"
  },
  
  status: {
    operational: false,
    message: "Some services are currently undergoing scheduled maintenance.",
    services: [
      { name: "API", status: "operational" },
      { name: "Dashboard", status: "operational" },
      { name: "LUNA V9", status: "operational" },
      { name: "LUNA V8", status: "down" },
      { name: "Payment Processing", status: "operational" }
    ]
  },
  
  features: [
    {
      title: "WEB-BASED ACCESS",
      description: "Access LUNA from anywhere with our cloud-based platform",
      icon: "Globe"
    },
    {
      title: "FRIENDLY USER INTERFACE",
      description: "Intuitive design that makes raiding effortless",
      icon: "Smile"
    },
    {
      title: "CONSISTENT UPDATES",
      description: "Regular updates with new features and improvements",
      icon: "RefreshCw"
    },
    {
      title: "SAFETY",
      description: "Advanced security measures to protect your account",
      icon: "Shield"
    },
    {
      title: "EXCELLENT SUPPORT",
      description: "24/7 customer support ready to help you",
      icon: "Headphones"
    },
    {
      title: "DISCORD COMMUNITY",
      description: "Join our thriving community of users",
      icon: "Users"
    },
    {
      title: "EMAIL VERIFIED",
      description: "Supports email-verified tokens for enhanced access.",
      icon: "MailCheck"
    },
    {
      title: "PHONE VERIFIED",
      description: "Supports phone-verified tokens for maximum trust.",
      icon: "Phone"
    }
  ],
  
  reviews: [
    {
      name: "DANTE",
      rating: 5,
      text: "For a one time purchase, it is a standout piece of software compared to other subscription based tools. Luna, once being taught how to use it a bit and getting over the learning curve, is simple to use and understand. The owner of the tool and his customer support is some of the best I've experienced with any software, period, and is the reason as to why I have been able to use and learn Luna so well. The only feature I would want out of Luna would be a MacOS port, but other than that, the software is great. Has been a pleasure to use."
    },
    {
      name: "Dev F",
      rating: 5,
      text: "I found this tool to be very useful in aiding my discord experience. The customer service was top tier, hands down the main reason i was able to learn so fast was how much help i received from the owner, I've never had this experience with any other software. Luna is an amazing tool to use, i recommend it to everyone that i know. I truly have no issues with it other than wishing it was compatible on mobile. 10/10 overall a great experience."
    }
  ],
  
  footer: {
    description: "A powerful cloud-based Discord raiding and advertising tool for your business. LUNA is a cutting-edge technology company specializing in automation and robotics.",
    copyright: "© 2025 LUNA. All rights reserved.",
    disclaimer: "Not affiliated with Discord.com. Images belong to respected owners."
  },
  
  termsOfService: {
    lastUpdated: "January 1, 2025",
    sections: [
      {
        title: "1. GENERAL PROVISIONS",
        content: "The Agreement shall enter into force on the date of posting it on the Company website. \nChanges made by the Company in the Agreement shall enter into force immediately from the date of posting on its website of the new version of the Agreement. The user must periodically review current version of the Agreement. Current version of the Agreement is always posted on the Company website lunaraids.com/tos. User accepts the terms of the Agreement: By purchasing the Company software on the Company website; Or starting use of the service (its separate functions) provided by the Company software or website. If the user does not agree with the terms of this Agreement, he/she shall immediately cease using the services or website of the Company."
      },
      {
        title: "2. Use License",
        content: "Permission is granted to temporarily use LUNA for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
      },
      {
        title: "3. Disclaimer",
        content: "LUNA is provided 'as is'. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
      },
      {
        title: "4. Limitations",
        content: "In no event shall LUNA or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use LUNA."
      },
      {
        title: "5. Account Termination",
        content: "We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."
      },
      {
        title: "6. Prohibited Activities",
        content: "You may not use LUNA for any illegal or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction."
      },
      {
        title: "7. Modifications",
        content: "We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect."
      },
      {
        title: "8. Contact Information",
        content: "If you have any questions about these Terms, please contact us through our Discord server."
      }
    ]
  }
};
