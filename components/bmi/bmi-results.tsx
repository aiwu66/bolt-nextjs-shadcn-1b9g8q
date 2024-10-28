"use client";

import { Card } from "@/components/ui/card";

interface BMIResult {
  bmi: number;
  category: string;
  idealWeight: {
    min: number;
    max: number;
  };
  bodyFat: number;
  healthRisks: string[];
}

interface BMIResultsProps {
  result: BMIResult;
}

export function BMIResults({ result }: BMIResultsProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "偏瘦":
        return "text-yellow-600 dark:text-yellow-400";
      case "正常":
        return "text-green-600 dark:text-green-400";
      case "超重":
        return "text-orange-600 dark:text-orange-400";
      case "肥胖":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-blue-600 dark:text-blue-400";
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <h3 className="text-lg font-semibold mb-6 text-center">计算结果</h3>
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">BMI指数</p>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            {result.bmi.toFixed(1)}
          </p>
          <p className={`text-sm mt-2 ${getCategoryColor(result.category)}`}>
            {result.category}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-green-600 dark:text-green-400 mb-2">理想体重范围</p>
          <p className="text-2xl font-bold text-green-700 dark:text-green-300">
            {result.idealWeight.min.toFixed(1)} - {result.idealWeight.max.toFixed(1)}kg
          </p>
        </div>

        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">体脂率</p>
          <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            {result.bodyFat.toFixed(1)}%
          </p>
        </div>
      </div>

      {result.healthRisks.length > 0 && (
        <div className="mt-6">
          <h4 className="font-medium mb-2">健康风险提示：</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-red-600 dark:text-red-400">
            {result.healthRisks.map((risk, index) => (
              <li key={index}>{risk}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}