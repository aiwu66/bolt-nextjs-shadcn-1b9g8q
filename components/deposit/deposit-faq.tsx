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
    question: "定期存款提前支取怎么办？",
    answer: "提前支取规则：\n1. 按照活期利率计算已存期间利息\n2. 部分银行有最短存期要求\n3. 可能影响相关优惠政策\n4. 建议合理规划存款期限"
  },
  {
    question: "存款利息何时发放？",
    answer: "利息发放时间：\n1. 定期存款：到期一次性支付\n2. 活期存款：每季度末结息\n3. 大额存单：可选择付息方式\n4. 通知存款：支取时结息"
  },
  {
    question: "存款保险保障范围？",
    answer: "保障说明：\n1. 最高保障限额50万元\n2. 包括本金和利息\n3. 覆盖人民币和外币存款\n4. 适用于所有开展存款业务的银行"
  },
  {
    question: "大额存单和定期存款的区别？",
    answer: "主要区别：\n1. 起存金额要求不同\n2. 利率水平差异\n3. 是否可转让\n4. 提前支取规则不同\n5. 产品期限灵活性"
  },
  {
    question: "如何获得更高存款收益？",
    answer: "提升收益方法：\n1. 选择大额存单\n2. 关注结构性存款\n3. 合理搭配存款期限\n4. 把握优惠活动\n5. 对比不同银行利率"
  },
  {
    question: "通知存款如何计算利息？",
    answer: "计算方法：\n1. 一天通知存款利率1.85%\n2. 七天通知存款利率2.025%\n3. 按实际存期计算\n4. 支取时结息一次性支付"
  },
  {
    question: "存款利息要缴税吗？",
    answer: "税收规定：\n1. 目前个人存款利息免征利息税\n2. 企业存款利息需要缴税\n3. 政策可能随时调整\n4. 特殊产品可能有不同规定"
  },
  {
    question: "节假日存款如何计息？",
    answer: "节假日计息规则：\n1. 节假日照常计息\n2. 遇到节假日可顺延支取\n3. 顺延期间按原利率计息\n4. 具体规则以银行公告为准"
  }
];

export function DepositFAQ() {
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