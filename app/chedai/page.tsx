import { Metadata } from "next";
import { CarLoanCalculator } from "@/components/car-loan/car-loan-calculator";

export const metadata: Metadata = {
  title: "车贷计算器_2024汽车贷款计算器_月供计算器-在线计算器",
  description: "专业的汽车贷款计算器，支持等额本息、等额本金两种还款方式，可计算车贷月供、利息、还款总额。提供2024年最新车贷利率参考，支持首付比例、贷款期限自定义，并提供还款计划表和图表分析，帮您合理规划汽车贷款方案。",
  keywords: [
    "车贷计算器",
    "汽车贷款计算器",
    "车贷月供计算器",
    "汽车金融计算器",
    "等额本息计算器",
    "等额本金计算器",
    "2024车贷计算器",
    "车贷利率计算器",
    "首付计算器",
    "贷款期限计算"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/chedai"
  },
  openGraph: {
    title: "车贷计算器_2024汽车贷款计算器",
    description: "专业的汽车贷款计算器，支持等额本息、等额本金计算，提供还款计划和图表分析",
    url: "https://yourcalculator.com/chedai",
    type: "website"
  }
};

export default function CarLoanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 py-8">
      <CarLoanCalculator />
    </div>
  );
}