"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CarLoanGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">使用指南</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>如何使用车贷计算器？</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>输入车辆价格</li>
              <li>选择首付比例（一般20%-50%）</li>
              <li>选择贷款期限（12-60个月）</li>
              <li>输入年利率（参考银行4.35%，金融公司7.5%）</li>
              <li>选择还款方式（等额本息/等额本金）</li>
              <li>点击"计算"按钮获取详细还款计划</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>2024年最新车贷政策</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">银行车贷：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>基准利率4.35%起</li>
                  <li>最低首付20%</li>
                  <li>最长可贷5年</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">汽车金融：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>利率7.5%起</li>
                  <li>审批更快捷</li>
                  <li>可能有零首付活动</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>如何选择最优贷款方案？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>建议从以下几个方面考虑：</p>
              <ul className="list-disc list-inside ml-4">
                <li>比较不同机构的利率</li>
                <li>评估首付能力</li>
                <li>计算月供压力</li>
                <li>考虑贷款期限</li>
                <li>对比总利息支出</li>
              </ul>
              <p>注意事项：</p>
              <ul className="list-disc list-inside ml-4">
                <li>月供不建议超过月收入的30%</li>
                <li>考虑车辆使用年限</li>
                <li>预留保险和维修费用</li>
                <li>关注优惠活动</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>贷款机构如何选择？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">商业银行：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>利率较低</li>
                  <li>手续较繁琐</li>
                  <li>审批时间长</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">汽车金融公司：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>放款速度快</li>
                  <li>手续简单</li>
                  <li>利率较高</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">4S店贷款：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>手续最便捷</li>
                  <li>可能有优惠</li>
                  <li>需注意实际利率</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}