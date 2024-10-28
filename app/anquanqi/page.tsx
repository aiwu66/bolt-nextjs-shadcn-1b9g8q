import { Metadata } from "next";
import { SafePeriodCalculator } from "@/components/safe-period/safe-period-calculator";

export const metadata: Metadata = {
  title: "安全期计算器_排卵期计算器_女性安全期计算2024-在线计算器",
  description: "专业的安全期计算器，支持月经周期、排卵期、安全期精确计算。提供科学的避孕建议、同房指导和健康提醒，帮助女性了解生理周期，合理安排同房时间。包含经期记录、排卵监测和健康分析等功能。",
  keywords: [
    "安全期计算器",
    "排卵期计算",
    "避孕期计算",
    "月经期计算",
    "女性安全期",
    "排卵日计算",
    "同房建议",
    "月经周期",
    "经期跟踪",
    "科学避孕"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/anquanqi"
  },
  openGraph: {
    title: "安全期计算器_排卵期计算器_女性安全期计算2024",
    description: "专业的安全期计算器，提供科学的避孕建议和健康指导",
    url: "https://yourcalculator.com/anquanqi",
    type: "website"
  }
};

export default function SafePeriodPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-gray-900 dark:via-rose-950 dark:to-purple-950 py-8">
      <SafePeriodCalculator />
    </div>
  );
}