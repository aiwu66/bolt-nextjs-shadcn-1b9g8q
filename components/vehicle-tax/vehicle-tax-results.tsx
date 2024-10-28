"use client";

import { Card } from "@/components/ui/card";

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

interface VehicleTaxResultsProps {
  result: TaxResult;
}

export function VehicleTaxResults({ result }: VehicleTaxResultsProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <h3 className="text-lg font-semibold mb-6 text-center">计算结果</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">应缴购置税</p>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            {formatCurrency(result.taxAmount)}
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
            实际税率：{result.effectiveRate.toFixed(2)}%
          </p>
        </div>

        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-green-600 dark:text-green-400 mb-2">计税价格</p>
          <p className="text-2xl font-bold text-green-700 dark:text-green-300">
            {formatCurrency(result.taxablePrice)}
          </p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">
            总抵扣：{formatCurrency(result.deduction)}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-medium mb-4">计算明细</h4>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>车辆原价</span>
            <span>{formatCurrency(result.details.originalPrice)}</span>
          </div>
          {result.details.vatDeduction > 0 && (
            <div className="flex justify-between">
              <span>增值税抵扣</span>
              <span>-{formatCurrency(result.details.vatDeduction)}</span>
            </div>
          )}
          {result.details.otherDeductions > 0 && (
            <div className="flex justify-between">
              <span>其他抵扣</span>
              <span>-{formatCurrency(result.details.otherDeductions)}</span>
            </div>
          )}
          <div className="flex justify-between pt-3 border-t">
            <span className="font-semibold">计税价格</span>
            <span className="font-semibold">{formatCurrency(result.taxablePrice)}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}