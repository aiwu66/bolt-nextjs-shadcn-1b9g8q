"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { InsuranceForm } from "./insurance-form";
import { InsuranceResults } from "./insurance-results";
import { InsuranceBreakdown } from "./insurance-breakdown";
import { InsuranceChart } from "./insurance-chart";
import { InsuranceGuide } from "./insurance-guide";
import { InsuranceFAQ } from "./insurance-faq";
import { InsuranceExamples } from "./insurance-examples";
import { InsuranceComparison } from "./insurance-comparison";

interface InsuranceResult {
  personalTotal: number;
  companyTotal: number;
  personal: {
    pension: number;
    medical: number;
    unemployment: number;
    housingFund: number;
    total: number;
  };
  company: {
    pension: number;
    medical: number;
    unemployment: number;
    injury: number;
    maternity: number;
    housingFund: number;
    total: number;
  };
  base: {
    insurance: number;
    housingFund: number;
  };
}

export function InsuranceFundCalculator() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [result, setResult] = useState<InsuranceResult | null>(null);
  const [comparisonResults, setComparisonResults] = useState<InsuranceResult[]>([]);

  const handleCalculate = (data: InsuranceResult) => {
    setResult(data);
    setActiveTab("results");
  };

  const handleAddComparison = (data: InsuranceResult) => {
    setComparisonResults([...comparisonResults, data]);
    setActiveTab("comparison");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">五险一金计算器</h1>
          <p className="text-muted-foreground">
            专业的五险一金计算工具，支持2024年最新政策，一键计算个人和企业缴费金额
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            2024年社保基数将于4月1日调整，各地缴费比例和基数上下限可能有所变化，请以当地政策为准
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="calculator">五险一金计算</TabsTrigger>
                <TabsTrigger value="results" disabled={!result}>计算结果</TabsTrigger>
                <TabsTrigger value="breakdown" disabled={!result}>缴费明细</TabsTrigger>
                <TabsTrigger value="comparison">方案对比</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                <InsuranceForm 
                  onCalculate={handleCalculate}
                  onAddComparison={handleAddComparison}
                />
              </TabsContent>

              <TabsContent value="results">
                {result && (
                  <>
                    <InsuranceResults result={result} />
                    <div className="mt-8">
                      <InsuranceChart result={result} />
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="breakdown">
                {result && <InsuranceBreakdown result={result} />}
              </TabsContent>

              <TabsContent value="comparison">
                <InsuranceComparison 
                  results={comparisonResults}
                  onClear={() => setComparisonResults([])}
                />
              </TabsContent>
            </Tabs>
          </Card>

          <div className="grid gap-8 lg:grid-cols-2">
            <InsuranceGuide />
            <InsuranceExamples 
              onUseExample={handleCalculate}
              onAddComparison={handleAddComparison}
            />
          </div>

          <InsuranceFAQ />
        </div>
      </div>
    </div>
  );
}