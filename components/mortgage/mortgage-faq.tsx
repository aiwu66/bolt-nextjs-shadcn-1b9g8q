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
    question: "首套房和二套房的贷款利率有什么区别？",
    answer: "首套房贷款利率一般较低，目前基准利率为4.2%左右；二套房利率会上浮，通常在4.5%以上。具体利率需以当地银行实际执行标准为准。"
  },
  {
    question: "等额本息和等额本金哪个更划算？",
    answer: "等额本金总支付利息较少，但前期月供较高；等额本息月供固定，更容易规划，但总利息较高。建议根据个人经济状况选择。"
  },
  {
    question: "公积金贷款和商业贷款可以组合吗？",
    answer: "可以，这就是常说的'组合贷款'。公积金贷款利率较低（约3.1%），额度有限；商业贷款额度更高但利率较高。组合使用可以平衡成本。"
  },
  {
    question: "提前还款需要注意什么？",
    answer: "1. 要考虑是否有提前还款违约金\n2. 提前还款后可以选择缩短贷款期限或降低月供\n3. 建议在年初或月供日之前还款，这样可以少付些利息"
  },
  {
    question: "房贷年限越长越好吗？",
    answer: "贷款年限越长，月供压力越小，但支付的总利息也越多。建议根据年龄和收入状况选择合适年限，一般不超过退休年龄。"
  },
  {
    question: "可以用公积金还商业贷款吗？",
    answer: "可以，这叫'公积金贴息'。每月公积金可以用来抵扣商业贷款的还款，具体政策请咨询当地公积金中心。"
  },
  {
    question: "贷款利率上调了怎么办？",
    answer: "1. 可以考虑置换成新的贷款产品\n2. 也可以提前还部分本金，降低利息支出\n3. 或者延长贷款期限，降低月供压力"
  },
  {
    question: "房贷批下来后多久必须放款？",
    answer: "一般银行批贷后有效期为3-6个月，超过期限需要重新审批。建议在批贷后尽快办理放款手续。"
  }
];

export function MortgageFAQ() {
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