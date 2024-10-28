"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { CarLoanForm } from "./car-loan-form";
import { CarLoanResults } from "./car-loan-results";
import { CarLoanChart } from "./car-loan-chart";
import { CarLoanSchedule } from "./car-loan-schedule";
import { CarLoanGuide } from "./car-loan-guide";
import { CarLoanFAQ } from "./car-loan-faq";
import { CarLoanRateTable } from "./car-loan-rate-table";
import { CarLoanExamples } from "./car-loan-examples";
import { CarLoanComparison } from "./car-loan-comparison";

interface LoanResult {
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

export function CarLoanCalculatorPage() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [result, setResult] = useState<LoanResult | null>(null);
  const [comparisonResults, setComparisonResults] = useState<LoanResult[]>([]);

  const handleCalculate = (data: LoanResult) => {
    setResult(data);
    setActiveTab("results");
  };

  const handleAddComparison = (data: LoanResult) => {
    setComparisonResults([...comparisonResults, data]);
    setActiveTab("comparison");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">车贷计算器</h1>
          <p className="text-muted-foreground">
            专业的汽车贷款计算工具，支持2024年最新利率政策，提供银行贷款和汽车金融对比
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            2024最新政策：银行贷款年利率4.35%起，汽车金融年利率7.5%起，首付比例最低20%
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="calculator">车贷计算</TabsTrigger>
                <TabsTrigger value="results" disabled={!result}>计算结果</TabsTrigger>
                <TabsTrigger value="schedule" disabled={!result}>还款计划</TabsTrigger>
                <TabsTrigger value="chart" disabled={!result}>图表分析</TabsTrigger>
                <TabsTrigger value="comparison">方案对比</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                <CarLoanForm 
                  onCalculate={handleCalculate}
                  onAddComparison={handleAddComparison}
                />
              </TabsContent>

              <TabsContent value="results">
                {result && (
                  <>
                    <CarLoanResults result={result} />
                    <div className="mt-8">
                      <CarLoanSchedule schedule={result.paymentSchedule} />
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="schedule">
                {result && <CarLoanSchedule schedule={result.paymentSchedule} />}
              </TabsContent>

              <TabsContent value="chart">
                {result && <CarLoanChart result={result} />}
              </TabsContent>

              <TabsContent value="comparison">
                <CarLoanComparison 
                  results={comparisonResults}
                  onClear={() => setComparisonResults([])}
                />
              </TabsContent>
            </Tabs>
          </Card>

          <CarLoanRateTable />

          <div className="grid gap-8 lg:grid-cols-2">
            <CarLoanGuide />
            <CarLoanExamples 
              onUseExample={handleCalculate}
              onAddComparison={handleAddComparison}
            />
          </div>

          <CarLoanFAQ />
        </div>
      </div>
    </div>
  );
}