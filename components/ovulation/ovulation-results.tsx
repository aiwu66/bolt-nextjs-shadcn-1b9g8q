"use client";

import { Card } from "@/components/ui/card";
import { format, isValid } from "date-fns";
import { zhCN } from "date-fns/locale";

interface OvulationResult {
  ovulationDate: Date;
  fertileWindow: {
    start: Date;
    end: Date;
  };
  nextPeriod: Date;
  cycleLength: number;
}

interface OvulationResultsProps {
  result: OvulationResult;
}

export function OvulationResults({ result }: OvulationResultsProps) {
  const formatDate = (date: Date | null) => {
    if (!date || !isValid(date)) {
      return "计算中...";
    }
    return format(date, "yyyy年MM月dd日", { locale: zhCN });
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <h3 className="text-lg font-semibold mb-6 text-center">计算结果</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-pink-600 dark:text-pink-400 mb-2">排卵日期</p>
          <p className="text-2xl font-bold text-pink-700 dark:text-pink-300">
            {formatDate(result.ovulationDate)}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">下次月经</p>
          <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            {formatDate(result.nextPeriod)}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">易孕期开始</p>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            {formatDate(result.fertileWindow.start)}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-green-600 dark:text-green-400 mb-2">易孕期结束</p>
          <p className="text-2xl font-bold text-green-700 dark:text-green-300">
            {formatDate(result.fertileWindow.end)}
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <p className="text-sm text-yellow-600 dark:text-yellow-400">
          注意：计算结果仅供参考，实际排卵日期可能因个人情况有所不同。建议结合其他方法综合判断。
        </p>
      </div>
    </Card>
  );
}