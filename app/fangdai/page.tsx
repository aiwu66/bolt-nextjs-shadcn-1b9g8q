import { Metadata } from "next";
import { MortgageCalculatorPage } from "@/components/mortgage/mortgage-calculator-page";

export const metadata: Metadata = {
  title: "房贷计算器_2024最新房贷利率计算器_等额本息等额本金计算-在线计算器",
  description: "专业的房贷计算器，支持商业贷款、公积金贷款、组合贷款计算，可选等额本息、等额本金两种还款方式。提供2024年最新房贷利率，首套房4.2%，二套房4.5%，公积金3.1%。支持月供、利息、还款总额计算，还款计划表生成，帮您轻松规划房贷。",
  keywords: [
    "房贷计算器",
    "房贷利率计算器",
    "商业贷款计算器",
    "公积金贷款计算器",
    "等额本息计算器",
    "等额本金计算器",
    "房贷月供计算器",
    "组合贷款计算器",
    "2024房贷计算器",
    "最新房贷利率"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/fangdai"
  },
  openGraph: {
    title: "房贷计算器_2024最新房贷利率计算器",
    description: "专业的房贷计算器，支持商业贷款、公积金贷款计算，提供2024年最新房贷利率参考",
    url: "https://yourcalculator.com/fangdai",
    type: "website"
  }
};

export default function FangdaiPage() {
  return <MortgageCalculatorPage />;
}