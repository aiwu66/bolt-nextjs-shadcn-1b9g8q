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
    question: "车辆购置税税率是多少？",
    answer: "2024年车辆购置税基本税率为5%。但有以下特殊情况：\n1. 新能源汽车免征购置税\n2. 二手车减半征收（实际税率2.5%）\n3. 部分特殊用途车辆可能享受减免政策"
  },
  {
    question: "购置税计税依据是什么？",
    answer: "计税依据说明：\n1. 一般以车辆实际支付价格为准\n2. 包含增值税销售价格\n3. 不含可以抵扣的增值税税款\n4. 不包括运输费用等其他费用\n5. 进口车辆以完税价格为准"
  },
  {
    question: "哪些车辆免征购置税？",
    answer: "免税车辆包括：\n1. 纯电动汽车\n2. 插电式混合动力汽车\n3. 燃料电池汽车\n4. 外国驻华使馆车辆\n5. 部分特殊用途车辆（如警车、消防车等）"
  },
  {
    question: "购置税何时缴纳？",
    answer: "缴纳时间要求：\n1. 自购买之日起60日内缴纳\n2. 进口车辆需在进口证明签发之日起60日内缴纳\n3. 超期将加收滞纳金\n4. 建议在上牌前完成缴纳"
  },
  {
    question: "如何办理购置税？",
    answer: "办理流程：\n1. 准备材料：\n- 购车发票\n- 身份证明\n- 车辆合格证\n2. 选择办理方式：\n- 4S店代办\n- 税务局自行办理\n- 网上办理\n3. 获取完税证明"
  },
  {
    question: "增值税发票如何抵扣？",
    answer: "抵扣说明：\n1. 需要增值税专用发票\n2. 抵扣金额 = 发票金额÷(1+增值税税率)×增值税税率\n3. 一般增值税税率为13%\n4. 抵扣后的金额作为计税依据\n5. 个人购车通常无法抵扣增值税"
  },
  {
    question: "二手车购置税如何计算？",
    answer: "二手车计算方法：\n1. 以二手车交易发票价格为准\n2. 减半征收（税率2.5%）\n3. 最低计税价格不得低于最低计税限价\n4. 部分地区可能有特殊政策\n5. 需要提供二手车交易发票"
  },
  {
    question: "购置税是否可以退还？",
    answer: "退税规定：\n1. 符合以下情况可以退税：\n- 车辆退车\n- 交易取消\n- 重复缴纳\n2. 需要提供的材料：\n- 原完税证明\n- 退车证明\n- 相关发票\n3. 有时间限制，建议及时办理"
  }
];

export function VehicleTaxFAQ() {
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