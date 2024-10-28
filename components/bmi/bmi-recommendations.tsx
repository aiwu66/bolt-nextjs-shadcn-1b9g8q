"use client";

import { Card } from "@/components/ui/card";

interface BMIResult {
  bmi: number;
  category: string;
  recommendations: {
    diet: string[];
    exercise: string[];
  };
}

interface BMIRecommendationsProps {
  result: BMIResult;
}

export function BMIRecommendations({ result }: BMIRecommendationsProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">个性化建议</h3>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="font-medium mb-3 text-green-600 dark:text-green-400">饮食建议</h4>
          <ul className="space-y-2">
            {result.recommendations.diet.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-green-500">•</span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3 text-blue-600 dark:text-blue-400">运动建议</h4>
          <ul className="space-y-2">
            {result.recommendations.exercise.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-blue-500">•</span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <p className="text-sm text-yellow-600 dark:text-yellow-400">
          注意：以上建议仅供参考，建议在实施重大饮食或运动改变前咨询专业医生的意见。
        </p>
      </div>
    </Card>
  );
}