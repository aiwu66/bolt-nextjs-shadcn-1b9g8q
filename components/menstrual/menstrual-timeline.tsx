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
}

interface MenstrualTimelineProps {
  result: MenstrualResult;
}

export function MenstrualTimeline({ result }: MenstrualTimelineProps) {
  const formatDate = (date: Date) => {
    return format(date, "yyyy年MM月dd日", { locale: zhCN });
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">月经周期时间轴</h3>
      
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-pink-200 dark:bg-pink-800"></div>
        
        <div className="space-y-8">
          <div className="relative pl-10">
            <div className="absolute left-2.5 w-3 h-3 bg-pink-500 rounded-full transform -translate-x-1/2"></div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-pink-100 dark:border-pink-900">
              <div className="text-sm text-pink-600 dark:text-pink-400 mb-1">
                {formatDate(result.safetyWindow.start)}
              </div>
              <h4 className="font-medium mb-2">安全期开始</h4>
              <p className="text-sm text-muted-foreground">
                月经结束后的相对安全期
              </p>
            </div>
          </div>

          <div className="relative pl-10">
            <div className="absolute left-2.5 w-3 h-3 bg-rose-500 rounded-full transform -translate-x-1/2"></div>
            <div className="bg-rose-50 dark:bg-rose-900/30 p-4 rounded-lg shadow-sm border border-rose-200 dark:border-rose-800">
              <div className="text-sm text-rose-600 dark:text-rose-400 mb-1">
                {formatDate(result.fertileWindow.start)}
              </div>
              <h4 className="font-medium mb-2">易孕期开始</h4>
              <p className="text-sm text-muted-foreground">
                排卵前的易孕期，受孕几率较高
              </p>
            </div>
          </div>

          <div className="relative pl-10">
            <div className="absolute left-2.5 w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1/2"></div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800">
              <div className="text-sm text-purple-600 dark:text-purple-400 mb-1">
                {formatDate(result.ovulationDate)}
              </div>
              <h4 className="font-medium mb-2">排卵日</h4>
              <p className="text-sm text-muted-foreground">
                最容易受孕的日期
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
                下次月经的预计开始日期
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        <p>* 以上时间节点仅供参考，每个人的具体情况可能有所不同</p>
        <p>* 建议结合其他方法综合判断，保持良好的生活习惯</p>
      </div>
    </Card>
  );
}