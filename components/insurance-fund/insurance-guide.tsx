"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function InsuranceGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">使用指南</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>如何使用五险一金计算器？</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>选择所在城市</li>
              <li>输入月工资收入</li>
              <li>选择公积金缴存比例</li>
              <li>确认各项社保基数</li>
              <li>点击"计算"获取详细缴费明细</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>缴费基数如何确定？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>缴费基数的确定规则：</p>
              <ul className="list-disc list-inside ml-4">
                <li>最低不低于当地最低工资标准</li>
                <li>最高不超过当地平均工资3倍</li>
                <li>一般以上年度月平均工资为基数</li>
                <li>特殊情况可按实际工资确定</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>2024年最新政策解读</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">社会保险：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>养老保险：个人8%，单位16%</li>
                  <li>医疗保险：个人2%，单位8%</li>
                  <li>失业保险：个人0.5%，单位0.5%</li>
                  <li>工伤保险：单位0.2%-1.9%</li>
                  <li>生育保险：单位0.8%</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">住房公积金：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>基本比例：5%-12%</li>
                  <li>可自主选择缴存比例</li>
                  <li>部分城市有补充公积金</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>如何合理规划缴费？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>建议考虑以下因素：</p>
              <ul className="list-disc list-inside ml-4">
                <li>个人实际收入水平</li>
                <li>当地政策规定</li>
                <li>未来购房需求</li>
                <li>养老规划需求</li>
                <li>医疗保障需求</li>
              </ul>
              <p>注意事项：</p>
              <ul className="list-disc list-inside ml-4">
                <li>合理确定缴费基数</li>
                <li>关注政策变化</li>
                <li>保持缴费连续性</li>
                <li>考虑补充商业保险</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}