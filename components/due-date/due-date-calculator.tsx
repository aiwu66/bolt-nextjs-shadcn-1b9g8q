"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { DueDateForm } from "./due-date-form";
import { DueDateResults } from "./due-date-results";
import { DueDateTimeline } from "./due-date-timeline";
import { DueDateGuide } from "./due-date-guide";
import { DueDateFAQ } from "./due-date-faq";
import { DueDateCheckList } from "./due-date-checklist";
import { DueDateNutrition } from "./due-date-nutrition";
import { DueDatePrenatalCare } from "./due-date-prenatal-care";

interface DueDateResult {
  dueDate: Date;
  gestationalAge: {
    weeks: number;
    days: number;
  };
  trimester: number;
  conception: Date;
  milestones: Array<{
    date: Date;
    event: string;
    description: string;
  }>;
}

export function DueDateCalculator() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [result, setResult] = useState<DueDateResult | null>(null);

  const handleCalculate = (data: DueDateResult) => {
    setResult(data);
    setActiveTab("results");
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">预产期计算器</h1>
          <p className="text-muted-foreground">
            专业的预产期计算工具，支持多种计算方式，提供发育标准参考和个性化建议
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
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="calculator">预产期计算</TabsTrigger>
                <TabsTrigger value="results" disabled={!result}>计算结果</TabsTrigger>
                <TabsTrigger value="timeline" disabled={!result}>孕期时间轴</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                <DueDateForm onCalculate={handleCalculate} />
              </TabsContent>

              <TabsContent value="results">
                {result && (
                  <>
                    <DueDateResults result={result} />
                    <div className="mt-8">
                      <DueDatePrenatalCare result={result} />
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="timeline">
                {result && <DueDateTimeline result={result} />}
              </TabsContent>
            </Tabs>
          </Card>

          {/* Guidance Section */}
          <div className="grid gap-8">
            <DueDateGuide />
            <div className="grid gap-8 lg:grid-cols-2">
              <DueDateCheckList />
              <DueDateNutrition />
            </div>
            <DueDateFAQ />
          </div>
        </div>
      </div>
    </div>
  );
}