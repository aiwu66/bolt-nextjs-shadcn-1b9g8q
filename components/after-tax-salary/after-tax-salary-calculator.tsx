"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { SalaryForm } from "./salary-form";
import { SalaryResults } from "./salary-results";
import { SalaryBreakdown } from "./salary-breakdown";
import { SalaryChart } from "./salary-chart";
import { SalaryGuide } from "./salary-guide";
import { SalaryFAQ } from "./salary-faq";
import { SalaryExamples } from "./salary-examples";
import { CitySelector } from "./city-selector";
import { OvertimeCalculator } from "./overtime-calculator";

interface SalaryResult {
  beforeTax: number;
  afterTax: number;
  tax: number;
  insurance: {
    pension: number;
    medical: number;
    unemployment: number;
    housingFund: number;
    total: number;
  };
  deductions: {
    [key: string]: number;
  };
  details: {
    [key: string]: number;
  };
}

export function AfterTaxSalaryCalculator() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [result, setResult] = useState<SalaryResult | null>(null);
  const [selectedCity, setSelectedCity] = useState("beijing");

  const handleCalculate = (data: SalaryResult) => {
    setResult(data);
    setActiveTab("results");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">税后工资计算器</h1>
          <p className="text-muted-foreground">
            专业的工资计算工具，支持2024年最新个税和五险一金政策，一键计算税后收入
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            2024年个税起征点为5000元/月，社保基数将于4月1日调整，请注意更新
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="calculator">工资计算</TabsTrigger>
                <TabsTrigger value="overtime">加班工资</TabsTrigger>
                <TabsTrigger value="results" disabled={!result}>计算结果</TabsTrigger>
                <TabsTrigger value="breakdown" disabled={!result}>工资条</TabsTrigger>
              </TabsList>

              <div className="mb-6">
                <CitySelector
                  selectedCity={selectedCity}
                  onCityChange={setSelectedCity}
                />
              </div>

              <TabsContent value="calculator">
                <SalaryForm 
                  onCalculate={handleCalculate}
                  selectedCity={selectedCity}
                />
              </TabsContent>

              <TabsContent value="overtime">
                <OvertimeCalculator
                  onCalculate={handleCalculate}
                  selectedCity={selectedCity}
                />
              </TabsContent>

              <TabsContent value="results">
                {result && (
                  <>
                    <SalaryResults result={result} />
                    <div className="mt-8">
                      <SalaryChart result={result} />
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="breakdown">
                {result && <SalaryBreakdown result={result} />}
              </TabsContent>
            </Tabs>
          </Card>

          <div className="grid gap-8 lg:grid-cols-2">
            <SalaryGuide />
            <SalaryExamples onUseExample={handleCalculate} />
          </div>

          <SalaryFAQ />
        </div>
      </div>
    </div>
  );
}