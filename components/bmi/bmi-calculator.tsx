"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { BMIForm } from "./bmi-form";
import { BMIResults } from "./bmi-results";
import { BMIChart } from "./bmi-chart";
import { BMIGuide } from "./bmi-guide";
import { BMIHealthReport } from "./bmi-health-report";
import { BMIRecommendations } from "./bmi-recommendations";
import { BMIFoodGuide } from "./bmi-food-guide";
import { BMIExerciseGuide } from "./bmi-exercise-guide";
import { BMIFAQ } from "./bmi-faq";

interface BMIResult {
  bmi: number;
  category: string;
  idealWeight: {
    min: number;
    max: number;
  };
  bodyFat: number;
  healthRisks: string[];
  recommendations: {
    diet: string[];
    exercise: string[];
  };
}

export function BMICalculator() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [result, setResult] = useState<BMIResult | null>(null);

  const handleCalculate = (data: BMIResult) => {
    setResult(data);
    setActiveTab("results");
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">BMI计算器</h1>
          <p className="text-muted-foreground">
            专业的身体质量指数计算工具，提供全面的健康评估和个性化建议
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            BMI仅作为健康评估的参考指标之一，建议结合其他指标综合评估身体状况
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="calculator">BMI计算</TabsTrigger>
                <TabsTrigger value="results" disabled={!result}>计算结果</TabsTrigger>
                <TabsTrigger value="report" disabled={!result}>健康报告</TabsTrigger>
                <TabsTrigger value="guide">健康指南</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                <BMIForm onCalculate={handleCalculate} />
              </TabsContent>

              <TabsContent value="results">
                {result && (
                  <>
                    <BMIResults result={result} />
                    <div className="mt-8">
                      <BMIChart result={result} />
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="report">
                {result && (
                  <>
                    <BMIHealthReport result={result} />
                    <div className="mt-8">
                      <BMIRecommendations result={result} />
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="guide">
                <div className="grid gap-8">
                  <BMIFoodGuide />
                  <BMIExerciseGuide />
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          <div className="grid gap-8 lg:grid-cols-2">
            <BMIGuide />
            <BMIFAQ />
          </div>
        </div>
      </div>
    </div>
  );
}