import { Metadata } from "next";
import { MenstrualCalculator } from "@/components/menstrual/menstrual-calculator";

export const metadata: Metadata = {
  title: "月经计算器_经期计算器_排卵期计算_安全期计算2024-在线计算器",
  description: "专业的月经计算器，支持经期预测、排卵期计算、安全期推算。提供月经周期分析、经期记录、健康提醒等功能，帮助女性科学了解生理周期，合理安排生活。包含经期护理建议、饮食指导和健康知识。",
  keywords: [
    "月经计算器",
    "经期计算器",
    "排卵期计算",
    "安全期计算",
    "月经周期",
    "经期预测",
    "排卵日计算",
    "备孕计算器",
    "经期记录",
    "女性健康"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/yuejing"
  },
  openGraph: {
    title: "月经计算器_经期计算器_排卵期计算_安全期计算2024",
    description: "专业的月经计算器，提供经期预测和健康指导",
    url: "https://yourcalculator.com/yuejing",
    type: "website"
  }
};

export default function MenstrualPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-gray-900 dark:via-rose-950 dark:to-purple-950 py-8">
      <MenstrualCalculator />
    </div>
  );
}