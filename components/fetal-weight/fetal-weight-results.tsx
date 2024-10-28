"use client";

import { Card } from "@/components/ui/card";

interface FetalWeightResult {
  weight: number;
  gestationalAge: number;
  percentile: number;
  weightRange: {
    min: number;
    max: number;
  };
  growthStatus: string;
}

interface FetalWeightResultsProps {
  result: FetalWeightResult;
}

export function FetalWeightResults({ result }: FetalWeightResultsProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "偏小":
        return "text-yellow-600 dark:text-yellow-400";
      case "正常":
        return "text-green-600 dark:text-green-400";
      case "偏大":
        return "text-orange-600 dark:text-orange-400";
      default:
        return "text-blue-600 dark:text-blue-400";
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <h3 className="text-lg font-semibold mb-6 text-center">计算结果</h3>
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-pink-600 dark:text-pink-400 mb-2">预估体重</p>
          <p className="text-2xl font-bold text-pink-700 dark:text-pink-300">
            {Math.round(result.weight)}g
          </p>
          <p className={`text-sm mt-2 ${getStatusColor(result.growthStatus)}`}>
            {result.growthStatus}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-rose-50 dark:bg-rose-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-rose-600 dark:text-rose-400 mb-2">正常范围</p>
          <p className="text-2xl font-bold text-rose-700 dark:text-rose-300">
            {Math.round(result.weightRange.min)} - {Math.round(result.weightRange.max)}g
          </p>
        </div>

        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">百分位</p>
          <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            {result.percentile}%
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          说明：此结果仅供参考，具体情况请以医生诊断为准。建议定期进行产检，监测胎儿发育情况。
        </p>
      </div>
    </Card>
  );
}