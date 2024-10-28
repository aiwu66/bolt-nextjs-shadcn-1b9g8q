"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CommercialLoanGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">使用指南</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>如何使用商业贷款计算器？</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>选择房产类型（首套房/二套房）</li>
              <li>选择LPR期限（通常选择5年期）</li>
              <li>输入贷款金额（单位：万元）</li>
              <li>选择贷款期限（1-30年）</li>
              <li>根据银行政策选择利率调整幅度</li>
              <li>选择还款方式（等额本息/等额本金）</li>
              <li>点击"计算"按钮获取详细还款计划</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>LPR利率是什么？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>LPR（贷款市场报价利率）是商业贷款的基准利率，主要特点：</p>
              <ul className="list-disc list-inside ml-4">
                <li>每月20日发布新的LPR利率</li>
                <li>分为1年期和5年期两种</li>
                <li>房贷通常参考5年期LPR</li>
                <li>银行可在LPR基础上进行调整</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>2024年最新商贷政策</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">首套房：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>基准利率4.2%</li>
                  <li>最低首付比例20%</li>
                  <li>部分银行可下调10-30个基点</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">二套房：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>基准利率4.5%</li>
                  <li>最低首付比例40%</li>
                  <li>具体政策因城市而异</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>如何选择最优贷款方案？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>建议从以下几个方面考虑：</p>
              <ul className="list-disc list-inside ml-4">
                <li>比较不同银行的LPR调整幅度</li>
                <li>评估自己的还款能力</li>
                <li>考虑是否有提前还款计划</li>
                <li>对比等额本息和等额本金的优劣</li>
                <li>计算总利息支出差异</li>
              </ul>
              <p>注意事项：</p>
              <ul className="list-disc list-inside ml-4">
                <li>月供不建议超过月收入的50%</li>
                <li>考虑未来收入变化趋势</li>
                <li>预留充足的流动资金</li>
                <li>关注银行的其他优惠政策</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}