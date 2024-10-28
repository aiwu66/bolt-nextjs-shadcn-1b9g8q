"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { SalaryTaxForm } from "./salary-tax-form";
import { BonusTaxForm } from "./bonus-tax-form";
import { FreelanceTaxForm } from "./freelance-tax-form";
import { TaxResults } from "./tax-results";
import { TaxDeductionGuide } from "./tax-deduction-guide";
import { TaxPolicyGuide } from "./tax-policy-guide";
import { TaxFAQ } from "./tax-faq";
import { TaxRateTable } from "./tax-rate-table";
import { TaxSavingTips } from "./tax-saving-tips";

interface TaxResult {
  taxableIncome: number;
  tax: number;
  afterTax: number;
  taxRate: number;
  quickDeduction: number;
  deductions: {
    [key: string]: number;
  };
}

export function IncomeTaxCalculator() {
  const [activeTab, setActiveTab] = useState("salary");
  const [result, setResult] = useState<TaxResult | null>(null);

  const handleCalculate = (data: TaxResult) => {
    setResult(data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">个人所得税计算器</h1>
          <p className="text-muted-foreground">
            专业的个税计算工具，支持2024年最新税率政策，提供精准计算和节税建议
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            2024年个税起征点为5000元/月，专项附加扣除包含子女教育、继续教育、住房贷款利息、住房租金、赡养老人、大病医疗等
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="salary">工资薪金</TabsTrigger>
                <TabsTrigger value="bonus">年终奖金</TabsTrigger>
                <TabsTrigger value="freelance">劳务报酬</TabsTrigger>
              </TabsList>

              <TabsContent value="salary">
                <SalaryTaxForm onCalculate={handleCalculate} />
              </TabsContent>

              <TabsContent value="bonus">
                <BonusTaxForm onCalculate={handleCalculate} />
              </TabsContent>

              <TabsContent value="freelance">
                <FreelanceTaxForm onCalculate={handleCalculate} />
              </TabsContent>
            </Tabs>
          </Card>

          {result && (
            <Card className="p-6">
              <TaxResults result={result} />
            </Card>
          )}

          <div className="grid gap-8 lg:grid-cols-2">
            <TaxDeductionGuide />
            <TaxPolicyGuide />
          </div>

          <TaxRateTable />
          <TaxSavingTips />
          <TaxFAQ />
        </div>
      </div>
    </div>
  );
}