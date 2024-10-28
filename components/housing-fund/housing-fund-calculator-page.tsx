"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { HousingFundForm } from "./housing-fund-form";
import { HousingFundResults } from "./housing-fund-results";
import { HousingFundChart } from "./housing-fund-chart";
import { HousingFundSchedule } from "./housing-fund-schedule";
import { HousingFundGuide } from "./housing-fund-guide";
import { HousingFundFAQ } from "./housing-fund-faq";
import { HousingFundRateTable } from "./housing-fund-rate-table";
import { HousingFundExamples } from "./housing-fund-examples";

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

export function HousingFundCalculatorPage() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [result, setResult] = useState<LoanResult | null>(null);

  const handleCalculate = (data: LoanResult) => {
    setResult(data);
    setActiveTab("results");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">公积金贷款计算器</h1>
          <p className="text-muted-foreground">
            专业的公积金贷款计算工具，支持2024年最新利率政策，提供还款计划和图表分析
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            2024最新政策：公积金贷款利率3.1%，可贷额度与缴存时间和金额相关
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="calculator">贷款计算</TabsTrigger>
                <TabsTrigger value="results" disabled={!result}>计算结果</TabsTrigger>
                <TabsTrigger value="schedule" disabled={!result}>还款计划</TabsTrigger>
                <TabsTrigger value="chart" disabled={!result}>图表分析</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                <HousingFundForm onCalculate={handleCalculate} />
              </TabsContent>

              <TabsContent value="results">
                {result && (
                  <>
                    <HousingFundResults result={result} />
                    <div className="mt-8">
                      <HousingFundSchedule schedule={result.paymentSchedule} />
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="schedule">
                {result && <HousingFundSchedule schedule={result.paymentSchedule} />}
              </TabsContent>

              <TabsContent value="chart">
                {result && <HousingFundChart result={result} />}
              </TabsContent>
            </Tabs>
          </Card>

          <HousingFundRateTable />

          <div className="grid gap-8 lg:grid-cols-2">
            <HousingFundGuide />
            <HousingFundExamples onUseExample={handleCalculate} />
          </div>

          <HousingFundFAQ />
        </div>
      </div>
    </div>
  );
}