import { Metadata } from "next";
import { FetalWeightCalculator } from "@/components/fetal-weight/fetal-weight-calculator";

export const metadata: Metadata = {
  title: "胎儿体重计算器_胎儿发育标准体重计算_孕周体重对照表-在线计算器",
  description: "专业的胎儿体重计算器，支持B超数据、宫高腹围、孕周等多种计算方式。提供WHO标准胎儿生长曲线，周龄体重对照表，胎儿发育标准数据，帮助准妈妈科学监测胎儿发育情况。",
  keywords: [
    "胎儿体重计算器",
    "胎儿发育标准",
    "胎儿体重对照表",
    "孕周体重计算",
    "B超胎儿体重",
    "宫高腹围计算",
    "胎儿生长曲线",
    "胎儿发育指标",
    "胎儿体重标准",
    "胎儿发育监测"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/taiertizhong"
  },
  openGraph: {
    title: "胎儿体重计算器_胎儿发育标准体重计算",
    description: "专业的胎儿体重计算器，提供多种计算方式和发育标准参考",
    url: "https://yourcalculator.com/taiertizhong",
    type: "website"
  }
};

export default function FetalWeightPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-gray-900 dark:via-rose-950 dark:to-purple-950 py-8">
      <FetalWeightCalculator />
    </div>
  );
}