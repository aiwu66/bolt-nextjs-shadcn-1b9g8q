"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { DepositForm } from "./deposit-form";
import { DepositResults } from "./deposit-results";
import { DepositChart } from "./deposit-chart";
import { DepositSchedule } from "./deposit-schedule";
import { DepositGuide } from "./deposit-guide";
import { DepositFAQ } from "./deposit-faq";
import { DepositExamples } from "./deposit-examples";
import { DepositRateTable } from "./deposit-rate-table";
import { DepositComparison } from "./deposit-comparison";

interface DepositResult {
  principal: number;
  interest: number;
  total: number;
  schedule: Array<{
    period: number;
    principal: number;
    interest: number;
    balance: number;
  }>;
}

export function DepositCalculatorPage() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [result, setResult] = useState<DepositResult | null>(null);
  const [comparisonResults, setComparisonResults] = useState<DepositResult[]>([]);

  const handleCalculate = (data: DepositResult) => {
    setResult(data);
    setActiveTab("results");
  };

  const handleAddComparison = (data: DepositResult) => {
    setComparisonResults([...comparisonResults, data]);
    setActiveTab("comparison");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">存款计算器</h1>
          <p className="text-muted-foreground">
            专业的存款计算工具，支持2024年最新银行利率，提供定期、活期等多种存款方式对比
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            2024最新利率：活期0.25%，三个月1.25%，半年1.45%，一年1.65%，二年2.15%，三年2.65%，五年2.65%
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="calculator">存款计算</TabsTrigger>
                <TabsTrigger value="results" disabled={!result}>计算结果</TabsTrigger>
                <TabsTrigger value="schedule" disabled={!result}>收益明细</TabsTrigger>
                <TabsTrigger value="chart" disabled={!result}>收益分析</TabsTrigger>
                <TabsTrigger value="comparison">方案对比</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                <DepositForm 
                  onCalculate={handleCalculate}
                  onAddComparison={handleAddComparison}
                />
              </TabsContent>

              <TabsContent value="results">
                {result && (
                  <>
                    <DepositResults result={result} />
                    <div className="mt-8">
                      <DepositChart result={result} />
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="schedule">
                {result && <DepositSchedule schedule={result.schedule} />}
              </TabsContent>

              <TabsContent value="chart">
                {result && <DepositChart result={result} />}
              </TabsContent>

              <TabsContent value="comparison">
                <DepositComparison 
                  results={comparisonResults}
                  onClear={() => setComparisonResults([])}
                />
              </TabsContent>
            </Tabs>
          </Card>

          <DepositRateTable />

          <div className="grid gap-8 lg:grid-cols-2">
            <DepositGuide />
            <DepositExamples 
              onUseExample={handleCalculate}
              onAddComparison={handleAddComparison}
            />
          </div>

          <DepositFAQ />
        </div>
      </div>
    </div>
  );
}