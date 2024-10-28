import { Metadata } from "next";
import { IncomeTaxCalculator } from "@/components/income-tax/income-tax-calculator";

export const metadata: Metadata = {
  title: "个人所得税计算器_2024最新个税计算器_工资薪金个税计算-在线计算器",
  description: "专业的个人所得税计算器，支持2024年最新个税税率和专项附加扣除政策。提供工资薪金、年终奖、劳务报酬等多种收入类型的个税计算，并可自动计算专项附加扣除额，准确计算应缴个税，轻松规划个人收支。",
  keywords: [
    "个人所得税计算器",
    "个税计算器",
    "工资个税计算器",
    "年终奖个税计算器",
    "专项附加扣除计算",
    "2024个税计算器",
    "个税税率表",
    "个税申报",
    "个税筹划",
    "个税政策"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/gerensuodeshui"
  },
  openGraph: {
    title: "个人所得税计算器_2024最新个税计算器",
    description: "专业的个人所得税计算器，支持2024年最新个税政策，提供多种收入类型计算",
    url: "https://yourcalculator.com/gerensuodeshui",
    type: "website"
  }
};

export default function IncomeTaxPage() {
  return <IncomeTaxCalculator />;
}