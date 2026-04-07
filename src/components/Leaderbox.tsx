import { motion } from "framer-motion";

const Leaderbox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="col-span-1 md:col-span-2 row-span-2 border-2 border-dashed border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3"
    >
      <span className="text-3xl">🏆</span>
      <h2 className="font-display text-lg font-bold text-foreground">Leaderboard</h2>
      <p className="text-sm text-muted-foreground max-w-xs">
        Be the first to climb the ranks — sign up, make predictions, and compete for the top spot.
      </p>
      <span className="text-xs font-semibold text-primary mt-1">Coming Soon →</span>
    </motion.div>
  );
};

export default Leaderbox;