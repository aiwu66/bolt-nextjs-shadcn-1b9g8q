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
}

interface OvulationTimelineProps {
  result: OvulationResult;
}

export function OvulationTimeline({ result }: OvulationTimelineProps) {
  const formatDate = (date: Date | null) => {
    if (!date || !isValid(date)) {
      return "计算中...";
    }
    return format(date, "yyyy年MM月dd日", { locale: zhCN });
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">排卵周期时间轴</h3>
      
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-pink-200 dark:bg-pink-800"></div>
        
        <div className="space-y-8">
          <div className="relative pl-10">
            <div className="absolute left-2.5 w-3 h-3 bg-pink-500 rounded-full transform -translate-x-1/2"></div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-pink-100 dark:border-pink-900">
              <div className="text-sm text-pink-600 dark:text-pink-400 mb-1">
                {formatDate(result.fertileWindow.start)}
              </div>
              <h4 className="font-medium mb-2">易孕期开始</h4>
              <p className="text-sm text-muted-foreground">
                开始监测排卵征象，为受孕做好准备
              </p>
            </div>
          </div>

          <div className="relative pl-10">
            <div className="absolute left-2.5 w-3 h-3 bg-rose-500 rounded-full transform -translate-x-1/2"></div>
            <div className="bg-rose-50 dark:bg-rose-900/30 p-4 rounded-lg shadow-sm border border-rose-200 dark:border-rose-800">
              <div className="text-sm text-rose-600 dark:text-rose-400 mb-1">
                {formatDate(result.ovulationDate)}
              </div>
              <h4 className="font-medium mb-2">排卵日</h4>
              <p className="text-sm text-muted-foreground">
                最佳受孕时机，建议同房
              </p>
            </div>
          </div>

          <div className="relative pl-10">
            <div className="absolute left-2.5 w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1/2"></div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-purple-100 dark:border-purple-900">
              <div className="text-sm text-purple-600 dark:text-purple-400 mb-1">
                {formatDate(result.fertileWindow.end)}
              </div>
              <h4 className="font-medium mb-2">易孕期结束</h4>
              <p className="text-sm text-muted-foreground">
                进入黄体期，注意观察是否受孕
              </p>
            </div>
          </div>

          <div className="relative pl-10">
            <div className="absolute left-2.5 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2"></div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900">
              <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                {formatDate(result.nextPeriod)}
              </div>
              <h4 className="font-medium mb-2">预计下次月经</h4>
              <p className="text-sm text-muted-foreground">
                如未受孕，将迎来新的周期
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}