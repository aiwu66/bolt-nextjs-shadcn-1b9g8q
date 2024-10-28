import { Metadata } from "next";
import { DepositCalculatorPage } from "@/components/deposit/deposit-calculator-page";

export const metadata: Metadata = {
  title: "存款计算器_2024最新存款利率计算器_定期活期计算-在线计算器",
  description: "专业的存款计算器，支持2024年最新银行存款利率，包含定期存款、活期存款、大额存单、结构性存款等多种存款方式。提供复利计算、利息计算、到期收益预测，支持多种存期和存款方式对比，助您合理规划资金收益。",
  keywords: [
    "存款计算器",
    "定期存款计算器",
    "活期存款计算器",
    "存款利率计算器",
    "复利计算器",
    "大额存单计算器",
    "2024存款利率",
    "银行存款计算",
    "存款收益计算",
    "利息计算器"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/cunkuan"
  },
  openGraph: {
    title: "存款计算器_2024最新存款利率计算器",
    description: "专业的存款计算器，支持多种存款方式，提供最新银行利率参考",
    url: "https://yourcalculator.com/cunkuan",
    type: "website"
  }
};

export default function DepositPage() {
  return <DepositCalculatorPage />;
}