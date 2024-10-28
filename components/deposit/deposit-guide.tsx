"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function DepositGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">存款计算指南</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>如何使用存款计算器？</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>选择存款类型（定期/活期）</li>
              <li>输入存款金额</li>
              <li>选择存款期限</li>
              <li>选择利率类型和具体利率</li>
              <li>选择计息方式（复利/单利）</li>
              <li>点击"计算"获取详细收益明细</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>2024年最新存款政策</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">定期存款：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>一年期基准利率1.65%</li>
                  <li>三年期基准利率2.65%</li>
                  <li>五年期基准利率2.65%</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">大额存单：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>起存金额20万元起</li>
                  <li>利率较普通定期更高</li>
                  <li>期限灵活多样</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>如何选择最优存款方案？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>建议从以下几个方面考虑：</p>
              <ul className="list-disc list-inside ml-4">
                <li>比较不同银行的利率</li>
                <li>评估资金使用计划</li>
                <li>考虑通货膨胀因素</li>
                <li>对比不同期限收益</li>
                <li>了解提前支取规则</li>
              </ul>
              <p>注意事项：</p>
              <ul className="list-disc list-inside ml-4">
                <li>留足日常备用金</li>
                <li>分散存款期限</li>
                <li>关注存款保险保障</li>
                <li>了解优惠活动政策</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>存款利息计算方法</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">单利计算：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>利息 = 本金 × 年利率 × 存期</li>
                  <li>到期本息 = 本金 + 利息</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">复利计算：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>到期本息 = 本金 × (1 + 年利率)^存期</li>
                  <li>利息 = 到期本息 - 本金</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}