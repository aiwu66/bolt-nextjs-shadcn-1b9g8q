"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { CommercialLoanForm } from "./commercial-loan-form";
import { CommercialLoanResults } from "./commercial-loan-results";
import { CommercialLoanChart } from "./commercial-loan-chart";
import { CommercialLoanSchedule } from "./commercial-loan-schedule";
import { CommercialLoanGuide } from "./commercial-loan-guide";
import { CommercialLoanFAQ } from "./commercial-loan-faq";
import { CommercialLoanRateTable } from "./commercial-loan-rate-table";
import { CommercialLoanExamples } from "./commercial-loan-examples";
import { CommercialLoanComparison } from "./commercial-loan-comparison";

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

export function CommercialLoanCalculatorPage() {
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
          <h1 className="text-3xl font-bold mb-2">商业贷款计算器</h1>
          <p className="text-muted-foreground">
            专业的商业贷款计算工具，支持2024年最新LPR利率，提供还款计划和图表分析
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            2024最新政策：首套房LPR利率4.2%，二套房利率4.5%，可根据银行具体政策调整
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="calculator">贷款计算</TabsTrigger>
                <TabsTrigger value="results" disabled={!result}>计算结果</TabsTrigger>
                <TabsTrigger value="schedule" disabled={!result}>还款计划</TabsTrigger>
                <TabsTrigger value="chart" disabled={!result}>图表分析</TabsTrigger>
                <TabsTrigger value="comparison">方案对比</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                <CommercialLoanForm 
                  onCalculate={handleCalculate}
                  onAddComparison={handleAddComparison}
                />
              </TabsContent>

              <TabsContent value="results">
                {result && (
                  <>
                    <CommercialLoanResults result={result} />
                    <div className="mt-8">
                      <CommercialLoanSchedule schedule={result.paymentSchedule} />
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="schedule">
                {result && <CommercialLoanSchedule schedule={result.paymentSchedule} />}
              </TabsContent>

              <TabsContent value="chart">
                {result && <CommercialLoanChart result={result} />}
              </TabsContent>

              <TabsContent value="comparison">
                <CommercialLoanComparison 
                  results={comparisonResults}
                  onClear={() => setComparisonResults([])}
                />
              </TabsContent>
            </Tabs>
          </Card>

          <CommercialLoanRateTable />

          <div className="grid gap-8 lg:grid-cols-2">
            <CommercialLoanGuide />
            <CommercialLoanExamples 
              onUseExample={handleCalculate}
              onAddComparison={handleAddComparison}
            />
          </div>

          <CommercialLoanFAQ />
        </div>
      </div>
    </div>
  );
}