"use client";

import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

interface MenstrualResult {
  nextPeriod: Date;
  ovulationDate: Date;
  fertileWindow: {
    start: Date;
    end: Date;
  };
  safetyWindow: {
    start: Date;
    end: Date;
  };
  cycle: {
    length: number;
    phase: string;
  };
}

interface MenstrualResultsProps {
  result: MenstrualResult;
}

export function MenstrualResults({ result }: MenstrualResultsProps) {
  const formatDate = (date: Date) => {
    return format(date, "yyyy年MM月dd日", { locale: zhCN });
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <h3 className="text-lg font-semibold mb-6 text-center">计算结果</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-pink-600 dark:text-pink-400 mb-2">下次月经</p>
          <p className="text-2xl font-bold text-pink-700 dark:text-pink-300">
            {formatDate(result.nextPeriod)}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">排卵日</p>
          <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            {formatDate(result.ovulationDate)}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-rose-50 dark:bg-rose-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-rose-600 dark:text-rose-400 mb-2">易孕期</p>
          <p className="text-lg font-bold text-rose-700 dark:text-rose-300">
            {formatDate(result.fertileWindow.start)} - {formatDate(result.fertileWindow.end)}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">安全期</p>
          <p className="text-lg font-bold text-blue-700 dark:text-blue-300">
            {formatDate(result.safetyWindow.start)} - {formatDate(result.safetyWindow.end)}
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <p className="text-sm text-yellow-600 dark:text-yellow-400">
          温馨提示：计算结果仅供参考，实际情况可能因个人体质、生活习惯等因素有所不同。建议结合其他方法综合判断。
        </p>
      </div>
    </Card>
  );
}