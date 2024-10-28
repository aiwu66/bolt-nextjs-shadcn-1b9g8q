"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FetalWeightFAQ() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">常见问题</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>胎儿体重偏小怎么办？</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li>增加优质蛋白质摄入</li>
              <li>保证充足休息</li>
              <li>适量运动</li>
              <li>定期产检</li>
              <li>遵医嘱补充营养</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>胎儿体重偏大的原因？</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li>妊娠期糖尿病</li>
              <li>过度营养</li>
              <li>遗传因素</li>
              <li>孕期体重增长过快</li>
              <li>妊娠期高血压</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>不同孕期的标准体重是多少？</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>参考标准：</p>
              <ul className="list-disc list-inside">
                <li>28周：1000-1300克</li>
                <li>32周：1700-2100克</li>
                <li>36周：2500-2900克</li>
                <li>40周：3000-3500克</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>如何促进胎儿健康发育？</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li>均衡饮食，保证营养</li>
              <li>适量运动，保持活力</li>
              <li>充足睡眠，避免熬夜</li>
              <li>保持心情愉悦</li>
              <li>定期产检，监测发育</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}