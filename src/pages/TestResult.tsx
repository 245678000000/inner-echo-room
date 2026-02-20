import { useParams, Link } from "react-router-dom";
import { allTests } from "@/lib/tests";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, RotateCcw, Star, Heart, Briefcase, AlertTriangle, Users } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const TestResult = () => {
  const { testId, resultKey } = useParams<{ testId: string; resultKey: string }>();
  const test = testId ? allTests[testId] : undefined;
  const result = test && resultKey ? test.resultMapping[resultKey] : undefined;

  if (!test || !result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <p className="text-6xl mb-4">🤔</p>
        <h1 className="text-xl font-bold text-foreground mb-2">结果未找到</h1>
        <p className="text-muted-foreground mb-6">可能链接有误，请重新测试</p>
        <Link to="/">
          <Button><Home className="w-4 h-4 mr-2" />返回首页</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Hero */}
      <motion.div
        className="relative overflow-hidden px-6 pt-12 pb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
        <div className="relative z-10">
          <motion.p className="text-7xl mb-4" {...fadeUp} transition={{ delay: 0.2 }}>
            {result.emoji}
          </motion.p>
          <motion.h1 className="text-2xl font-bold text-foreground mb-2" {...fadeUp} transition={{ delay: 0.3 }}>
            {result.title}
          </motion.h1>
          {result.subtitle && (
            <motion.p className="text-sm text-muted-foreground mb-3" {...fadeUp} transition={{ delay: 0.35 }}>
              {result.subtitle}
            </motion.p>
          )}
          <motion.div {...fadeUp} transition={{ delay: 0.4 }}>
            <Badge className={cn("text-white", result.badgeColor)}>{result.title}</Badge>
          </motion.div>
        </div>
      </motion.div>

      <div className="px-4 max-w-lg mx-auto space-y-6">
        {/* Description */}
        <Section title="类型描述" icon="📖" delay={0.5}>
          <p className="text-sm text-muted-foreground leading-relaxed">{result.description}</p>
        </Section>

        {/* Strengths */}
        <Section title="你的优势" icon="💪" delay={0.6}>
          <ul className="space-y-2">
            {result.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <Star className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </Section>

        {/* Weaknesses */}
        <Section title="需要注意" icon="⚡" delay={0.65}>
          <ul className="space-y-2">
            {result.weaknesses.map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                {w}
              </li>
            ))}
          </ul>
        </Section>

        {/* Career */}
        <Section title="职业建议" icon="💼" delay={0.7}>
          <div className="flex items-start gap-2">
            <Briefcase className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground">{result.careerAdvice}</p>
          </div>
        </Section>

        {/* Love */}
        <Section title="爱情建议" icon="💕" delay={0.75}>
          <div className="flex items-start gap-2">
            <Heart className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground">{result.loveAdvice}</p>
          </div>
        </Section>

        {/* Famous */}
        <Section title="名人同款" icon="🌟" delay={0.8}>
          <div className="flex items-start gap-2">
            <Users className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-foreground">{result.famousPeople.join("、")}</p>
          </div>
        </Section>

        {/* Disclaimer */}
        <motion.div
          className="glass rounded-xl p-4 border border-border/50"
          {...fadeUp}
          transition={{ delay: 0.85 }}
        >
          <p className="text-xs text-muted-foreground leading-relaxed">
            ⚠️ {test.disclaimer}
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div className="flex gap-3 pt-2" {...fadeUp} transition={{ delay: 0.9 }}>
          <Link to={`/test/${testId}`} className="flex-1">
            <Button variant="outline" className="w-full">
              <RotateCcw className="w-4 h-4 mr-2" />重新测试
            </Button>
          </Link>
          <Link to="/" className="flex-1">
            <Button className="w-full">
              <Home className="w-4 h-4 mr-2" />返回首页
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

const Section = ({ title, icon, delay, children }: { title: string; icon: string; delay: number; children: React.ReactNode }) => (
  <motion.div
    className="glass rounded-xl p-4"
    {...fadeUp}
    transition={{ delay }}
  >
    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
      <span>{icon}</span> {title}
    </h3>
    {children}
  </motion.div>
);

export default TestResult;
