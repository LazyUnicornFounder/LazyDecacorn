import { motion } from "framer-motion";

const categoryMessages: Record<string, { emoji: string; headline: string; subtext: string }> = {
  "Ramen Profitable Race": {
    emoji: "🍜",
    headline: "Join the Ramen Race",
    subtext: "Predict which founders hit their first $1K–$5K MRR and escape survival mode",
  },
  "MRR Race": {
    emoji: "💰",
    headline: "Join the MRR Race",
    subtext: "Predict which founders will hit their revenue milestones first",
  },
  "$100M ARR Race": {
    emoji: "💎",
    headline: "Join the $100M ARR Race",
    subtext: "Who will be the first solo founder to cross $100M in annual recurring revenue?",
  },
  "Unicorn Race": {
    emoji: "🦄",
    headline: "Join the Unicorn Race",
    subtext: "Bet on who reaches $1B valuation — solo founder style",
  },
  "Decacorn Race": {
    emoji: "🚀",
    headline: "Join the Decacorn Race",
    subtext: "Can a solo founder build a $10B company? Place your prediction",
  },
  "IPO Race": {
    emoji: "🔔",
    headline: "Join the IPO Race",
    subtext: "Which solo founder will ring the bell first? Predict who goes public",
  },
  "Acquisition Race": {
    emoji: "🤝",
    headline: "Join the Acquisition Race",
    subtext: "Predict which founders get acquired — and for how much",
  },
  "Y Combinator Race": {
    emoji: "🏁",
    headline: "Join the YC Race",
    subtext: "Predict which YC-backed solo founders will break out",
  },
  "Results": {
    emoji: "📊",
    headline: "See the Results",
    subtext: "Check how past predictions played out",
  },
};

const fallback = {
  emoji: "🔮",
  headline: "Join This Race",
  subtext: "Sign up and start making predictions",
};

const PredictionCard = ({ category, index = 0 }: { category: string; index?: number }) => {
  const msg = categoryMessages[category] || fallback;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -4, borderColor: "hsl(var(--primary))" }}
      className="border-2 border-dashed border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 min-h-[180px] cursor-pointer hover:border-primary/50 transition-colors"
    >
      <span className="text-3xl">{msg.emoji}</span>
      <h3 className="font-display font-bold text-base text-foreground">{msg.headline}</h3>
      <p className="text-sm text-muted-foreground max-w-[220px]">{msg.subtext}</p>
      <span className="text-xs font-semibold text-primary mt-1">Coming Soon →</span>
    </motion.div>
  );
};

export default PredictionCard;