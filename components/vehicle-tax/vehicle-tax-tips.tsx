"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tips = [
  {
    title: "合理选择购车时机",
    content: [
      "关注国家优惠政策发布时间",
      "把握新能源补贴政策窗口期",
      "留意地方性优惠政策",
      "避开政策调整过渡期",
      "合理安排购车预算"
    ]
  },
  {
    title: "正确选择计税方式",
    content: [
      "准确区分不同价格类型",
      "合理使用增值税发票抵扣",
      "注意特殊车型优惠政策",
      "了解二手车计税规则",
      "关注跨地区购车政策差异"
    ]
  },
  {
    title: "规范发票管理",
    content: [
      "保管好原始购车发票",
      "验证发票真实性",
      "及时获取增值税专用发票",
      "正确填写发票信息",
      "妥善保存相关单据"
    ]
  },
  {
    title: "把握缴税时限",
    content: [
      "注意60天法定缴税期限",
      "避免产生滞纳金",
      "合理安排缴税时间",
      "提前准备缴税资金",
      "了解分期缴税政策"
    ]
  }
];

export function VehicleTaxTips() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">购置税优化建议</h3>
      <Accordion type="single" collapsible>
        {tips.map((tip, index) => (
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