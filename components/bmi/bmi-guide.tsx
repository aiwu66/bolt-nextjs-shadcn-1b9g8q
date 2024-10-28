"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function BMIGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">BMI使用指南</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>什么是BMI？</AccordionTrigger>
          <AccordionContent>
            <p>BMI（Body Mass Index）是身体质量指数的简称，是用体重公斤数除以身高米数平方得出的数字，用于评估人体胖瘦程度。计算公式：BMI = 体重(kg) / 身高(m)²</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>如何正确测量身高体重？</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li>身高测量：早晨测量，站直，目视前方</li>
              <li>体重测量：空腹，晨起排泄后，穿轻薄衣物</li>
              <li>使用可靠的测量工具，保持测量环境稳定</li>
              <li>定期测量，记录变化趋势</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>BMI标准是什么？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>中国成年人BMI标准：</p>
              <ul className="list-disc list-inside ml-4">
                <li>偏瘦：{"<18.5"}</li>
                <li>正常：18.5-23.9</li>
                <li>超重：24.0-27.9</li>
                <li>肥胖：≥28.0</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>BMI的局限性</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li>不适用于运动员和健美人士（肌肉重量大）</li>
              <li>不适用于孕妇和哺乳期妇女</li>
              <li>老年人和儿童需要特殊标准</li>
              <li>无法反映体脂分布情况</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}