"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "月经周期不规律怎么办？",
    answer: "月经不规律的处理建议：\n1. 保持规律作息\n2. 均衡饮食\n3. 适量运动\n4. 避免过度疲劳\n5. 调节情绪压力\n如果持续不规律，建议就医检查"
  },
  {
    question: "如何判断是否正常排卵？",
    answer: "判断排卵的方法：\n1. 基础体温测量\n2. 排卵试纸检测\n3. 观察宫颈粘液变化\n4. 注意排卵期症状\n5. 使用排卵期计算器"
  },
  {
    question: "经期同房有什么影响？",
    answer: "经期同房的注意事项：\n1. 增加感染风险\n2. 可能加重经血量\n3. 影响经期卫生\n4. 可能导致炎症\n建议避免经期同房"
  },
  {
    question: "痛经怎么缓解？",
    answer: "缓解痛经的方法：\n1. 热敷腹部\n2. 适度运动\n3. 按摩腹部\n4. 保暖防寒\n5. 必要时服用止痛药\n6. 保持心情舒畅"
  },
  {
    question: "月经量过多或过少怎么办？",
    answer: "处理建议：\n1. 记录月经量变化\n2. 注意是否贫血\n3. 调整饮食结构\n4. 补充铁剂\n5. 及时就医检查"
  },
  {
    question: "经期饮食有什么讲究？",
    answer: "经期饮食建议：\n1. 补充蛋白质\n2. 多吃新鲜蔬果\n3. 避免生冷食物\n4. 少吃辛辣刺激\n5. 适量补铁补钙"
  },
  {
    question: "如何预防经期不适？",
    answer: "预防措施：\n1. 提前准备卫生用品\n2. 保持充足睡眠\n3. 避免剧烈运动\n4. 注意保暖\n5. 保持心情愉悦"
  },
  {
    question: "什么情况需要就医？",
    answer: "需要就医的情况：\n1. 经期超过7天\n2. 经量异常增多或减少\n3. 剧烈痛经\n4. 经期发热\n5. 非经期出血\n6. 月经持续不规律"
  }
];

export function MenstrualFAQ() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">常见问题</h3>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer.split('\n').map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
}