"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SalaryGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">工资计算指南</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>如何计算五险一金？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>五险一金的计算基数和比例：</p>
              <ul className="list-disc list-inside space-y-1">
                <li>养老保险：8%</li>
                <li>医疗保险：2%</li>
                <li>失业保险：0.5%</li>
                <li>住房公积金：5%-12%</li>
                <li>基数范围：最低不低于当地最低工资标准，最高不超过当地平均工资的3倍</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>个人所得税如何计算？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>计算步骤：</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>计算应纳税所得额 = 工资收入 - 五险一金 - 起征点(5000元)</li>
                <li>根据应纳税所得额确定税率和速算扣除数</li>
                <li>计算应纳税额 = 应纳税所得额 × 适用税率 - 速算扣除数</li>
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>2024年最新政策变化</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>个税起征点维持5000元/月</li>
                <li>社保基数将于4月1日调整</li>
                <li>继续执行专项附加扣除政策</li>
                <li>优化年终奖计税方式</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>如何合理节税？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>主要方法：</p>
              <ul className="list-disc list-inside space-y-1">
                <li>合理利用专项附加扣除</li>
                <li>优化年终奖发放时间</li>
                <li>合理安排收入结构</li>
                <li>充分利用税收优惠政策</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}