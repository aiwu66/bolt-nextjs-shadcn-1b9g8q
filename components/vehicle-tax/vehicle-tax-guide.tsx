"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function VehicleTaxGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">使用指南</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>如何使用购置税计算器？</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>选择价格类型（发票价/裸车价/指导价）</li>
              <li>输入车辆价格</li>
              <li>选择车辆类型（传统/新能源/二手车）</li>
              <li>确认是否有增值税专用发票</li>
              <li>填写其他抵扣项目（如有）</li>
              <li>点击"计算"获取应缴税额</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>2024年最新购置税政策</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">基本政策：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>基本税率维持5%</li>
                  <li>新能源汽车免征购置税</li>
                  <li>二手车减半征收</li>
                  <li>计税依据为不含税价格</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">优惠政策：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>部分特殊用途车辆免税</li>
                  <li>符合条件的节能车型减免</li>
                  <li>部分地区可能有额外优惠</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>如何降低购置税？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>合法节税方法：</p>
              <ul className="list-disc list-inside ml-4">
                <li>选择新能源汽车（免税）</li>
                <li>合理使用增值税发票抵扣</li>
                <li>了解当地优惠政策</li>
                <li>选择符合条件的节能车型</li>
                <li>合理确定计税价格</li>
              </ul>
              <p>注意事项：</p>
              <ul className="list-disc list-inside ml-4">
                <li>避免违规操作</li>
                <li>保留完整票据</li>
                <li>及时办理缴税</li>
                <li>咨询专业人士</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>购置税缴纳流程</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>基本流程：</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>准备材料：
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>购车发票</li>
                    <li>身份证明</li>
                    <li>车辆合格证</li>
                  </ul>
                </li>
                <li>选择办理方式：
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>4S店代办</li>
                    <li>税务局自行办理</li>
                    <li>网上办理</li>
                  </ul>
                </li>
                <li>缴纳税款</li>
                <li>获取完税证明</li>
                <li>办理上牌手续</li>
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}