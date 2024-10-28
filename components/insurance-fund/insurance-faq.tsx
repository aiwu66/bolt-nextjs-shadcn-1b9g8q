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
    question: "五险一金是强制缴纳的吗？",
    answer: "社会保险（五险）是强制性的，由《社会保险法》规定；住房公积金虽然有《住房公积金管理条例》规定，但执行力度因地区而异。企业必须为员工缴纳五险，公积金缴存则由企业根据自身情况决定。"
  },
  {
    question: "五险一金的缴费基数如何确定？",
    answer: "缴费基数的确定标准：\n1. 不低于当地最低工资标准\n2. 不超过当地平均工资3倍\n3. 一般以上年度月平均工资为基数\n4. 新入职员工可按当前工资确定"
  },
  {
    question: "五险一金可以自己缴纳吗？",
    answer: "不同险种规定不同：\n1. 养老保险：灵活就业人员可自行缴纳\n2. 医疗保险：可以个人缴纳\n3. 失业保险：需要单位参与\n4. 工伤和生育保险：必须通过单位\n5. 住房公积金：必须单位和个人共同缴纳"
  },
  {
    question: "漏缴或断缴会有什么影响？",
    answer: "主要影响：\n1. 养老金领取受影响\n2. 医疗报销可能受限\n3. 失业金可能无法领取\n4. 公积金贷款权益受损\n5. 可能影响个人征信"
  },
  {
    question: "公积金缴存比例如何选择？",
    answer: "选择建议：\n1. 考虑个人收入水平\n2. 评估购房需求\n3. 了解当地政策\n4. 权衡税收优惠\n5. 考虑企业实际情况"
  },
  {
    question: "五险一金可以一次性补缴吗？",
    answer: "补缴规定：\n1. 养老保险：部分城市允许补缴\n2. 医疗保险：通常可以补缴\n3. 失业保险：一般不允许补缴\n4. 工伤和生育：不可补缴\n5. 住房公积金：通常不允许补缴"
  },
  {
    question: "离职后五险一金如何处理？",
    answer: "处理方式：\n1. 养老保险：可以转移或保留\n2. 医疗保险：可以转移或自行缴纳\n3. 失业保险：符合条件可以领取失业金\n4. 公积金：可以支取或转移"
  },
  {
    question: "异地工作如何处理五险一金？",
    answer: "处理建议：\n1. 社保可以异地转移接续\n2. 公积金可以异地转移或异地贷款\n3. 了解新工作地政策\n4. 注意办理时限要求\n5. 保留相关凭证"
  }
];

export function InsuranceFAQ() {
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