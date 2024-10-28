import { Metadata } from "next";
import { CommercialLoanCalculatorPage } from "@/components/commercial-loan/commercial-loan-calculator-page";

export const metadata: Metadata = {
  title: "商业贷款计算器_2024最新商贷利率计算器_贷款额度计算-在线计算器",
  description: "专业的商业贷款计算器，支持最新LPR利率计算，提供2024年商贷利率参考，首套房4.2%，二套房4.5%。支持等额本息、等额本金两种还款方式，可计算月供、利息、还款总额，提供还款计划表和图表分析，帮您合理规划贷款方案。",
  keywords: [
    "商业贷款计算器",
    "商贷计算器",
    "LPR利率计算器",
    "商贷月供计算器",
    "商业贷款利率",
    "等额本息计算器",
    "等额本金计算器",
    "2024商贷计算器",
    "贷款额度计算器",
    "最新商贷利率"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/shangyedaikuan"
  },
  openGraph: {
    title: "商业贷款计算器_2024最新商贷利率计算器",
    description: "专业的商业贷款计算器，支持最新LPR利率计算，提供还款计划和图表分析",
    url: "https://yourcalculator.com/shangyedaikuan",
    type: "website"
  }
};

export default function CommercialLoanPage() {
  return <CommercialLoanCalculatorPage />;
}