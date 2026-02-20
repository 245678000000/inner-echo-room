import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TestCardProps {
  id: string;
  title: string;
  description: string;
  emoji: string;
  questionCount: number;
  duration: string;
  category: string;
  gradient: string;
}

const TestCard = ({
  id,
  title,
  description,
  emoji,
  questionCount,
  duration,
  gradient,
}: TestCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link to={`/test/${id}`} className="block">
        <div className="glass rounded-2xl overflow-hidden group cursor-pointer">
          <div
            className={cn("h-28 flex items-center justify-center text-5xl", gradient)}
          >
            <motion.span
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {emoji}
            </motion.span>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-base text-foreground mb-1">{title}</h3>
            <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
              {description}
            </p>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <span className="bg-muted px-2 py-0.5 rounded-full">
                {questionCount}题
              </span>
              <span className="bg-muted px-2 py-0.5 rounded-full">
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
