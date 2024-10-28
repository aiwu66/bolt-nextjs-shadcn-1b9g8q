"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculator-layout";
import { MortgageForm } from "@/components/mortgage/mortgage-form";
import { MortgageResults } from "@/components/mortgage/mortgage-results";
import { MortgageGuide } from "@/components/mortgage/mortgage-guide";

export function MortgageCalculator() {
  const [result, setResult] = useState(null);

  return (
    <CalculatorLayout
      title="房贷计算器"
      description="专业的房贷计算工具，帮您轻松计算房贷月供、利息和还款总额"
    >
      <div className="space-y-8">
        <MortgageForm onCalculate={setResult} />
        {result && <MortgageResults result={result} />}
        <MortgageGuide />
      </div>
    </CalculatorLayout>
  );
}