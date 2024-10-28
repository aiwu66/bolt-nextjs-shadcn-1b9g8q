"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function OvulationGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">排卵期指南</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>如何确定排卵期？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>主要方法：</p>
              <ul className="list-disc list-inside ml-4">
                <li>月经周期计算法</li>
                <li>基础体温测量法</li>
                <li>排卵试纸检测法</li>
                <li>宫颈粘液观察法</li>
                <li>排卵症状观察</li>
              </ul>
              <p>建议结合多种方法综合判断</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>基础体温测量方法</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>测量要求：</p>
              <ul className="list-disc list-inside ml-4">
                <li>每天固定时间测量</li>
                <li>保持连续睡眠6小时以上</li>
                <li>醒后立即测量</li>
                <li>使用专业体温计</li>
                <li>记录体温变化曲线</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>排卵试纸使用说明</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>使用步骤：</p>
              <ul className="list-disc list-inside ml-4">
                <li>选择合适的检测时间</li>
                <li>避免饮水过多</li>
                <li>使用晨尿或下午尿液</li>
                <li>严格按说明书操作</li>
                <li>连续检测至阳性</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>备孕最佳时机</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>关键时期：</p>
              <ul className="list-disc list-inside ml-4">
                <li>排卵日前2天</li>
                <li>排卵日当天</li>
                <li>排卵日后1天</li>
                <li>保持适度同房频率</li>
                <li>注意作息规律</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}