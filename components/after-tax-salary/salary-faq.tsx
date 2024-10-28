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
    question: "五险一金包括哪些项目？",
    answer: "五险一金包括：\n1. 养老保险（8%）\n2. 医疗保险（2%）\n3. 失业保险（0.5%）\n4. 工伤保险（企业承担）\n5. 生育保险（企业承担）\n6. 住房公积金（5%-12%）"
  },
  {
    question: "个税起征点是多少？",
    answer: "2024年个人所得税起征点为5000元/月，也就是说月收入在扣除五险一金后，超过5000元的部分才需要缴纳个人所得税。"
  },
  {
    question: "社保基数如何确定？",
    answer: "社保基数确定标准：\n1. 最低不低于当地最低工资标准\n2. 最高不超过当地平均工资的3倍\n3. 一般以上年度7月1日至次年6月30日为一个年度\n4. 可以按实际工资缴纳，但要在范围内"
  },
  {
    question: "年终奖如何计税？",
    answer: "年终奖计税方式：\n1. 单独计税：年终奖÷12，按月工资的税率表计算\n2. 并入当月工资计税：与当月工资合并后按累计预扣法计算\n可以选择对自己更有利的方式"
  },
  {
    question: "专项附加扣除包括哪些？",
    answer: "专项附加扣除项目：\n1. 子女教育（1000元/月/子女）\n2. 继续教育（400元/月）\n3. 住房贷款利息（1000元/月）\n4. 住房租金（1500元/月）\n5. 赡养老人（2000元/月）"
  },
  {
    question: "公积金比例如何选择？",
    answer: "公积金缴存比例选择建议：\n1. 一般范围在5%-12%之间\n2. 建议选择最高比例12%\n3. 公积金优势：\n- 可以用于购房\n- 可以提取使用\n- 退休后可以全部领取"
  },
  {
    question: "工资条各项明细代表什么？",
    answer: "工资条主要项目：\n1. 应发工资：基本工资+奖金+津贴补贴\n2. 应扣项目：五险一金+个人所得税\n3. 实发工资：应发工资-应扣项目\n4. 其他项目根据公司具体政策可能有所不同"
  },
  {
    question: "社保断缴有什么影响？",
    answer: "社保断缴的影响：\n1. 养老保险会影响退休金\n2. 医疗保险可能影响看病报销\n3. 失业保险无法享受失业补助\n4. 可能影响购房贷款\n建议尽量保持连续缴纳"
  }
];

export function SalaryFAQ() {
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