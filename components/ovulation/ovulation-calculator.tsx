"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { OvulationForm } from "./ovulation-form";
import { OvulationResults } from "./ovulation-results";
import { OvulationTimeline } from "./ovulation-timeline";
import { OvulationGuide } from "./ovulation-guide";
import { OvulationFAQ } from "./ovulation-faq";
import { OvulationSymptoms } from "./ovulation-symptoms";
import { OvulationNutrition } from "./ovulation-nutrition";
import { OvulationRecommendations } from "./ovulation-recommendations";

interface OvulationResult {
  ovulationDate: Date;
  fertileWindow: {
    start: Date;
    end: Date;
  };
  nextPeriod: Date;
  cycle: {
    phase: string;
    length: number;
  };
  recommendations: {
    lifestyle: string[];
    nutrition: string[];
    timing: string[];
  };
}

export function OvulationCalculator() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [result, setResult] = useState<OvulationResult | null>(null);

  const handleCalculate = (data: OvulationResult) => {
    setResult(data);
    setActiveTab("results");
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">排卵期计算器</h1>
          <p className="text-muted-foreground">
            专业的排卵期计算工具，支持多种计算方式，提供科学的备孕和避孕指导
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            本计算器基于科学的排卵规律和医学研究数据，计算结果仅供参考，建议结合其他排卵监测方法使用。
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          {/* Calculator Section */}
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="calculator">排卵期计算</TabsTrigger>
                <TabsTrigger value="results" disabled={!result}>计算结果</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                <OvulationForm onCalculate={handleCalculate} />
              </TabsContent>

              <TabsContent value="results">
                {result && (
                  <>
                    <OvulationResults result={result} />
                    <div className="mt-8">
                      <OvulationTimeline result={result} />
                    </div>
                    <div className="mt-8">
                      <OvulationRecommendations result={result} />
                    </div>
                  </>
                )}
              </TabsContent>
            </Tabs>
          </Card>

          {/* Guidance Section */}
          <div className="grid gap-8">
            <OvulationGuide />
            <div className="grid gap-8 lg:grid-cols-2">
              <OvulationSymptoms />
              <OvulationNutrition />
            </div>
            <OvulationFAQ />
          </div>
        </div>
      </div>
    </div>
  );
}