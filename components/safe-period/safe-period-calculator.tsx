"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { SafePeriodForm } from "./safe-period-form";
import { SafePeriodResults } from "./safe-period-results";
import { SafePeriodTimeline } from "./safe-period-timeline";
import { SafePeriodGuide } from "./safe-period-guide";
import { SafePeriodFAQ } from "./safe-period-faq";
import { SafePeriodCare } from "./safe-period-care";
import { SafePeriodRecommendations } from "./safe-period-recommendations";
import { SafePeriodCalendar } from "./safe-period-calendar";

interface SafePeriodResult {
  nextPeriod: Date;
  ovulationDate: Date;
  safePeriods: {
    beforeOvulation: {
      start: Date;
      end: Date;
    };
    afterOvulation: {
      start: Date;
      end: Date;
    };
  };
  dangerPeriod: {
    start: Date;
    end: Date;
  };
  cycle: {
    length: number;
    phase: string;
  };
  recommendations: {
    lifestyle: string[];
    health: string[];
    precautions: string[];
  };
}

export function SafePeriodCalculator() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [result, setResult] = useState<SafePeriodResult | null>(null);

  const handleCalculate = (data: SafePeriodResult) => {
    setResult(data);
    setActiveTab("results");
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">安全期计算器</h1>
          <p className="text-muted-foreground">
            专业的安全期计算工具，提供科学的避孕建议和健康指导
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            安全期计算仅供参考，不同人的生理周期可能存在差异，建议结合其他避孕措施使用。如有异常请及时就医。
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="calculator">安全期计算</TabsTrigger>
                <TabsTrigger value="results" disabled={!result}>计算结果</TabsTrigger>
                <TabsTrigger value="calendar" disabled={!result}>周期日历</TabsTrigger>
                <TabsTrigger value="guide">使用指南</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                <SafePeriodForm onCalculate={handleCalculate} />
              </TabsContent>

              <TabsContent value="results">
                {result && (
                  <>
                    <SafePeriodResults result={result} />
                    <div className="mt-8">
                      <SafePeriodTimeline result={result} />
                    </div>
                    <div className="mt-8">
                      <SafePeriodRecommendations result={result} />
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="calendar">
                {result && <SafePeriodCalendar result={result} />}
              </TabsContent>

              <TabsContent value="guide">
                <SafePeriodGuide />
              </TabsContent>
            </Tabs>
          </Card>

          <div className="grid gap-8">
            <SafePeriodCare />
            <SafePeriodFAQ />
          </div>
        </div>
      </div>
    </div>
  );
}