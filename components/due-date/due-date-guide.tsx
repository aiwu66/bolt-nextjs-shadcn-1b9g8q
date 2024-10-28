"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function DueDateGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">孕期指导</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>第一孕期（1-13周）注意事项</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">重点关注：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>避免接触有害物质</li>
                  <li>补充叶酸</li>
                  <li>定期产检</li>
                  <li>保持充足休息</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">饮食建议：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>清淡易消化</li>
                  <li>少量多餐</li>
                  <li>补充优质蛋白</li>
                  <li>适量补充维生素</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>第二孕期（14-27周）注意事项</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">重点关注：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>关注胎动情况</li>
                  <li>适量运动</li>
                  <li>产检检查项目</li>
                  <li>体重控制</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">生活建议：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>保持心情愉悦</li>
                  <li>准备待产用品</li>
                  <li>学习孕期知识</li>
                  <li>适当户外活动</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>第三孕期（28-40周）注意事项</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">重点关注：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>监测胎位变化</li>
                  <li>注意宫缩情况</li>
                  <li>准备待产事项</li>
                  <li>识别临产征兆</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">待产准备：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>熟悉产房环境</li>
                  <li>准备待产包</li>
                  <li>学习呼吸法</li>
                  <li>保持规律作息</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>产检时间安排</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">常规产检时间：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>12周前：首次产检</li>
                  <li>13-27周：每4周一次</li>
                  <li>28-36周：每2周一次</li>
                  <li>36周后：每周一次</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">重要检查项目：</p>
                <ul className="list-disc list-inside ml-4">
                  <li>11-13周：NT检查</li>
                  <li>16-20周：四维彩超</li>
                  <li>24-28周：糖耐量</li>
                  <li>36周后：胎位检查</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}