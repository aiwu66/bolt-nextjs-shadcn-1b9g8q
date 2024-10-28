"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { FetalWeightForm } from "./fetal-weight-form";
import { FetalWeightResults } from "./fetal-weight-results";
import { FetalWeightChart } from "./fetal-weight-chart";
import { FetalWeightGuide } from "./fetal-weight-guide";
import { FetalWeightStandard } from "./fetal-weight-standard";
import { FetalWeightFAQ } from "./fetal-weight-faq";
import { FetalWeightNutrition } from "./fetal-weight-nutrition";
import { FetalWeightRecommendations } from "./fetal-weight-recommendations";

interface FetalWeightResult {
  weight: number;
  gestationalAge: number;
  method: string;
  percentile: number;
  weightRange: {
    min: number;
    max: number;
  };
  growthStatus: string;
  recommendations: {
    nutrition: string[];
    lifestyle: string[];
    monitoring: string[];
  };
}

export function FetalWeightCalculator() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [result, setResult] = useState<FetalWeightResult | null>(null);

  const handleCalculate = (data: FetalWeightResult) => {
    setResult(data);
    setActiveTab("results");
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">胎儿体重计算器</h1>
          <p className="text-muted-foreground">
            专业的胎儿体重计算工具，支持多种计算方式，提供发育标准参考和个性化建议
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            本计算器采用国际通用的Hadlock公式和WHO标准，计算结果仅供参考，具体情况请以医生诊断为准。
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          {/* Calculator Section */}
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="calculator">体重计算</TabsTrigger>
                <TabsTrigger value="results" disabled={!result}>计算结果</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                <FetalWeightForm onCalculate={handleCalculate} />
              </TabsContent>

              <TabsContent value="results">
                {result && (
                  <>
                    <FetalWeightResults result={result} />
                    <div className="mt-8">
                      <FetalWeightChart result={result} />
                    </div>
                    <div className="mt-8">
                      <FetalWeightRecommendations result={result} />
                    </div>
                  </>
                )}
              </TabsContent>
            </Tabs>
          </Card>

          {/* Guidance Section */}
          <div className="grid gap-8">
            <FetalWeightGuide />
            <FetalWeightStandard />
            <div className="grid gap-8 lg:grid-cols-2">
              <FetalWeightFAQ />
              <FetalWeightNutrition result={result} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}