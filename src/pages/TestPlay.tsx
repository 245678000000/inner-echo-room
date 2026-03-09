import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useCallback, useRef } from "react";
import { allTests } from "@/lib/tests";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const TestPlay = () => {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | string>>({});
  const [direction, setDirection] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const test = testId ? allTests[testId] : undefined;

  const total = test?.questions.length ?? 0;

  const goNext = useCallback(() => {
    if (currentIndex < total - 1) {
      setDirection(1);
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex, total]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((i) => i - 1);
    }
  }, [currentIndex]);

  if (!test) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <motion.p
          className="text-6xl mb-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          😵
        </motion.p>
        <h1 className="text-xl font-bold text-foreground mb-2">测试不存在</h1>
        <p className="text-muted-foreground mb-6">找不到该测试，可能链接有误</p>
        <Link to="/">
          <Button><Home className="w-4 h-4 mr-2" />返回首页</Button>
        </Link>
      </div>
    );
  }

  const questions = test.questions;
  const question = questions[currentIndex];
  const progress = ((currentIndex + 1) / total) * 100;
  const currentAnswer = answers[question.id];
  const answeredCount = Object.keys(answers).length;

  const handleSelect = (value: number | string) => {
    const isNewAnswer = answers[question.id] === undefined;
    setAnswers((prev) => ({ ...prev, [question.id]: value }));

    // Auto-advance only on new answers
    if (isNewAnswer && currentIndex < total - 1) {
      setTimeout(() => {
        setDirection(1);
        setCurrentIndex((i) => i + 1);
      }, 400);
    }
  };

  const handleFinish = () => {
    setShowConfetti(true);
    setTimeout(() => {
      const resultKey = test.calculateResult(answers);
      navigate(`/result/${testId}/${resultKey}`);
    }, 800);
  };

  const isLastQuestion = currentIndex === total - 1;
  const allAnswered = answeredCount === total;

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 120 : -120, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -120 : 120, opacity: 0, scale: 0.95 }),
  };

  return (
    <div className="min-h-screen bg-background pb-24 overflow-hidden" ref={containerRef}>
      {/* Confetti overlay */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-7xl mb-3">🎉</p>
              <p className="text-lg font-bold text-foreground">正在生成结果…</p>
            </motion.div>
            {/* Floating particles */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: `hsl(${[262, 220, 330][i % 3]} 80% 60%)`,
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: [0, 1, 0],
                  y: [0, -80 - Math.random() * 100],
                  x: [(Math.random() - 0.5) * 100],
                  opacity: [1, 1, 0],
                }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header with animated progress */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border/50 px-4 py-3">
        <div className="flex items-center justify-between mb-2.5">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => currentIndex > 0 ? goPrev() : navigate(-1)}
            className="text-muted-foreground p-1"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <span className="text-sm font-medium text-foreground">{test.name}</span>
          <span className="text-xs text-muted-foreground font-mono">{currentIndex + 1}/{total}</span>
        </div>
        {/* Custom animated progress bar */}
        <div className="relative h-2 w-full rounded-full bg-muted overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full gradient-bg"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          />
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-80px", "400px"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
          />
        </div>
        {/* Milestone dots */}
        <div className="flex justify-between mt-1.5 px-0.5">
          {[0, 25, 50, 75, 100].map((milestone) => (
            <motion.div
              key={milestone}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-colors duration-300",
                progress >= milestone ? "bg-primary" : "bg-muted-foreground/20"
              )}
              animate={progress >= milestone ? { scale: [1, 1.5, 1] } : {}}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Question area */}
      <div className="px-4 pt-6 max-w-lg mx-auto">
        {/* Question number badge */}
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          key={`badge-${currentIndex}`}
        >
          <span className="text-xs font-bold gradient-bg text-primary-foreground px-3 py-1 rounded-full">
            Q{currentIndex + 1}
          </span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">
            已答 {answeredCount}/{total}
          </span>
        </motion.div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={question.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.p
              className="text-lg font-semibold text-foreground mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {question.text}
            </motion.p>

            {question.image && (
              <motion.div
                className="mb-6 rounded-xl overflow-hidden shadow-lg border border-border/50"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
              >
                <img
                  src={question.image}
                  alt={`问题 ${question.id} 配图`}
                  className="w-full h-auto object-cover"
                  data-testid={`img-question-${question.id}`}
                />
              </motion.div>
            )}

            <div className="space-y-2.5">
              {question.options.map((opt, i) => {
                const isSelected = currentAnswer === opt.value;
                return (
                  <motion.button
                    key={`${question.id}-${i}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i + 0.15, type: "spring", stiffness: 400, damping: 25 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSelect(opt.value)}
                    className={cn(
                      "w-full text-left px-4 py-3.5 rounded-xl border-2 transition-all text-sm relative overflow-hidden group",
                      isSelected
                        ? "border-primary bg-primary/10 text-foreground font-medium shadow-md shadow-primary/10"
                        : "border-border bg-card text-foreground hover:border-primary/40 hover:shadow-sm"
                    )}
                  >
                    {/* Selection ripple */}
                    {isSelected && (
                      <motion.div
                        className="absolute inset-0 gradient-bg opacity-[0.07]"
                        initial={{ scale: 0, borderRadius: "50%" }}
                        animate={{ scale: 2, borderRadius: "0%" }}
                        transition={{ duration: 0.5 }}
                      />
                    )}

                    <span className="relative z-10 flex items-center">
                      {question.type === "likert" ? (
                        <span
                          className={cn(
                            "inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold mr-3 transition-colors",
                            isSelected
                              ? "gradient-bg text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {opt.value}
                        </span>
                      ) : (
                        <span
                          className={cn(
                            "inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold mr-3 transition-colors",
                            isSelected
                              ? "gradient-bg text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {String.fromCharCode(65 + i)}
                        </span>
                      )}
                      <span className="flex-1">{opt.text}</span>
                      {isSelected && (
                        <motion.span
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        >
                          <Check className="w-5 h-5 text-primary" />
                        </motion.span>
                      )}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <motion.div
          className="flex gap-3 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="outline"
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="flex-1 group"
          >
            <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-0.5 transition-transform" /> 上一题
          </Button>

          {isLastQuestion ? (
            <motion.div className="flex-1" whileHover={allAnswered ? { scale: 1.03 } : {}}>
              <Button
                onClick={handleFinish}
                disabled={!allAnswered}
                className="w-full gradient-bg border-0 relative overflow-hidden"
              >
                {allAnswered && (
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> 查看结果
                </span>
              </Button>
            </motion.div>
          ) : (
            <Button
              variant="outline"
              onClick={goNext}
              disabled={currentAnswer === undefined}
              className="flex-1 group"
            >
              下一题 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          )}
        </motion.div>

        {/* Unanswered hint */}
        <AnimatePresence>
          {isLastQuestion && !allAnswered && (
            <motion.p
              className="text-xs text-muted-foreground text-center mt-3"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              还有 <span className="font-bold text-primary">{total - answeredCount}</span> 题未作答
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TestPlay;
