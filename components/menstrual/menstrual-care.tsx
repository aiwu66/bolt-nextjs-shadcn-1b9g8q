"use client";

import { Card } from "@/components/ui/card";

const careGuide = {
  hygiene: [
    "勤换卫生用品",
    "保持外阴清洁",
    "避免盆浴",
    "使用棉质内衣",
  ],
  rest: [
    "保证充足睡眠",
    "避免熬夜",
    "适度休息",
    "减少剧烈运动",
  ],
  diet: [
    "补充铁质",
    "多喝温水",
    "避免生冷",
    "少食辛辣",
  ],
  lifestyle: [
    "保持心情愉悦",
    "适度运动",
    "注意保暖",
    "避免受凉",
  ],
};

export function MenstrualCare() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">经期护理指南</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3 text-rose-600 dark:text-rose-400">卫生护理</h4>
          <div className="flex flex-wrap gap-2">
            {careGuide.hygiene.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3 text-blue-600 dark:text-blue-400">休息调养</h4>
          <div className="flex flex-wrap gap-2">
            {careGuide.rest.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3 text-green-600 dark:text-green-400">饮食建议</h4>
          <div className="flex flex-wrap gap-2">
            {careGuide.diet.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3 text-purple-600 dark:text-purple-400">生活习惯</h4>
          <div className="flex flex-wrap gap-2">
            {careGuide.lifestyle.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <p className="text-sm text-yellow-600 dark:text-yellow-400">
          注意：如有异常情况请及时就医。保持良好的生活习惯对经期健康至关重要。
        </p>
      </div>
    </Card>
  );
}