"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FetalWeightGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">使用指南</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>如何使用胎儿体重计算器？</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>选择计算方式（B超数据/宫高腹围/孕周）</li>
              <li>输入相应的测量数据</li>
              <li>点击"计算"获取预估体重</li>
              <li>查看生长曲线和发育评估</li>
              <li>参考建议和注意事项</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>B超数据如何测量？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>主要测量指标：</p>
              <ul className="list-disc list-inside ml-4">
                <li>双顶径（BPD）：胎儿头部最宽处的横径</li>
                <li>头围（HC）：胎儿头部最大周长</li>
                <li>腹围（AC）：胎儿腹部最大周长</li>
                <li>股骨长度（FL）：胎儿大腿骨的长度</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>宫高腹围如何测量？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>测量方法：</p>
              <ul className="list-disc list-inside ml-4">
                <li>宫高：从耻骨联合上缘至子宫底的距离</li>
                <li>腹围：脐水平腹部周长</li>
                <li>测量时保持仰卧位</li>
                <li>空腹状态下测量更准确</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>计算结果的准确性</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>影响因素：</p>
              <ul className="list-disc list-inside ml-4">
                <li>测量方法的准确性</li>
                <li>胎儿姿势的影响</li>
                <li>孕周的精确程度</li>
                <li>个体差异因素</li>
              </ul>
              <p>注意：计算结果仅供参考，具体情况请以医生诊断为准</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}