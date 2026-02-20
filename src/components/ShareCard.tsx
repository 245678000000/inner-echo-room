import { useRef, useState, useCallback } from "react";
import html2canvas from "html2canvas";
import { TestConfig, TestResultDetail } from "@/lib/tests/types";
import { Button } from "@/components/ui/button";
import { Download, Share2, Copy, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShareCardProps {
  test: TestConfig;
  result: TestResultDetail;
  onClose: () => void;
}

const ShareCard = ({ test, result, onClose }: ShareCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownload = useCallback(async () => {
    if (!cardRef.current) return;
    setGenerating(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });
      const link = document.createElement("a");
      link.download = `${test.name}-${result.title}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (e) {
      console.error("生成图片失败", e);
    } finally {
      setGenerating(false);
    }
  }, [test.name, result.title]);

  const handleCopyText = useCallback(() => {
    const text = `【${test.name}】我的结果是：${result.emoji} ${result.title}\n${result.description}\n\n✨ 优势：${result.strengths.join("、")}\n💼 职业建议：${result.careerAdvice}\n💕 爱情建议：${result.loveAdvice}\n\n🌟 名人同款：${result.famousPeople.join("、")}\n\n来测测你是什么类型 👉 测测星球`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [test, result]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="w-full max-w-sm flex flex-col items-center gap-4 max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button onClick={onClose} className="self-end p-2 text-primary-foreground/80 hover:text-primary-foreground">
            <X className="w-6 h-6" />
          </button>

          {/* The card to capture */}
          <div
            ref={cardRef}
            className="w-full rounded-3xl overflow-hidden shadow-2xl"
            style={{ background: "linear-gradient(160deg, hsl(262 83% 20%), hsl(250 30% 12%), hsl(220 40% 15%))" }}
          >
            {/* Top gradient header */}
            <div
              className="px-6 pt-8 pb-6 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, hsl(262 83% 58%), hsl(220 70% 55%), hsl(330 80% 60%))" }}
            >
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/10" />

              <p className="text-xs font-medium text-white/70 tracking-widest mb-3">🪐 测测星球</p>
              <p className="text-6xl mb-3">{result.emoji}</p>
              <h2 className="text-2xl font-black text-white mb-1">{result.title}</h2>
              {result.subtitle && (
                <p className="text-sm text-white/70">{result.subtitle}</p>
              )}
              <div className="mt-3 inline-block">
                <span className={cn("px-4 py-1 rounded-full text-xs font-bold text-white", result.badgeColor)}>
                  {test.name}
                </span>
              </div>
            </div>

            {/* Content body */}
            <div className="px-6 py-5 space-y-4">
              {/* Description */}
              <div>
                <p className="text-xs font-bold text-white/50 mb-1.5 tracking-wide">📖 类型描述</p>
                <p className="text-sm text-white/80 leading-relaxed">{result.description}</p>
              </div>

              {/* Strengths */}
              <div>
                <p className="text-xs font-bold text-white/50 mb-1.5 tracking-wide">💪 你的优势</p>
                <div className="flex flex-wrap gap-1.5">
                  {result.strengths.map((s, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/85">
                      ✦ {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Famous people */}
              <div>
                <p className="text-xs font-bold text-white/50 mb-1.5 tracking-wide">🌟 名人同款</p>
                <p className="text-sm text-white/80">{result.famousPeople.join(" · ")}</p>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-white/40">长按识别二维码 · 测测你是什么类型</p>
                  <p className="text-[10px] text-white/30 mt-0.5">测测星球 · 免费心理测试</p>
                </div>
                {/* QR placeholder */}
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                  <span className="text-[8px] text-gray-400 text-center leading-tight">扫码<br/>测试</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 w-full">
            <Button
              onClick={handleDownload}
              disabled={generating}
              className="flex-1 gradient-bg border-0 text-primary-foreground"
            >
              <Download className="w-4 h-4 mr-1.5" />
              {generating ? "生成中…" : "保存图片"}
            </Button>
            <Button
              variant="outline"
              onClick={handleCopyText}
              className="flex-1 bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
            >
              {copied ? <Check className="w-4 h-4 mr-1.5" /> : <Copy className="w-4 h-4 mr-1.5" />}
              {copied ? "已复制" : "复制文案"}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ShareCard;
