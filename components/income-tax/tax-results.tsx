"use client";

import { Card } from "@/components/ui/card";

interface TaxResult {
  taxableIncome: number;
  tax: number;
  afterTax: number;
  taxRate: number;
  quickDeduction: number;
  deductions: {
    insurance: number;
    special: number;
    base: number;
  };
}

interface TaxResultsProps {
  result: TaxResult;
}

export function TaxResults({ result }: TaxResultsProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-3">
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30">
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">应纳税额</p>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            {formatCurrency(result.tax)}
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
            税率：{result.taxRate.toFixed(1)}%
          </p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30">
          <p className="text-sm text-green-600 dark:text-green-400 mb-1">税后收入</p>
          <p className="text-2xl font-bold text-green-700 dark:text-green-300">
            {formatCurrency(result.afterTax)}
          </p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">
            速算扣除：{formatCurrency(result.quickDeduction / 12)}
          </p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/30 dark:to-fuchsia-900/30">
          <p className="text-sm text-purple-600 dark:text-purple-400 mb-1">应纳税所得额</p>
          <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            {formatCurrency(result.taxableIncome)}
          </p>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">扣除项目明细</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>基本减除费用</span>
            <span className="font-medium">{formatCurrency(result.deductions.base)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>社保公积金</span>
            <span className="font-medium">{formatCurrency(result.deductions.insurance)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>专项附加扣除</span>
            <span className="font-medium">{formatCurrency(result.deductions.special)}</span>
          </div>
          <div className="flex justify-between items-center border-t pt-4">
            <span className="font-semibold">扣除总额</span>
            <span className="font-semibold">
              {formatCurrency(
                result.deductions.base +
                result.deductions.insurance +
                result.deductions.special
              )}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}