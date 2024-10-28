import { Metadata } from "next";
import { BMICalculator } from "@/components/bmi/bmi-calculator";

export const metadata: Metadata = {
  title: "BMI计算器_标准体重计算器_身体质量指数计算-在线计算器",
  description: "专业的BMI计算器，支持多种计算方式，包括成人BMI、儿童青少年BMI、体脂率、标准体重计算等。提供详细的健康评估报告、饮食建议和运动指导，帮助您科学管理体重，预防疾病。",
  keywords: [
    "BMI计算器",
    "体重指数计算",
    "标准体重计算",
    "体脂率计算器",
    "健康体重计算",
    "儿童BMI计算",
    "成人BMI计算",
    "体重评估",
    "减肥计算器",
    "健康指数"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/bmi"
  },
  openGraph: {
    title: "BMI计算器_标准体重计算器",
    description: "专业的BMI计算器，提供全面的健康评估和个性化建议",
    url: "https://yourcalculator.com/bmi",
    type: "website"
  }
};

export default function BMIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-emerald-950 dark:to-teal-950 py-8">
      <BMICalculator />
    </div>
  );
}