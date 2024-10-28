"use client";

import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

interface DueDateResult {
  dueDate: Date;
  gestationalAge: {
    weeks: number;
    days: number;
  };
  trimester: number;
  conception: Date;
}

interface DueDateResultsProps {
  result: DueDateResult;
}

export function DueDateResults({ result }: DueDateResultsProps) {
  const formatDate = (date: Date) => {
    return format(date, "yyyy年MM月dd日", { locale: zhCN });
  };

  const getTrimesterInfo = (trimester: number) => {
    switch (trimester) {
      case 1:
        return {
          name: "第一孕期",
          description: "胚胎发育的关键期，需要特别注意营养补充和避免有害物质",
          color: "text-pink-600 dark:text-pink-400",
        };
      case 2:
        return {
          name: "第二孕期",
          description: "胎儿快速生长，准妈妈身体逐渐适应，是最舒适的阶段",
          color: "text-purple-600 dark:text-purple-400",
        };
      case 3:
        return {
          name: "第三孕期",
          description: "胎儿发育成熟，为分娩做准备的重要阶段",
          color: "text-blue-600 dark:text-blue-400",
        };
    }
  };

  const trimesterInfo = getTrimesterInfo(result.trimester);

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <h3 className="text-lg font-semibold mb-6 text-center">计算结果</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-pink-600 dark:text-pink-400 mb-2">预产期</p>
          <p className="text-2xl font-bold text-pink-700 dark:text-pink-300">
            {formatDate(result.dueDate)}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">当前孕周</p>
          <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            {result.gestationalAge.weeks}周{result.gestationalAge.days}天
          </p>
        </div>

        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">受孕日期</p>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            {formatDate(result.conception)}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-rose-50 dark:bg-rose-900/30 transform transition-all duration-300 hover:scale-105">
          <p className={`text-sm ${trimesterInfo.color} mb-2`}>{trimesterInfo.name}</p>
          <p className="text-sm text-muted-foreground">
            {trimesterInfo.description}
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <p className="text-sm text-yellow-600 dark:text-yellow-400">
          温馨提示：预产期计算结果仅供参考，实际分娩日期可能会有1-2周的误差。建议定期进行产检，遵医嘱进行孕期保健。
        </p>
      </div>
    </Card>
  );
}