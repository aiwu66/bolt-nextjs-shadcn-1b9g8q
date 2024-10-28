"use client";

import { Card } from "@/components/ui/card";

interface BMIResult {
  bmi: number;
  category: string;
  bodyFat: number;
  healthRisks: string[];
}

interface BMIHealthReportProps {
  result: BMIResult;
}

export function BMIHealthReport({ result }: BMIHealthReportProps) {
  const getHealthStatus = (bmi: number) => {
    if (bmi < 18.5) {
      return {
        status: "需要关注",
        description: "体重偏低可能影响健康，建议适当增重",
        suggestions: [
          "增加优质蛋白质摄入",
          "规律进行力量训练",
          "保证充足睡眠",
          "定期进行健康检查"
        ]
      };
    } else if (bmi < 24) {
      return {
        status: "健康",
        description: "体重在正常范围内，继续保持健康的生活方式",
        suggestions: [
          "保持均衡饮食",
          "规律运动",
          "定期体检",
          "保持良好作息"
        ]
      };
    } else if (bmi < 28) {
      return {
        status: "需要注意",
        description: "体重超标，存在一定健康风险，建议采取措施",
        suggestions: [
          "控制热量摄入",
          "增加运动量",
          "规律作息",
          "定期监测身体指标"
        ]
      };
    } else {
      return {
        status: "需要干预",
        description: "体重严重超标，建议在医生指导下进行干预",
        suggestions: [
          "咨询专业医生",
          "制定科学减重计划",
          "调整饮食结构",
          "进行适量运动"
        ]
      };
    }
  };

  const healthStatus = getHealthStatus(result.bmi);

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">健康评估报告</h3>
      
      <div className="space-y-6">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30">
          <h4 className="font-medium mb-2">健康状态：{healthStatus.status}</h4>
          <p className="text-sm text-muted-foreground">{healthStatus.description}</p>
        </div>

        <div>
          <h4 className="font-medium mb-2">体脂率评估</h4>
          <p className="text-sm text-muted-foreground mb-2">
            当前体脂率：{result.bodyFat.toFixed(1)}%
          </p>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-500"
              style={{ width: `${Math.min(result.bodyFat, 100)}%` }}
            />
          </div>
        </div>

        {result.healthRisks.length > 0 && (
          <div>
            <h4 className="font-medium mb-2">健康风险提示</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-red-600 dark:text-red-400">
              {result.healthRisks.map((risk, index) => (
                <li key={index}>{risk}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="font-medium mb-2">改善建议</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            {healthStatus.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}