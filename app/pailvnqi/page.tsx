import { Metadata } from "next";
import { OvulationCalculator } from "@/components/ovulation/ovulation-calculator";

export const metadata: Metadata = {
  title: "排卵期计算器_在线排卵日计算_安全期计算器2024-在线计算器",
  description: "专业的排卵期计算器，支持月经周期、体温、试纸等多种计算方式。提供排卵日预测、易孕期计算、安全期推算，帮助您科学备孕，合理避孕。包含排卵期症状识别、同房建议、饮食指导等全方位建议。",
  keywords: [
    "排卵期计算器",
    "排卵日计算",
    "安全期计算器",
    "易孕期计算",
    "排卵期症状",
    "备孕计算器",
    "月经期计算",
    "排卵试纸使用",
    "体温测量",
    "备孕指导"
  ],
  alternates: {
    canonical: "https://yourcalculator.com/pailvnqi"
  },
  openGraph: {
    title: "排卵期计算器_在线排卵日计算_安全期计算器2024",
    description: "专业的排卵期计算器，提供科学的备孕和避孕指导",
    url: "https://yourcalculator.com/pailvnqi",
    type: "website"
  }
};

export default function OvulationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-gray-900 dark:via-rose-950 dark:to-purple-950 py-8">
      <OvulationCalculator />
    </div>
  );
}