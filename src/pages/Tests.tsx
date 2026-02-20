import { useState } from "react";
import { motion } from "framer-motion";
import TestCard from "@/components/TestCard";
import { testList, categories } from "@/lib/tests-data";
import { cn } from "@/lib/utils";

const Tests = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTests =
    activeCategory === "all"
      ? testList
      : testList.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="px-4 md:px-8 max-w-4xl mx-auto pt-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl font-black text-foreground mb-1">全部测试</h1>
          <p className="text-sm text-muted-foreground mb-6">
            选择一个测试，开启自我探索之旅 ✨
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                activeCategory === cat.key
                  ? "gradient-bg text-white shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Test grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTests.map((test, i) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <TestCard {...test} />
            </motion.div>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-4xl mb-3">🔍</p>
            <p>该分类暂无测试，敬请期待~</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tests;
