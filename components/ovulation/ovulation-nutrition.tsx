"use client";

import { Card } from "@/components/ui/card";

export function OvulationNutrition() {
  const nutritionGuide = {
    supplements: [
      "叶酸",
      "维生素B族",
      "维生素E",
      "钙片",
      "铁剂"
    ],
    recommended: [
      "富含蛋白质的食物",
      "新鲜蔬果",
      "全谷物",
      "坚果类",
      "优质奶制品"
    ],
    avoid: [
      "咖啡因",
      "酒精",
      "生冷食物",
      "辛辣刺激",
      "高糖食品"
    ],
    habits: [
      "规律饮食",
      "少量多餐",
      "适量饮水",
      "避免过度节食",
      "保持营养均衡"
    ]
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">备孕营养指导</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3 text-green-600 dark:text-green-400">必要补充</h4>
          <div className="flex flex-wrap gap-2">
            {nutritionGuide.supplements.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3 text-blue-600 dark:text-blue-400">推荐食物</h4>
          <div className="flex flex-wrap gap-2">
            {nutritionGuide.recommended.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3 text-red-600 dark:text-red-400">避免食物</h4>
          <div className="flex flex-wrap gap-2">
            {nutritionGuide.avoid.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3 text-purple-600 dark:text-purple-400">饮食习惯</h4>
          <div className="flex flex-wrap gap-2">
            {nutritionGuide.habits.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <p className="text-sm text-yellow-600 dark:text-yellow-400">
          注意：营养补充应在医生指导下进行，过量补充可能适得其反。
        </p>
      </div>
    </Card>
  );
}