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
    question: "排卵期同房一定会怀孕吗？",
    answer: "不一定。怀孕需要多个条件：\n1. 排卵正常\n2. 精子质量良好\n3. 输卵管通畅\n4. 子宫环境适宜\n5. 整体身体状况良好"
  },
  {
    question: "为什么要测量基础体温？",
    answer: "基础体温测量的意义：\n1. 确认是否排卵\n2. 了解排卵时间\n3. 评估黄体功能\n4. 预测下次排卵\n5. 帮助诊断不孕原因"
  },
  {
    question: "排卵试纸什么时候开始测？",
    answer: "测试时间建议：\n1. 规律月经：排卵日前5-6天开始\n2. 不规则月经：提前7-8天\n3. 每天下午测试\n4. 避免饮水过多\n5. 连续测到阳性"
  },
  {
    question: "排卵期有哪些症状？",
    answer: "常见症状包括：\n1. 宫颈粘液增多\n2. 轻微腹痛\n3. 乳房胀痛\n4. 情绪波动\n5. 性欲增强"
  },
  {
    question: "安全期是怎么计算的？",
    answer: "安全期分为：\n1. 月经期安全期\n2. 排卵前安全期\n3. 排卵后安全期\n注意：不是绝对安全，仍有怀孕可能"
  },
  {
    question: "备孕期间要注意什么？",
    answer: "主要注意事项：\n1. 规律作息\n2. 均衡饮食\n3. 适量运动\n4. 戒烟限酒\n5. 补充叶酸\n6. 保持心情愉悦"
  },
  {
    question: "月经不规律怎么计算？",
    answer: "处理建议：\n1. 记录3-6个月经周期\n2. 选择最短周期计算\n3. 结合其他排卵征象\n4. 必要时就医检查\n5. 调理月经周期"
  },
  {
    question: "什么情况需要就医？",
    answer: "以下情况建议就医：\n1. 月经严重不规律\n2. 排卵期出血\n3. 排卵痛剧烈\n4. 长期未怀孕\n5. 基础体温异常"
  }
];

export function OvulationFAQ() {
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