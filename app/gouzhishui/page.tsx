import { Metadata } from "next";
import { VehicleTaxCalculator } from "@/components/vehicle-tax/vehicle-tax-calculator";

export const metadata: Metadata = {
  title: "车辆购置税计算器_2024最新购置税计算方法_新能源汽车免税政策-在线计算器",
  description: "专业的车辆购置税计算器，支持2024年最新税率政策，包含新能源汽车免税、二手车减税等优惠政策。提供发票价、裸车价、指导价多种计算方式，支持增值税发票抵扣，一键获取应缴税额。",
  keywords: [
    "车辆购置税计算器",
    "购置税计算器",
    "汽车购置税计算",
    "新能源汽车免税",
    "二手车购置税",
    "2024购置税政策",
    "购置税税率",
    "购置税计算方法",
    "车辆购置税新规",
    "购置税优惠政策"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/gouzhishui"
  },
  openGraph: {
    title: "车辆购置税计算器_2024最新购置税计算方法",
    description: "专业的车辆购置税计算器，支持最新税率政策，提供多种计算方式",
    url: "https://yourcalculator.com/gouzhishui",
    type: "website"
  }
};

export default function VehicleTaxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 py-8">
      <VehicleTaxCalculator />
    </div>
  );
}