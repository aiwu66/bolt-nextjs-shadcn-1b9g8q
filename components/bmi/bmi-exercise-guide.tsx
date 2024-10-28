"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const exerciseGuides = [
  {
    title: "有氧运动",
    content: {
      description: "提高心肺功能，促进脂肪燃烧",
      examples: ["快走", "慢跑", "游泳", "骑行", "跳绳"],
      frequency: "每周3-5次",
      duration: "每次30-60分钟",
      intensity: "中等强度，心率控制在最大心率的60-75%",
    },
  },
  {
    title: "力量训练",
    content: {
      description: "增加肌肉量，提高基础代谢",
      examples: ["哑铃训练", "弹力带训练", "体重训练", "器械训练"],
      frequency: "每周2-3次",
      duration: "每次45-60分钟",
      intensity: "循序渐进，注意动作标准",
    },
  },
  {
    title: "柔韧性训练",
    content: {
      description: "改善关节活动度，预防运动损伤",
      examples: ["瑜伽", "普拉提", "拉伸运动"],
      frequency: "每周2-3次",
      duration: "每次15-30分钟",
      intensity: "轻柔缓慢，不要强行拉伸",
    },
  },
  {
    title: "日常活动",
    content: {
      description: "增加日常活动量，提高能量消耗",
      examples: ["步行上下班", "爬楼梯", "做家务", "遛狗"],
      frequency: "每天",
      duration: "累计30分钟以上",
      intensity: "生活化强度，持续进行",
    },
  },
];

export function BMIExerciseGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">运动指导</h3>
      
      <Accordion type="single" collapsible>
        {exerciseGuides.map((guide, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{guide.title}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {guide.content.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">推荐运动：</h4>
                  <div className="flex flex-wrap gap-2">
                    {guide.content.examples.map((example, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium">频率</p>
                    <p className="text-muted-foreground">{guide.content.frequency}</p>
                  </div>
                  <div>
                    <p className="font-medium">时长</p>
                    <p className="text-muted-foreground">{guide.content.duration}</p>
                  </div>
                  <div>
                    <p className="font-medium">强度</p>
                    <p className="text-muted-foreground">{guide.content.intensity}</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <p className="text-sm text-yellow-600 dark:text-yellow-400">
          运动建议：
        </p>
        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
          <li>• 运动前做好充分热身</li>
          <li>• 循序渐进，不要过度运动</li>
          <li>• 注意运动前后补充水分</li>
          <li>• 如有不适及时停止运动</li>
          <li>• 有基础疾病者请遵医嘱运动</li>
        </ul>
      </div>
    </Card>
  );
}