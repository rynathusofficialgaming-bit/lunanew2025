import { siteConfig } from '@/config/siteConfig';

export const useTheme = () => {
  const currentSeason = siteConfig.theme.season;
  const themeColors = siteConfig.theme.colors[currentSeason];

  return {
    season: currentSeason,
    gradientClass: themeColors.primary,
    glowColor: themeColors.glow,
    accentColor: themeColors.accent,
  };
};