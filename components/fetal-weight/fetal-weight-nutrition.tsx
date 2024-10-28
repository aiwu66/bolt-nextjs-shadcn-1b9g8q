"use client";

import { Card } from "@/components/ui/card";

interface FetalWeightResult {
  weight: number;
  growthStatus: string;
}

interface FetalWeightNutritionProps {
  result: FetalWeightResult;
}

export function FetalWeightNutrition({ result }: FetalWeightNutritionProps) {
  const nutritionGuide = {
    protein: ["瘦肉", "鱼", "鸡蛋", "豆制品"],
    vegetables: ["深色蔬菜", "叶酸丰富的蔬菜", "胡萝卜", "西兰花"],
    fruits: ["橙子", "苹果", "猕猴桃", "香蕉"],
    grains: ["全谷物", "糙米", "燕麦", "红薯"],
    dairy: ["牛奶", "酸奶", "奶酪", "豆浆"],
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">营养指导</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">优质蛋白质</h4>
          <div className="flex flex-wrap gap-2">
            {nutritionGuide.protein.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">蔬菜类</h4>
          <div className="flex flex-wrap gap-2">
            {nutritionGuide.vegetables.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">水果类</h4>
          <div className="flex flex-wrap gap-2">
            {nutritionGuide.fruits.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">谷物类</h4>
          <div className="flex flex-wrap gap-2">
            {nutritionGuide.grains.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">乳制品</h4>
          <div className="flex flex-wrap gap-2">
            {nutritionGuide.dairy.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          建议：根据胎儿发育情况，合理搭配以上食物，保证营养均衡。
        </p>
      </div>
    </Card>
  );
}