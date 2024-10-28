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
    question: "如何计算个人所得税？",
    answer: "个人所得税计算步骤：\n1. 计算应纳税所得额 = 收入 - 基本减除费用 - 专项扣除 - 专项附加扣除\n2. 确定适用税率和速算扣除数\n3. 计算应纳税额 = 应纳税所得额 × 适用税率 - 速算扣除数"
  },
  {
    question: "什么是专项附加扣除？",
    answer: "专项附加扣除包括：\n1. 子女教育（每月1000元/子女）\n2. 继续教育（学历教育每月400元）\n3. 住房贷款利息（每月1000元）\n4. 住房租金（一线城市每月1500元）\n5. 赡养老人（独生子女每月2000元）"
  },
  {
    question: "年终奖如何计税？",
    answer: "年终奖计税有两种方式：\n1. 单独计税：年终奖÷12，按月工资对应税率计算\n2. 并入当月工资计税：与当月工资合并后按累计预扣法计算\n建议根据实际情况选择对自己更有利的方式"
  },
  {
    question: "劳务报酬如何计税？",
    answer: "劳务报酬计税规则：\n1. 先扣除费用（收入×20%~40%）\n2. 剩余金额按3级超额累进税率计算\n- 不超过2万元，20%\n- 2-5万元，30%\n- 超过5万元，40%"
  },
  {
    question: "如何节省个人所得税？",
    answer: "合法节税方法：\n1. 充分利用专项附加扣除\n2. 合理安排年终奖发放时间\n3. 选择最优的计税方式\n4. 合理规划收入结构\n5. 利用税收优惠政策"
  },
  {
    question: "个税申报需要注意什么？",
    answer: "申报注意事项：\n1. 及时收集并保存相关凭证\n2. 准确填报各项扣除信息\n3. 注意申报截止时间\n4. 确保信息真实准确\n5. 妥善保管申报记录"
  },
  {
    question: "什么情况需要汇算清缴？",
    answer: "需要汇算清缴的情况：\n1. 年度内任职受雇于两个以上单位\n2. 有境外所得\n3. 取得劳务报酬等综合所得\n4. 专项附加扣除信息需要更正\n汇算时间为次年3月1日至6月30日"
  },
  {
    question: "社保和公积金如何影响个税？",
    answer: "影响方式：\n1. 属于专项扣除范围\n2. 在计算应纳税所得额前扣除\n3. 降低实际税负\n4. 缴费基数会影响扣除金额\n建议合理确定缴费基数"
  }
];

export function TaxFAQ() {
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