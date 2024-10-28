"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function HousingFundGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">使用指南</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>如何使用公积金贷款计算器？</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>选择所在城市等级</li>
              <li>输入月缴存金额</li>
              <li>选择已缴存年限</li>
              <li>输入贷款金额（参考最高可贷额度）</li>
              <li>选择贷款期限（1-30年）</li>
              <li>选择还款方式（等额本息/等额本金）</li>
              <li>点击"计算"按钮获取详细还款计划</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>2024年最新公积金政策</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">贷款利率：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>统一执行3.1%的年利率</li>
                  <li>低于商业贷款利率</li>
                  <li>利率相对稳定</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">贷款额度：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>与月缴存额挂钩</li>
                  <li>与缴存年限相关</li>
                  <li>不同城市标准不同</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>如何提高公积金贷款额度？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>可以通过以下方式提高贷款额度：</p>
              <ul className="list-disc list-inside ml-4">
                <li>增加月缴存基数</li>
                <li>延长缴存时间</li>
                <li>夫妻双方共同申请</li>
                <li>补缴历史公积金</li>
              </ul>
              <p>注意事项：</p>
              <ul className="list-disc list-inside ml-4">
                <li>需符合当地政策规定</li>
                <li>注意缴存基数上限</li>
                <li>考虑实际还款能力</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>公积金贷款申请条件</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>基本条件：</p>
              <ul className="list-disc list-inside ml-4">
                <li>连续缴存6个月以上</li>
                <li>信用记录良好</li>
                <li>具备还款能力</li>
                <li>购房合同合法有效</li>
              </ul>
              <p>所需材料：</p>
              <ul className="list-disc list-inside ml-4">
                <li>身份证明</li>
                <li>购房合同</li>
                <li>收入证明</li>
                <li>公积金缴存证明</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}