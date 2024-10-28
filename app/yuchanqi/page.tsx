import { Metadata } from "next";
import { DueDateCalculator } from "@/components/due-date/due-date-calculator";

export const metadata: Metadata = {
  title: "预产期计算器_孕周计算器_准确预产期在线计算-在线计算器",
  description: "专业的预产期计算器，支持末次月经、B超检查、受孕日期等多种计算方式。提供孕周对照表、胎儿发育指标、产检时间表、营养建议，帮助准妈妈科学了解预产期和合理安排待产计划。",
  keywords: [
    "预产期计算器",
    "孕周计算器",
    "怀孕计算器",
    "预产期计算方法",
    "孕期计算",
    "怀孕周期",
    "产检时间表",
    "胎儿发育",
    "待产准备",
    "孕期指导"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/yuchanqi"
  },
  openGraph: {
    title: "预产期计算器_孕周计算器_准确预产期计算",
    description: "专业的预产期计算器，支持多种计算方式，提供完整孕期指导",
    url: "https://yourcalculator.com/yuchanqi",
    type: "website"
  }
};

export default function DueDatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-gray-900 dark:via-rose-950 dark:to-purple-950 py-8">
      <DueDateCalculator />
    </div>
  );
}