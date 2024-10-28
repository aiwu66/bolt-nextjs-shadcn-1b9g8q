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
    question: "车贷利率一般是多少？",
    answer: "车贷利率因贷款机构不同而异：\n1. 商业银行：一般在4.35%-5.5%之间\n2. 汽车金融公司：一般在7%-12%之间\n3. 网络贷款平台：利率可能更高\n具体利率需以贷款机构实际执行标准为准。"
  },
  {
    question: "首付比例有什么规定？",
    answer: "根据监管要求：\n1. 新车最低首付比例20%\n2. 二手车最低首付比例30%\n3. 豪华车型可能要求更高首付\n4. 部分促销活动可能有零首付，但实际利率可能较高"
  },
  {
    question: "车贷期限一般是多久？",
    answer: "常见车贷期限：\n1. 12-60个月不等\n2. 新车最长可贷5年\n3. 二手车一般不超过3年\n4. 期限越长，月供越低，但总利息越高"
  },
  {
    question: "等额本息和等额本金哪个更划算？",
    answer: "两种方式各有优势：\n1. 等额本息：\n- 月供固定，便于规划\n- 前期还款压力小\n- 总利息较高\n\n2. 等额本金：\n- 月供递减\n- 总利息较低\n- 前期还款压力大"
  },
  {
    question: "提前还款需要注意什么？",
    answer: "提前还款注意事项：\n1. 是否有提前还款违约金\n2. 提前还款时间选择\n3. 部分还款还是全额还款\n4. 可能影响个人征信记录\n建议仔细阅读合同条款。"
  },
  {
    question: "车贷审批需要什么条件？",
    answer: "主要审批条件：\n1. 年龄要求：一般22-55岁\n2. 收入要求：月收入一般应超过月供3倍\n3. 信用记录良好\n4. 工作稳定，社保缴纳正常\n5. 需要提供的材料：\n- 身份证、驾驶证\n- 收入证明\n- 社保记录\n- 房产或其他资产证明（可选）"
  },
  {
    question: "选择哪种贷款机构更好？",
    answer: "不同机构特点：\n1. 商业银行：\n- 利率较低\n- 手续繁琐\n- 审批时间长\n\n2. 汽车金融公司：\n- 审批快速\n- 手续简单\n- 利率较高\n\n3. 4S店贷款：\n- 便捷\n- 可能有优惠活动\n- 需注意实际利率"
  },
  {
    question: "如何降低车贷成本？",
    answer: "降低成本建议：\n1. 多家机构对比利率\n2. 适当增加首付比例\n3. 选择合适的还款期限\n4. 关注促销活动\n5. 考虑提前还款\n6. 避免逾期，保持良好信用记录"
  }
];

export function CarLoanFAQ() {
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