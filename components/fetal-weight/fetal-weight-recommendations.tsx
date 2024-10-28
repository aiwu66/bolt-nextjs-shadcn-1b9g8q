"use client";

import { Card } from "@/components/ui/card";

interface FetalWeightResult {
  weight: number;
  growthStatus: string;
  recommendations: {
    nutrition: string[];
    lifestyle: string[];
    monitoring: string[];
  };
}

interface FetalWeightRecommendationsProps {
  result: FetalWeightResult;
}

export function FetalWeightRecommendations({ result }: FetalWeightRecommendationsProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">个性化建议</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3 text-green-600 dark:text-green-400">营养建议</h4>
          <ul className="space-y-2">
            {result.recommendations.nutrition.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-green-500">•</span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3 text-blue-600 dark:text-blue-400">生活方式建议</h4>
          <ul className="space-y-2">
            {result.recommendations.lifestyle.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-blue-500">•</span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3 text-purple-600 dark:text-purple-400">监测建议</h4>
          <ul className="space-y-2">
            {result.recommendations.monitoring.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-purple-500">•</span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <p className="text-sm text-yellow-600 dark:text-yellow-400">
          注意：以上建议仅供参考，具体请遵医嘱。如有异常情况请及时就医。
        </p>
      </div>
    </Card>
  );
}