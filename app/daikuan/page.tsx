import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Wallet } from "lucide-react";

const calculators = [
  {
    title: "房贷计算器",
    description: "计算房贷月供、总利息、还款期数",
    href: "/fangdai",
  },
  {
    title: "商业贷款计算器",
    description: "计算商业贷款的月供和总利息",
    href: "/shangyedaikuan",
  },
  {
    title: "车贷计算器",
    description: "计算汽车贷款的月供和总利息",
    href: "/chedai",
  },
  {
    title: "公积金贷款计算器",
    description: "估算公积金贷款额度及月供",
    href: "/gongjijin",
  },
  {
    title: "个人所得税计算器",
    description: "根据收入计算应缴个税",
    href: "/gerensuodeshui",
  },
  {
    title: "税后工资计算器",
    description: "计算扣税和社保后的实际工资",
    href: "/shuihougongzi",
  },
  {
    title: "五险一金计算器",
    description: "计算社保和公积金缴费金额",
    href: "/wuxianyijin",
  },
  {
    title: "存款计算器",
    description: "计算不同利率下的存款收益",
    href: "/cunkuan",
  },
  {
    title: "购置税计算器",
    description: "计算购车的购置税",
    href: "/gouzhishui",
  },
];

export const metadata = {
  title: "贷款与税务计算器 - 在线计算器",
  description: "提供房贷、车贷、个税等多种贷款和税务相关的计算工具",
};

export default function DaikuanPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Wallet className="w-16 h-16 mx-auto mb-4 text-green-600 dark:text-green-400" />
        <h1 className="text-3xl font-bold mb-2">贷款与税务计算器</h1>
        <p className="text-muted-foreground">
          提供专业的贷款计算和税务计算工具，帮助您做出明智的财务决策
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {calculators.map((calculator) => (
          <Link
            key={calculator.href}
            href={calculator.href}
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-200">
              <h2 className="text-xl font-semibold mb-2">{calculator.title}</h2>
              <p className="text-muted-foreground">{calculator.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}