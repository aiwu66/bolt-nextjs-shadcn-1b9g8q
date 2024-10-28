"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const deductions = [
  {
    title: "专项扣除",
    content: [
      "基本养老保险（8%）",
      "基本医疗保险（2%）",
      "失业保险（0.5%）",
      "住房公积金（5%-12%）",
    ],
  },
  {
    title: "子女教育",
    content: [
      "每个子女每月1000元",
      "学前教育至高中教育阶段",
      "包括公办和民办学校",
      "不限制子女人数",
    ],
  },
  {
    title: "继续教育",
    content: [
      "学历教育每月400元",
      "技能人员职业资格每年3600元",
      "专业技术人员职业资格每年3600元",
      "需要提供相关证明",
    ],
  },
  {
    title: "住房贷款利息",
    content: [
      "首套住房贷款每月1000元",
      "商业贷款和公积金贷款都可以",
      "夫妻双方只能一人扣除",
      "贷款合同需要本人签字",
    ],
  },
  {
    title: "住房租金",
    content: [
      "一线城市每月1500元",
      "二线城市每月1100元",
      "其他城市每月800元",
      "需要提供租赁合同",
    ],
  },
  {
    title: "赡养老人",
    content: [
      "独生子女每月2000元",
      "非独生子女分摊2000元",
      "可以约定分摊比例",
      "老人需要年满60岁",
    ],
  },
  {
    title: "大病医疗",
    content: [
      "年度医疗支出超过15000元部分",
      "需要医保目录范围内的支出",
      "与医保报销后个人负担部分",
      "年度汇算清缴时扣除",
    ],
  },
];

export function TaxDeductionGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">专项附加扣除指南</h3>
      <Accordion type="single" collapsible>
        {deductions.map((deduction, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{deduction.title}</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-2">
                {deduction.content.map((item, i) => (
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