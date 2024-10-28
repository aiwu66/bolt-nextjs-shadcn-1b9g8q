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
    question: "商业贷款利率是如何确定的？",
    answer: "商业贷款利率基于LPR（贷款市场报价利率）确定。首套房基准利率为4.2%，二套房为4.5%。银行可根据具体情况在此基础上上浮或下浮。"
  },
  {
    question: "LPR调整会影响已发放的贷款吗？",
    answer: "会影响。商业贷款利率会随LPR变动而调整，通常每年1月1日根据上一年度最新的LPR进行调整。具体调整规则以贷款合同约定为准。"
  },
  {
    question: "商业贷款需要什么条件？",
    answer: "主要条件包括：\n1. 具有稳定收入来源\n2. 良好的征信记录\n3. 符合银行规定的年龄要求\n4. 具备首付能力\n5. 房产需符合银行抵押要求"
  },
  {
    question: "商业贷款和公积金贷款有什么区别？",
    answer: "主要区别：\n1. 利率：商业贷款利率较高，公积金利率较低\n2. 额度：商业贷款额度较高，公积金受缴存限制\n3. 审批：商业贷款审批较快，公积金较慢\n4. 要求：商业贷款对收入要求较高"
  },
  {
    question: "可以提前还款吗？",
    answer: "可以提前还款，但需注意：\n1. 是否有提前还款违约金\n2. 提前还款金额是否有限制\n3. 是否需要提前通知银行\n4. 还款后是降低月供还是缩短期限"
  },
  {
    question: "贷款年限如何选择？",
    answer: "选择贷款年限需考虑：\n1. 月供承受能力\n2. 总利息支出\n3. 个人职业规划\n4. 年龄限制（一般不超过退休年龄）\n5. 是否有提前还款计划"
  },
  {
    question: "首付比例是多少？",
    answer: "首付比例规定：\n1. 首套房：最低20%\n2. 二套房：最低40%\n3. 具体比例可能因城市政策不同而调整\n4. 部分银行可能要求更高首付"
  },
  {
    question: "贷款审批需要多久？",
    answer: "审批时间通常为：\n1. 资料提交：1-2个工作日\n2. 银行审核：3-5个工作日\n3. 抵押办理：5-7个工作日\n4. 放款时间：1-3个工作日\n总计约2-3周"
  }
];

export function CommercialLoanFAQ() {
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