"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { MortgageForm } from "./mortgage-form";
import { MortgageResults } from "./mortgage-results";
import { MortgageChart } from "./mortgage-chart";
import { MortgageSchedule } from "./mortgage-schedule";
import { MortgageGuide } from "./mortgage-guide";
import { MortgageFAQ } from "./mortgage-faq";
import { MortgageRateTable } from "./mortgage-rate-table";
import { MortgageExamples } from "./mortgage-examples";
import { MortgageComparison } from "./mortgage-comparison";

interface MortgageResult {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  paymentSchedule: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    remainingBalance: number;
  }>;
}

export function MortgageCalculatorPage() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [result, setResult] = useState<MortgageResult | null>(null);
  const [comparisonResults, setComparisonResults] = useState<MortgageResult[]>([]);

  const handleCalculate = (data: MortgageResult) => {
    setResult(data);
    setActiveTab("results");
  };

  const handleAddComparison = (data: MortgageResult) => {
    setComparisonResults([...comparisonResults, data]);
    setActiveTab("comparison");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">房贷计算器</h1>
          <p className="text-muted-foreground">
            专业的房贷计算工具，支持2024年最新利率政策，提供等额本息和等额本金对比
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            2024最新政策：首套房商贷利率4.2%，二套房利率4.5%，公积金利率3.1%
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="calculator">房贷计算</TabsTrigger>
                <TabsTrigger value="results" disabled={!result}>计算结果</TabsTrigger>
                <TabsTrigger value="schedule" disabled={!result}>还款计划</TabsTrigger>
                <TabsTrigger value="chart" disabled={!result}>图表分析</TabsTrigger>
                <TabsTrigger value="comparison">方案对比</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                <MortgageForm 
                  onCalculate={handleCalculate}
                  onAddComparison={handleAddComparison}
                />
              </TabsContent>

              <TabsContent value="results">
                {result && (
                  <>
                    <MortgageResults result={result} />
                    <div className="mt-8">
                      <MortgageSchedule schedule={result.paymentSchedule} />
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="schedule">
                {result && <MortgageSchedule schedule={result.paymentSchedule} />}
              </TabsContent>

              <TabsContent value="chart">
                {result && <MortgageChart result={result} />}
              </TabsContent>

              <TabsContent value="comparison">
                <MortgageComparison 
                  results={comparisonResults}
                  onClear={() => setComparisonResults([])}
                />
              </TabsContent>
            </Tabs>
          </Card>

          <MortgageRateTable />

          <div className="grid gap-8 lg:grid-cols-2">
            <MortgageGuide />
            <MortgageExamples 
              onUseExample={handleCalculate}
              onAddComparison={handleAddComparison}
            />
          </div>

          <MortgageFAQ />
        </div>
      </div>
    </div>
  );
}