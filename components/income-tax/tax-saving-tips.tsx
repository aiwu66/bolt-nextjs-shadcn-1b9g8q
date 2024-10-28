"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const savingTips = [
  {
    title: "合理利用专项附加扣除",
    content: [
      "充分利用子女教育支出扣除（每个子女每月1000元）",
      "继续教育支出扣除（学历教育每月400元，技能培训3600元/年）",
      "住房贷款利息支出扣除（每月1000元）",
      "住房租金支出扣除（一线城市每月1500元，其他城市800-1200元）",
      "赡养老人支出扣除（独生子女每月2000元）",
    ],
  },
  {
    title: "优化年终奖发放",
    content: [
      "可以选择将年终奖单独计税或并入当月工资计税",
      "根据个人情况选择最优方案",
      "考虑年终奖发放时间对税负的影响",
      "合理规划年终奖金额",
    ],
  },
  {
    title: "合理安排收入时间",
    content: [
      "避免收入过度集中在某个月份",
      "考虑跨年度发放的影响",
      "合理安排劳务报酬收入时间",
      "注意预缴税款与汇算清缴的关系",
    ],
  },
  {
    title: "充分利用税收优惠",
    content: [
      "商业健康保险税优（每年2400元限额）",
      "企业年金、职业年金缴费",
      "科技创新人才税收优惠",
      "创业投资税收优惠",
    ],
  },
  {
    title: "合理规划薪酬结构",
    content: [
      "优化固定工资与浮动工资比例",
      "合理设置各项津贴补贴",
      "考虑非现金福利的税收影响",
      "注意各类补贴的税收处理差异",
    ],
  },
];

export function TaxSavingTips() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">个税筹划建议</h3>
      <Accordion type="single" collapsible>
        {savingTips.map((tip, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{tip.title}</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-2">
                {tip.content.map((item, i) => (
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