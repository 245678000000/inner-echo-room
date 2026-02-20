import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { allTests } from "@/lib/tests";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const TestPlay = () => {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | string>>({});

  const test = testId ? allTests[testId] : undefined;

  if (!test) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <p className="text-6xl mb-4">😵</p>
        <h1 className="text-xl font-bold text-foreground mb-2">测试不存在</h1>
        <p className="text-muted-foreground mb-6">找不到该测试，可能链接有误</p>
        <Link to="/">
          <Button><Home className="w-4 h-4 mr-2" />返回首页</Button>
        </Link>
      </div>
    );
  }

  const questions = test.questions;
  const total = questions.length;
  const question = questions[currentIndex];
  const progress = ((currentIndex + 1) / total) * 100;
  const currentAnswer = answers[question.id];

  const handleSelect = (value: number | string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
    // Auto-advance after short delay
    setTimeout(() => {
      if (currentIndex < total - 1) {
        setCurrentIndex((i) => i + 1);
      }
    }, 300);
  };

  const handleFinish = () => {
    const resultKey = test.calculateResult(answers);
    navigate(`/result/${testId}/${resultKey}`);
  };

  const isLastQuestion = currentIndex === total - 1;
  const allAnswered = Object.keys(answers).length === total;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border/50 px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => currentIndex > 0 ? setCurrentIndex(i => i - 1) : navigate(-1)} className="text-muted-foreground">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium text-foreground">{test.name}</span>
          <span className="text-xs text-muted-foreground">{currentIndex + 1}/{total}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <div className="px-4 pt-8 max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-lg font-semibold text-foreground mb-6 leading-relaxed">
              {question.text}
            </p>

            <div className="space-y-3">
              {question.options.map((opt, i) => {
                const isSelected = currentAnswer === opt.value;
                return (
                  <motion.button
                    key={i}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSelect(opt.value)}
                    className={cn(
                      "w-full text-left px-4 py-3.5 rounded-xl border-2 transition-all text-sm",
                      isSelected
                        ? "border-primary bg-primary/10 text-foreground font-medium"
                        : "border-border bg-card text-foreground hover:border-primary/50"
                    )}
                  >
                    {question.type === "likert" && (
                      <span className="inline-block w-6 h-6 rounded-full bg-muted text-center text-xs leading-6 mr-3 font-bold">
                        {opt.value}
                      </span>
                    )}
                    {opt.text}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex gap-3 mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentIndex((i) => i - 1)}
            disabled={currentIndex === 0}
            className="flex-1"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> 上一题
          </Button>

          {isLastQuestion ? (
            <Button
              onClick={handleFinish}
              disabled={!allAnswered}
              className="flex-1"
            >
              查看结果 🎉
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={() => setCurrentIndex((i) => i + 1)}
              disabled={currentAnswer === undefined}
              className="flex-1"
            >
              下一题 <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>

        {/* Unanswered hint on last question */}
        {isLastQuestion && !allAnswered && (
          <p className="text-xs text-muted-foreground text-center mt-3">
            还有 {total - Object.keys(answers).length} 题未作答
          </p>
        )}
      </div>
    </div>
  );
};

export default TestPlay;
