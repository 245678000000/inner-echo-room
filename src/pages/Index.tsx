import { Button } from "@/components/ui/button";
import TestCard from "@/components/TestCard";
import { testList } from "@/lib/tests-data";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const floatingEmojis = ["🧠", "💜", "✨", "🔮", "💫", "🌙"];

const Index = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_70%)]" />

        {/* Floating emojis */}
        {floatingEmojis.map((emoji, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl md:text-3xl opacity-40 select-none"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
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
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
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
                className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-8 h-12 text-base shadow-xl shadow-black/10"
              >
                开始探索
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Popular Tests */}
      <section className="px-4 md:px-8 max-w-4xl mx-auto -mt-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            🔥 热门测试
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testList.map((test, i) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <TestCard {...test} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Disclaimer */}
      <section className="px-4 md:px-8 max-w-4xl mx-auto mt-12 mb-8">
        <div className="glass rounded-2xl p-4 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed">
            ⚠️ 本站所有测试仅供娱乐参考和自我探索，不构成专业心理诊断。
            如有心理健康困扰，请及时咨询专业心理医生或拨打心理援助热线。
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
