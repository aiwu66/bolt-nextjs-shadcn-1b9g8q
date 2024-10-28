"use client";

import { Card } from "@/components/ui/card";

interface DueDateResult {
  gestationalAge: {
    weeks: number;
    days: number;
  };
  trimester: number;
}

interface DueDatePrenatalCareProps {
  result: DueDateResult;
}

const prenatalCare = {
  firstTrimester: {
    checkups: ["首次产检", "血常规", "尿常规", "NT检查"],
    supplements: ["叶酸", "多维", "铁剂"],
    lifestyle: ["避免剧烈运动", "保持作息规律", "远离有害物质"],
  },
  secondTrimester: {
    checkups: ["唐筛", "四维彩超", "血糖检查", "常规产检"],
    supplements: ["钙片", "DHA", "蛋白质"],
    lifestyle: ["适量运动", "胎教", "心理调适"],
  },
  thirdTrimester: {
    checkups: ["胎心监护", "胎位检查", "骨盆测量", "产程准备"],
    supplements: ["维生素", "铁剂", "蛋白质"],
    lifestyle: ["控制体重", "产前准备", "心理准备"],
  },
};

export function DueDatePrenatalCare({ result }: DueDatePrenatalCareProps) {
  const getCurrentTrimesterCare = () => {
    switch (result.trimester) {
      case 1:
        return {
          data: prenatalCare.firstTrimester,
          title: "第一孕期",
          color: "rose",
        };
      case 2:
        return {
          data: prenatalCare.secondTrimester,
          title: "第二孕期",
          color: "purple",
        };
      case 3:
        return {
          data: prenatalCare.thirdTrimester,
          title: "第三孕期",
          color: "blue",
        };
    }
  };

  const care = getCurrentTrimesterCare();

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">当前孕期保健指导</h3>
      
      <div className="mb-4">
        <p className={`text-${care?.color}-600 dark:text-${care?.color}-400 font-medium`}>
          当前孕周：{result.gestationalAge.weeks}周{result.gestationalAge.days}天
          （{care?.title}）
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className={`p-4 rounded-lg bg-${care?.color}-50 dark:bg-${care?.color}-900/30`}>
          <h4 className="font-medium mb-3">检查项目</h4>
          <ul className="space-y-2">
            {care?.data.checkups.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className={`w-1.5 h-1.5 rounded-full bg-${care?.color}-500`}></span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`p-4 rounded-lg bg-${care?.color}-50 dark:bg-${care?.color}-900/30`}>
          <h4 className="font-medium mb-3">营养补充</h4>
          <ul className="space-y-2">
            {care?.data.supplements.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className={`w-1.5 h-1.5 rounded-full bg-${care?.color}-500`}></span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`p-4 rounded-lg bg-${care?.color}-50 dark:bg-${care?.color}-900/30`}>
          <h4 className="font-medium mb-3">生活建议</h4>
          <ul className="space-y-2">
            {care?.data.lifestyle.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className={`w-1.5 h-1.5 rounded-full bg-${care?.color}-500`}></span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <p className="text-sm text-yellow-600 dark:text-yellow-400">
          温馨提示：
        </p>
        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
          <li>• 定期进行产检，遵医嘱进行各项检查</li>
          <li>• 保持良好的作息习惯和心情</li>
          <li>• 出现异常情况及时就医</li>
          <li>• 做好产前准备工作</li>
        </ul>
      </div>
    </Card>
  );
}