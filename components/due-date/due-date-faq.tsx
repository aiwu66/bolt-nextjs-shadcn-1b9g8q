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
    question: "预产期计算结果准确吗？",
    answer: "预产期计算结果仅供参考：\n1. 正常分娩时间在预产期前后两周都属正常\n2. 实际分娩时间受多种因素影响\n3. B超检查结果更准确\n4. 建议结合多种方式综合判断"
  },
  {
    question: "为什么会有不同的预产期计算方法？",
    answer: "不同计算方法各有优势：\n1. 末次月经法：最常用，但需月经规律\n2. 受孕日期法：适合知道确切受孕时间的情况\n3. B超检查法：最准确，但需要进行B超检查\n4. 建议结合实际情况选择合适方法"
  },
  {
    question: "什么是足月分娩？",
    answer: "足月分娩的定义：\n1. 妊娠37-42周的分娩\n2. 胎儿各器官发育成熟\n3. 是最理想的分娩时间\n4. 可以自然分娩或剖宫产"
  },
  {
    question: "如何判断临产征兆？",
    answer: "主要临产征兆包括：\n1. 规律宫缩（每隔3-5分钟）\n2. 见红（粘液血性分泌物）\n3. 破水（羊水流出）\n4. 腰酸加重\n出现以上情况应及时就医"
  },
  {
    question: "产检的重要性是什么？",
    answer: "产检的重要性：\n1. 及时发现异常情况\n2. 监测胎儿发育状况\n3. 评估孕妇健康状况\n4. 指导孕期保健\n5. 制定分娩计划"
  },
  {
    question: "孕期饮食有什么注意事项？",
    answer: "孕期饮食建议：\n1. 均衡营养，适量增重\n2. 补充叶酸、铁剂等营养素\n3. 避免生冷、刺激性食物\n4. 少量多餐\n5. 注意食品安全"
  },
  {
    question: "哪些情况需要立即就医？",
    answer: "需要立即就医的情况：\n1. 阴道出血\n2. 持续腹痛\n3. 胎动异常\n4. 高烧\n5. 破水\n出现以上症状应立即就医"
  },
  {
    question: "如何选择分娩医院？",
    answer: "选择分娩医院考虑因素：\n1. 医院等级和设施\n2. 产科专家团队\n3. 急救能力\n4. 交通便利程度\n5. 费用预算"
  }
];

export function DueDateFAQ() {
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