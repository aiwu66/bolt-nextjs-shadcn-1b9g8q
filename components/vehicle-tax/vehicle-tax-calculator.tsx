"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { VehicleTaxForm } from "./vehicle-tax-form";
import { VehicleTaxResults } from "./vehicle-tax-results";
import { VehicleTaxGuide } from "./vehicle-tax-guide";
import { VehicleTaxFAQ } from "./vehicle-tax-faq";
import { VehicleTaxPolicyTable } from "./vehicle-tax-policy-table";
import { VehicleTaxExamples } from "./vehicle-tax-examples";
import { VehicleTaxComparison } from "./vehicle-tax-comparison";

interface TaxResult {
  taxablePrice: number;
  taxAmount: number;
  effectiveRate: number;
  deduction: number;
  details: {
    originalPrice: number;
    vatDeduction: number;
    otherDeductions: number;
  };
}

export function VehicleTaxCalculator() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [result, setResult] = useState<TaxResult | null>(null);
  const [comparisonResults, setComparisonResults] = useState<TaxResult[]>([]);

  const handleCalculate = (data: TaxResult) => {
    setResult(data);
    setActiveTab("results");
  };

  const handleAddComparison = (data: TaxResult) => {
    setComparisonResults([...comparisonResults, data]);
    setActiveTab("comparison");
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">购置税计算器</h1>
          <p className="text-muted-foreground">
            专业的车辆购置税计算工具，支持2024年最新政策，一键计算应缴税额
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            2024最新政策：购置税税率5%，新能源汽车免征购置税，二手车减半征收
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="calculator">购置税计算</TabsTrigger>
                <TabsTrigger value="results" disabled={!result}>计算结果</TabsTrigger>
                <TabsTrigger value="policy">政策速查</TabsTrigger>
                <TabsTrigger value="comparison">方案对比</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                <VehicleTaxForm 
                  onCalculate={handleCalculate}
                  onAddComparison={handleAddComparison}
                />
              </TabsContent>

              <TabsContent value="results">
                {result && <VehicleTaxResults result={result} />}
              </TabsContent>

              <TabsContent value="policy">
                <VehicleTaxPolicyTable />
              </TabsContent>

              <TabsContent value="comparison">
                <VehicleTaxComparison 
                  results={comparisonResults}
                  onClear={() => setComparisonResults([])}
                />
              </TabsContent>
            </Tabs>
          </Card>

          <div className="grid gap-8 lg:grid-cols-2">
            <VehicleTaxGuide />
            <VehicleTaxExamples 
              onUseExample={handleCalculate}
              onAddComparison={handleAddComparison}
            />
          </div>

          <VehicleTaxFAQ />
        </div>
      </div>
    </div>
  );
}