"use client";

import { Card } from "@/components/ui/card";

const nutritionGuide = {
  firstTrimester: {
    focus: ["补充叶酸", "控制油腻", "预防贫血", "维持营养"],
    recommended: ["深色蔬菜", "全谷物", "瘦肉", "豆制品"],
    avoid: ["生食", "酒精", "咖啡因", "加工食品"],
  },
  secondTrimester: {
    focus: ["补充蛋白质", "增加钙质", "补充铁质", "适量增重"],
    recommended: ["鱼类", "奶制品", "水果", "坚果"],
    avoid: ["高盐食品", "油炸食品", "含糖饮料", "烟熏食品"],
  },
  thirdTrimester: {
    focus: ["控制总量", "补充DHA", "维持能量", "易消化"],
    recommended: ["优质蛋白", "新鲜蔬果", "粗粮", "鱼油"],
    avoid: ["辛辣刺激", "过咸过甜", "不新鲜食物", "不卫生食品"],
  },
};

export function DueDateNutrition() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">孕期营养指导</h3>
      
      <div className="space-y-8">
        <div>
          <h4 className="font-medium mb-4 text-rose-600 dark:text-rose-400">
            第一孕期（1-13周）
          </h4>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-4 rounded-lg bg-rose-50 dark:bg-rose-900/30">
              <p className="font-medium mb-2">营养重点</p>
              <div className="flex flex-wrap gap-2">
                {nutritionGuide.firstTrimester.focus.map((item, index) => (
                  <span key={index} className="px-2 py-1 text-xs rounded-full bg-white dark:bg-gray-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/30">
              <p className="font-medium mb-2">推荐食物</p>
              <div className="flex flex-wrap gap-2">
                {nutritionGuide.firstTrimester.recommended.map((item, index) => (
                  <span key={index} className="px-2 py-1 text-xs rounded-full bg-white dark:bg-gray-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/30">
              <p className="font-medium mb-2">避免食物</p>
              <div className="flex flex-wrap gap-2">
                {nutritionGuide.firstTrimester.avoid.map((item, index) => (
                  <span key={index} className="px-2 py-1 text-xs rounded-full bg-white dark:bg-gray-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-4 text-purple-600 dark:text-purple-400">
            第二孕期（14-27周）
          </h4>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/30">
              <p className="font-medium mb-2">营养重点</p>
              <div className="flex flex-wrap gap-2">
                {nutritionGuide.secondTrimester.focus.map((item, index) => (
                  <span key={index} className="px-2 py-1 text-xs rounded-full bg-white dark:bg-gray-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/30">
              <p className="font-medium mb-2">推荐食物</p>
              <div className="flex flex-wrap gap-2">
                {nutritionGuide.secondTrimester.recommended.map((item, index) => (
                  <span key={index} className="px-2 py-1 text-xs rounded-full bg-white dark:bg-gray-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/30">
              <p className="font-medium mb-2">避免食物</p>
              <div className="flex flex-wrap gap-2">
                {nutritionGuide.secondTrimester.avoid.map((item, index) => (
                  <span key={index} className="px-2 py-1 text-xs rounded-full bg-white dark:bg-gray-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-4 text-blue-600 dark:text-blue-400">
            第三孕期（28-40周）
          </h4>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30">
              <p className="font-medium mb-2">营养重点</p>
              <div className="flex flex-wrap gap-2">
                {nutritionGuide.thirdTrimester.focus.map((item, index) => (
                  <span key={index} className="px-2 py-1 text-xs rounded-full bg-white dark:bg-gray-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/30">
              <p className="font-medium mb-2">推荐食物</p>
              <div className="flex flex-wrap gap-2">
                {nutritionGuide.thirdTrimester.recommended.map((item, index) => (
                  <span key={index} className="px-2 py-1 text-xs rounded-full bg-white dark:bg-gray-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/30">
              <p className="font-medium mb-2">避免食物</p>
              <div className="flex flex-wrap gap-2">
                {nutritionGuide.thirdTrimester.avoid.map((item, index) => (
                  <span key={index} className="px-2 py-1 text-xs rounded-full bg-white dark:bg-gray-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <p className="text-sm text-yellow-600 dark:text-yellow-400">
          注意事项：
        </p>
        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
          <li>• 根据个人情况调整饮食结构</li>
          <li>• 注意食物卫生安全</li>
          <li>• 保持适度运动</li>
          <li>• 遵医嘱服用营养补充剂</li>
        </ul>
      </div>
    </Card>
  );
}