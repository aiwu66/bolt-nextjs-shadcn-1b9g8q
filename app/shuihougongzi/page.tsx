import { Metadata } from "next";
import { AfterTaxSalaryCalculator } from "@/components/after-tax-salary/after-tax-salary-calculator";

export const metadata: Metadata = {
  title: "税后工资计算器_2024最新工资计算器_五险一金计算-在线计算器",
  description: "专业的税后工资计算器，支持2024年最新个税税率和五险一金政策。可一键计算税前税后工资、五险一金、个人所得税，支持年终奖、加班工资、补贴等多项收入计算，提供详细的工资条明细和图表分析。",
  keywords: [
    "税后工资计算器",
    "工资计算器",
    "五险一金计算器",
    "个税计算器",
    "年终奖计算器",
    "加班工资计算器",
    "2024工资计算器",
    "工资条计算",
    "工资税收计算",
    "社保计算器"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/shuihougongzi"
  },
  openGraph: {
    title: "税后工资计算器_2024最新工资计算器",
    description: "专业的税后工资计算器，支持2024年最新个税和五险一金政策，提供详细工资条明细",
    url: "https://yourcalculator.com/shuihougongzi",
    type: "website"
  }
};

export default function AfterTaxSalaryPage() {
  return <AfterTaxSalaryCalculator />;
}