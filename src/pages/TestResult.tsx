import { useParams, Link } from "react-router-dom";
import { allTests } from "@/lib/tests";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, RotateCcw, Star, Heart, Briefcase, AlertTriangle, Users, Sparkles, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import ShareCard from "@/components/ShareCard";

const TestResult = () => {
  const { testId, resultKey } = useParams<{ testId: string; resultKey: string }>();
  const test = testId ? allTests[testId] : undefined;
  const result = test && resultKey ? test.resultMapping[resultKey] : undefined;
  const [revealed, setRevealed] = useState(false);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!test || !result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <motion.p className="text-6xl mb-4" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>🤔</motion.p>
        <h1 className="text-xl font-bold text-foreground mb-2">结果未找到</h1>
        <p className="text-muted-foreground mb-6">可能链接有误，请重新测试</p>
        <Link to="/"><Button><Home className="w-4 h-4 mr-2" />返回首页</Button></Link>
      </div>
    );
  }

  const sectionData = [
    { title: "类型描述", icon: "📖", content: <p className="text-sm text-muted-foreground leading-relaxed">{result.description}</p> },
    {
      title: "你的优势", icon: "💪", content: (
        <ul className="space-y-2">
          {result.strengths.map((s, i) => (
            <motion.li key={i} className="flex items-start gap-2 text-sm text-foreground"
              initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
              <Star className="w-4 h-4 text-accent mt-0.5 shrink-0" />{s}
            </motion.li>
          ))}
        </ul>
      )
    },
    {
      title: "需要注意", icon: "⚡", content: (
        <ul className="space-y-2">
          {result.weaknesses.map((w, i) => (
            <motion.li key={i} className="flex items-start gap-2 text-sm text-foreground"
              initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
              <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />{w}
            </motion.li>
          ))}
        </ul>
      )
    },
    {
      title: "职业建议", icon: "💼", content: (
        <div className="flex items-start gap-2">
          <Briefcase className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground">{result.careerAdvice}</p>
        </div>
      )
    },
    {
      title: "爱情建议", icon: "💕", content: (
        <div className="flex items-start gap-2">
          <Heart className="w-4 h-4 text-accent mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground">{result.loveAdvice}</p>
        </div>
      )
    },
    {
      title: "名人同款", icon: "🌟", content: (
        <div className="flex flex-wrap gap-2">
          {result.famousPeople.map((name, i) => (
            <motion.span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-sm text-foreground"
              initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 400 }} viewport={{ once: true }}>
              <Users className="w-3 h-3 text-primary" />{name}
            </motion.span>
          ))}
        </div>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-28 overflow-hidden">
      {/* Reveal animation overlay */}
      <AnimatePresence>
        {!revealed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center gradient-bg"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="text-center" initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 1.15, 1], opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}>
              <Sparkles className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
              <p className="text-lg font-bold text-primary-foreground">揭晓你的结果</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <motion.div
        className="relative overflow-hidden px-6 pt-12 pb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {/* Animated background rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[1, 2, 3].map((ring) => (
            <motion.div key={ring} className="absolute rounded-full border border-primary/10"
              style={{ width: ring * 180, height: ring * 180 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, delay: 0.6 + ring * 0.3, repeat: Infinity, repeatDelay: 3 }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
        <div className="relative z-10">
          {/* Emoji with bounce + pulse */}
          <motion.p className="text-8xl mb-5"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.7 }}>
            {result.emoji}
          </motion.p>

          {/* Title with typewriter-ish reveal */}
          <motion.h1 className="text-3xl font-black text-foreground mb-2 gradient-text"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.9 }}>
            {result.title}
          </motion.h1>

          {result.subtitle && (
            <motion.p className="text-sm text-muted-foreground mb-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}>
              {result.subtitle}
            </motion.p>
          )}

          {/* Badge with bounce */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1] }}
            transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}>
            <Badge className={cn("text-primary-foreground px-4 py-1 text-sm", result.badgeColor)}>
              {result.title}
            </Badge>
          </motion.div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: `hsl(${[262, 220, 330][i % 3]} 80% 65%)`,
                  left: `${15 + (i * 10)}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Sections with staggered entrance */}
      <div className="px-4 max-w-lg mx-auto space-y-5">
        {sectionData.map((section, idx) => (
          <motion.div
            key={section.title}
            className="glass rounded-2xl p-5 relative overflow-hidden group"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 250, damping: 25, delay: idx * 0.08 }}
            whileHover={{ y: -2 }}
          >
            {/* Gradient accent bar */}
            <motion.div className="absolute top-0 left-0 w-full h-1 gradient-bg"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 + 0.2 }}
              style={{ transformOrigin: "left" }}
            />

            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <motion.span className="text-xl"
                initial={{ scale: 0 }} whileInView={{ scale: [0, 1.3, 1] }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 + 0.1, type: "spring" }}>
                {section.icon}
              </motion.span>
              {section.title}
            </h3>
            {section.content}
          </motion.div>
        ))}

        {/* Disclaimer */}
        <motion.div
          className="glass rounded-2xl p-4 border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-xs text-muted-foreground leading-relaxed">⚠️ {test.disclaimer}</p>
        </motion.div>

        {/* Action buttons */}
        <motion.div className="flex gap-3 pt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <Link to={`/test/${testId}`} className="flex-1">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="outline" className="w-full">
                <RotateCcw className="w-4 h-4 mr-2" />重新测试
              </Button>
            </motion.div>
          </Link>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1">
            <Button onClick={() => setShowShare(true)} className="w-full gradient-bg border-0 relative overflow-hidden">
              <motion.span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
              <span className="relative flex items-center gap-1.5">
                <Share2 className="w-4 h-4" /> 分享结果
              </span>
            </Button>
          </motion.div>
          <Link to="/" className="flex-1">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="outline" className="w-full">
                <Home className="w-4 h-4 mr-2" />首页
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Share modal */}
      {showShare && (
        <ShareCard test={test} result={result} onClose={() => setShowShare(false)} />
      )}
    </div>
  );
};

export default TestResult;
