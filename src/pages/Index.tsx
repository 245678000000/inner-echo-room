import { Button } from "@/components/ui/button";
import TestCard from "@/components/TestCard";
import { testList } from "@/lib/tests-data";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Sparkles, Users, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const floatingEmojis = ["🧠", "💜", "✨", "🔮", "💫", "🌙", "🎯", "💡"];

const CountUp = ({ target }: { target: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, target]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const stats = [
  { icon: Users, label: "参与测试", value: 128463 },
  { icon: CheckCircle, label: "完成测试", value: 96721 },
  { icon: TrendingUp, label: "今日活跃", value: 1847 },
];

const Index = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-90" />
        {/* Multi-layer radial halos */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(255,200,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(100,200,255,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.15),transparent_70%)]" />

        {/* Floating emojis with enhanced animation */}
        {floatingEmojis.map((emoji, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl md:text-4xl opacity-60 select-none"
            style={{
              left: `${8 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 12, -12, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          >
            {emoji}
          </motion.span>
        ))}

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3 h-3" />
              免费 · 专业 · 好玩
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              心探 MindProbe
            </h1>
            <p className="text-base md:text-lg text-white/85 max-w-md mx-auto mb-8 leading-relaxed">
              探索你的内心宇宙 🌌
              <br />
              用科学测试了解真实的自己
            </p>
            <Link to="/tests">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-8 h-12 text-base shadow-xl shadow-black/10 animate-[pulse-glow_2s_ease-in-out_infinite]"
              >
                开始探索
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-4 md:px-8 max-w-4xl mx-auto -mt-4 relative z-20 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-4 flex items-center justify-around"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <stat.icon className="w-4 h-4 text-primary" />
              <span className="text-lg md:text-xl font-black text-foreground">
                <CountUp target={stat.value} />
              </span>
              <span className="text-[10px] text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Popular Tests */}
      <section className="px-4 md:px-8 max-w-4xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              🔥 热门测试
            </h2>
            <Link
              to="/tests"
              className="text-xs text-primary font-medium flex items-center gap-0.5 hover:underline"
            >
              查看全部
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testList.map((test, i) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: i * 0.08,
                }}
              >
                <TestCard
                  {...test}
                  subtitle={test.subtitle}
                  categoryLabel={test.categoryLabel}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Disclaimer */}
      <section className="px-4 md:px-8 max-w-4xl mx-auto mt-12 mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-4 flex gap-3 items-start"
        >
          <div className="w-1 self-stretch rounded-full bg-gradient-to-b from-primary via-secondary to-accent shrink-0" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            ⚠️ 本站所有测试仅供娱乐参考和自我探索，不构成专业心理诊断。
            如有心理健康困扰，请及时咨询专业心理医生或拨打心理援助热线。
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
