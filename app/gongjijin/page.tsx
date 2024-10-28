import { Metadata } from "next";
import { HousingFundCalculatorPage } from "@/components/housing-fund/housing-fund-calculator-page";

export const metadata: Metadata = {
  title: "公积金贷款计算器_2024最新公积金利率计算器_月供计算-在线计算器",
  description: "专业的公积金贷款计算器，提供2024年最新公积金贷款利率3.1%计算，支持等额本息、等额本金两种还款方式。可计算公积金贷款额度、月供、利息、还款总额，提供还款计划表和图表分析，帮您合理规划公积金贷款方案。",
  keywords: [
    "公积金贷款计算器",
    "住房公积金计算器",
    "公积金贷款利率",
    "公积金月供计算器",
    "等额本息计算器",
    "等额本金计算器",
    "2024公积金计算器",
    "公积金贷款额度",
    "公积金还款计划",
    "最新公积金利率"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/gongjijin"
  },
  openGraph: {
    title: "公积金贷款计算器_2024最新公积金利率计算器",
    description: "专业的公积金贷款计算器，提供2024年最新公积金贷款利率计算，支持还款计划和图表分析",
    url: "https://yourcalculator.com/gongjijin",
    type: "website"
  }
};

export default function HousingFundPage() {
  return <HousingFundCalculatorPage />;
}