"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { MenstrualForm } from "./menstrual-form";
import { MenstrualResults } from "./menstrual-results";
import { MenstrualTimeline } from "./menstrual-timeline";
import { MenstrualGuide } from "./menstrual-guide";
import { MenstrualFAQ } from "./menstrual-faq";
import { MenstrualCare } from "./menstrual-care";
import { MenstrualNutrition } from "./menstrual-nutrition";
import { MenstrualRecommendations } from "./menstrual-recommendations";

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
  recommendations: {
    lifestyle: string[];
    nutrition: string[];
    care: string[];
  };
}

export function MenstrualCalculator() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [result, setResult] = useState<MenstrualResult | null>(null);

  const handleCalculate = (data: MenstrualResult) => {
    setResult(data);
    setActiveTab("results");
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">月经计算器</h1>
          <p className="text-muted-foreground">
            专业的月经周期计算工具，提供经期预测、排卵期计算和健康指导
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            本计算器基于科学的月经周期规律，计算结果仅供参考。如有异常请及时就医。
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="calculator">月经计算</TabsTrigger>
                <TabsTrigger value="results" disabled={!result}>计算结果</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                <MenstrualForm onCalculate={handleCalculate} />
              </TabsContent>

              <TabsContent value="results">
                {result && (
                  <>
                    <MenstrualResults result={result} />
                    <div className="mt-8">
                      <MenstrualTimeline result={result} />
                    </div>
                    <div className="mt-8">
                      <MenstrualRecommendations result={result} />
                    </div>
                  </>
                )}
              </TabsContent>
            </Tabs>
          </Card>

          <div className="grid gap-8">
            <MenstrualGuide />
            <div className="grid gap-8 lg:grid-cols-2">
              <MenstrualCare />
              <MenstrualNutrition />
            </div>
            <MenstrualFAQ />
          </div>
        </div>
      </div>
    </div>
  );
}