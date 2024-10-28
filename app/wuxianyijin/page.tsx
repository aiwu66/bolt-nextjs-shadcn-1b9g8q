import { Metadata } from "next";
import { InsuranceFundCalculator } from "@/components/insurance-fund/insurance-fund-calculator";

export const metadata: Metadata = {
  title: "五险一金计算器_2024最新社保公积金计算器_五险一金比例-在线计算器",
  description: "专业的五险一金计算器，支持2024年最新社保公积金缴费基数和比例。可一键计算养老保险、医疗保险、失业保险、工伤保险、生育保险和住房公积金，支持全国各大城市社保政策，提供详细的缴费明细和图表分析。",
  keywords: [
    "五险一金计算器",
    "社保计算器",
    "公积金计算器",
    "养老保险计算器",
    "医疗保险计算器",
    "2024五险一金计算器",
    "社保缴费基数",
    "公积金缴费比例",
    "社保计算方法",
    "五险一金政策"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/wuxianyijin"
  },
  openGraph: {
    title: "五险一金计算器_2024最新社保公积金计算器",
    description: "专业的五险一金计算器，支持2024年最新社保公积金政策，提供详细缴费明细",
    url: "https://yourcalculator.com/wuxianyijin",
    type: "website"
  }
};

export default function InsuranceFundPage() {
  return <InsuranceFundCalculator />;
}