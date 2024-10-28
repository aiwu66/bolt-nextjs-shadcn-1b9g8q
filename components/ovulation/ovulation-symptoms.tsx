"use client";

import { Card } from "@/components/ui/card";

export function OvulationSymptoms() {
  const symptoms = [
    {
      category: "身体症状",
      items: [
        "宫颈粘液增多且透明",
        "轻微腹部胀痛",
        "乳房胀痛",
        "基础体温升高",
        "排卵试纸呈阳性"
      ]
    },
    {
      category: "情绪变化",
      items: [
        "情绪波动明显",
        "性欲增强",
        "精力充沛",
        "食欲变化",
        "睡眠质量改变"
      ]
    },
    {
      category: "其他征象",
      items: [
        "皮肤状态改善",
        "腰部酸痛",
        "小腹隐痛",
        "白带变化",
        "体重轻微波动"
      ]
    }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">排卵期症状识别</h3>
      
      <div className="space-y-6">
        {symptoms.map((group, index) => (
          <div key={index}>
            <h4 className="font-medium mb-3 text-rose-600 dark:text-rose-400">
              {group.category}
            </h4>
            <div className="grid gap-2">
              {group.items.map((item, i) => (
                <div key={i} className="flex items-center space-x-2 bg-rose-50 dark:bg-rose-900/30 p-2 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <p className="text-sm text-yellow-600 dark:text-yellow-400">
          注意：每个人的排卵症状可能不同，建议结合多种方法判断排卵时间。
        </p>
      </div>
    </Card>
  );
}