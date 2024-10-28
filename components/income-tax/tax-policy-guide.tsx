"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const policies = [
  {
    title: "2024年最新个税政策要点",
    content: [
      "基本减除费用标准为5000元/月",
      "全年一次性奖金可选择单独计税",
      "专项附加扣除政策继续执行",
      "个人所得税年度汇算清缴制度",
    ],
  },
  {
    title: "专项附加扣除政策",
    content: [
      "子女教育：每个子女每月1000元",
      "继续教育：学历教育每月400元",
      "住房贷款利息：每月1000元",
      "住房租金：一线城市每月1500元",
      "赡养老人：独生子女每月2000元",
    ],
  },
  {
    title: "年终奖计税方式",
    content: [
      "可选择单独计税或并入当月工资计税",
      "单独计税时以年终奖除以12计算适用税率",
      "并入当月工资时需要考虑累计预扣法",
      "选择时需要考虑全年税负影响",
    ],
  },
  {
    title: "汇算清缴规定",
    content: [
      "次年3月1日至6月30日进行年度汇算",
      "可以通过网上税务局办理",
      "需要补税或申请退税",
      "注意保存相关扣除凭证",
    ],
  },
];

export function TaxPolicyGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">政策指南</h3>
      <Accordion type="single" collapsible>
        {policies.map((policy, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{policy.title}</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-2">
                {policy.content.map((item, i) => (
                  <li key={i} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
}