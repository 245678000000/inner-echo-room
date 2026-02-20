import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FileText, Clock } from "lucide-react";

interface TestCardProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  emoji: string;
  questionCount: number;
  duration: string;
  category: string;
  categoryLabel?: string;
  gradient: string;
}

const TestCard = ({
  id,
  title,
  subtitle,
  description,
  emoji,
  questionCount,
  duration,
  categoryLabel,
  gradient,
}: TestCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link to={`/test/${id}`} className="block">
        <div className="glass rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300 gradient-border">
          <div
            className={cn(
              "h-28 flex items-center justify-center text-5xl relative overflow-hidden",
              gradient
            )}
          >
            {/* Emoji glow circle */}
            <div className="absolute w-20 h-20 rounded-full bg-white/20 blur-xl" />
            <motion.span
              className="relative z-10 drop-shadow-lg"
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {emoji}
            </motion.span>

            {/* Category badge */}
            {categoryLabel && (
              <span className="absolute top-2.5 right-2.5 text-[10px] font-semibold bg-white/25 backdrop-blur-sm text-white px-2 py-0.5 rounded-full">
                {categoryLabel}
              </span>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-bold text-base text-foreground mb-0.5">{title}</h3>
            {subtitle && (
              <p className="text-xs text-primary/80 font-medium mb-1">{subtitle}</p>
            )}
            <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
              {description}
            </p>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <span className="bg-muted px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                <FileText className="w-2.5 h-2.5" />
                {questionCount}题
              </span>
              <span className="bg-muted px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                约{duration}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default TestCard;
