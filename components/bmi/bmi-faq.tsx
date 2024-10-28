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
    question: "BMI计算结果不理想怎么办？",
    answer: "BMI偏高或偏低都需要：\n1. 保持平和心态，循序渐进调整\n2. 制定科学的饮食计划\n3. 坚持适度运动\n4. 必要时咨询专业医生\n5. 定期监测身体指标"
  },
  {
    question: "为什么BMI正常但看起来胖？",
    answer: "可能的原因：\n1. 肌肉含量较少\n2. 体脂率偏高\n3. 脂肪分布不均\n4. 体型特征差异\n建议结合体脂率、腰围等多个指标综合评估"
  },
  {
    question: "如何科学减重？",
    answer: "科学减重原则：\n1. 控制热量摄入\n2. 均衡营养搭配\n3. 规律运动锻炼\n4. 保持良好作息\n5. 避免节食、偏方\n6. 合理设定目标"
  },
  {
    question: "如何健康增重？",
    answer: "健康增重方法：\n1. 适当增加热量摄入\n2. 补充优质蛋白质\n3. 进行力量训练\n4. 保证充足睡眠\n5. 规律作息习惯\n6. 保持心情愉悦"
  },
  {
    question: "运动减肥要注意什么？",
    answer: "运动减肥注意事项：\n1. 循序渐进，避免过度\n2. 合理搭配有氧运动和力量训练\n3. 注意运动前后补充水分\n4. 保持运动强度适中\n5. 坚持长期运动习惯"
  },
  {
    question: "饮食控制有什么技巧？",
    answer: "饮食控制技巧：\n1. 定时定量进餐\n2. 细嚼慢咽\n3. 控制主食份量\n4. 增加蔬菜摄入\n5. 少吃加工食品\n6. 避免夜间进食"
  },
  {
    question: "体重不变但腰围变化怎么回事？",
    answer: "可能原因：\n1. 脂肪和肌肉比例变化\n2. 运动方式不当\n3. 饮食结构问题\n4. 生活习惯改变\n建议：加强核心训练，注意饮食均衡"
  },
  {
    question: "节食减肥有什么危害？",
    answer: "节食危害：\n1. 影响基础代谢\n2. 导致营养不良\n3. 引起内分泌失调\n4. 容易反弹\n5. 影响身体机能\n6. 可能诱发疾病"
  }
];

export function BMIFAQ() {
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