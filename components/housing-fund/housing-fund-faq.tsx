"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "公积金贷款利率是多少？",
    answer: "2024年公积金贷款利率为3.1%，低于商业贷款利率。这个利率相对稳定，不会随市场频繁波动。"
  },
  {
    question: "公积金贷款额度如何计算？",
    answer: "公积金贷款额度计算方式：\n1. 基本公式：月缴存额×12×缴存年限×城市系数\n2. 一线城市系数约为15\n3. 二三线城市系数约为12\n4. 单人最高可贷额度通常不超过120万元"
  },
  {
    question: "公积金贷款期限有多长？",
    answer: "贷款期限说明：\n1. 最长期限30年\n2. 贷款期限不得超过法定退休年龄\n3. 不同城市可能有具体限制\n4. 可以选择提前还款"
  },
  {
    question: "公积金贷款和商业贷款可以一起申请吗？",
    answer: "可以，这就是组合贷款：\n1. 公积金额度用完后可申请商业贷款\n2. 两种贷款可同时申请\n3. 各自执行各自的利率\n4. 需要分别还款"
  },
  {
    question: "公积金贷款需要什么条件？",
    answer: "主要条件包括：\n1. 连续缴存6个月以上\n2. 信用记录良好\n3. 购房合同合法有效\n4. 具备还款能力\n5. 符合当地公积金贷款政策"
  },
  {
    question: "公积金贷款可以提前还款吗？",
    answer: "可以提前还款：\n1. 一般没有提前还款违约金\n2. 可以部分还款或全部还款\n3. 提前还款后可以选择：\n- 缩短还款期限\n- 降低月供金额"
  },
  {
    question: "夫妻双方公积金可以一起使用吗？",
    answer: "可以，有两种方式：\n1. 共同申请贷款：\n- 双方公积金额度可以叠加\n- 需要共同还款责任\n2. 一方申请另一方担保：\n- 使用主贷人公积金额度\n- 配偶作为担保人"
  },
  {
    question: "公积金贷款审批需要多久？",
    answer: "审批时间说明：\n1. 材料审核：3-5个工作日\n2. 抵押办理：5-7个工作日\n3. 放款时间：3-5个工作日\n总计约2-3周时间"
  }
];

export function HousingFundFAQ() {
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