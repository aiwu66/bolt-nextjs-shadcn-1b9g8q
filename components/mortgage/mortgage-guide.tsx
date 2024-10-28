"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MortgageGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">使用指南</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>如何使用房贷计算器？</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>输入贷款金额（单位：万元）</li>
              <li>选择贷款期限（1-30年）</li>
              <li>输入年利率（参考值：首套房4.2%，二套房4.5%，公积金3.1%）</li>
              <li>选择还款方式（等额本息或等额本金）</li>
              <li>点击"计算"按钮获取详细的还款计划</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>等额本息和等额本金有什么区别？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">等额本息特点：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>每月还款金额固定</li>
                  <li>前期还款中利息占比大</li>
                  <li>后期还款中本金占比大</li>
                  <li>适合收入稳定、预算固定的借款人</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">等额本金特点：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>每月还款本金固定</li>
                  <li>每月还款利息递减</li>
                  <li>总利息较等额本息少</li>
                  <li>适合收入较高、希望少付利息的借款人</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>2024年最新房贷政策解读</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">首套房：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>商业贷款基准利率4.2%</li>
                  <li>最低首付比例20%</li>
                  <li>公积金贷款利率3.1%</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">二套房：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>商业贷款利率上浮0.3个百分点</li>
                  <li>最低首付比例40%</li>
                  <li>部分城市有差异化政策</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>如何选择最优贷款方案？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>根据以下因素综合考虑：</p>
              <ul className="list-disc list-inside ml-4">
                <li>个人月收入和支出情况</li>
                <li>公积金缴存额度</li>
                <li>首付资金来源</li>
                <li>未来收入预期</li>
                <li>是否计划提前还款</li>
              </ul>
              <p>建议：</p>
              <ul className="list-disc list-inside ml-4">
                <li>月供不超过月收入的50%</li>
                <li>优先使用公积金贷款</li>
                <li>考虑组合贷款方案</li>
                <li>预留充足的生活资金</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}