"use client";

import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

interface Milestone {
  date: Date;
  event: string;
  description: string;
}

interface DueDateResult {
  milestones: Milestone[];
  dueDate: Date;
}

interface DueDateTimelineProps {
  result: DueDateResult;
}

export function DueDateTimeline({ result }: DueDateTimelineProps) {
  const formatDate = (date: Date) => {
    return format(date, "yyyy年MM月dd日", { locale: zhCN });
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">孕期重要时间节点</h3>
      
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-pink-200 dark:bg-pink-800"></div>
        
        <div className="space-y-8">
          {result.milestones.map((milestone, index) => (
            <div key={index} className="relative pl-10">
              <div className="absolute left-2.5 w-3 h-3 bg-pink-500 rounded-full transform -translate-x-1/2"></div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-pink-100 dark:border-pink-900">
                <div className="text-sm text-pink-600 dark:text-pink-400 mb-1">
                  {formatDate(milestone.date)}
                </div>
                <h4 className="font-medium mb-2">{milestone.event}</h4>
                <p className="text-sm text-muted-foreground">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
          
          <div className="relative pl-10">
            <div className="absolute left-2.5 w-3 h-3 bg-rose-500 rounded-full transform -translate-x-1/2"></div>
            <div className="bg-rose-50 dark:bg-rose-900/30 p-4 rounded-lg shadow-sm border border-rose-200 dark:border-rose-800">
              <div className="text-sm text-rose-600 dark:text-rose-400 mb-1">
                {formatDate(result.dueDate)}
              </div>
              <h4 className="font-medium mb-2">预产期</h4>
              <p className="text-sm text-muted-foreground">
                准备迎接新生命的到来，建议提前准备待产包和熟悉医院环境
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        <p>* 以上时间节点仅供参考，每个孕妇的具体情况可能有所不同</p>
        <p>* 建议遵医嘱进行产检，保持良好的心态迎接宝宝的到来</p>
      </div>
    </Card>
  );
}