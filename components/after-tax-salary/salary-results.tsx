"use client";

import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface SalaryResultsProps {
  formData?: {
    baseSalary: string;
    bonus?: string;
    allowance?: string;
    insurance?: {
      pension: string;
      medical: string;
      unemployment: string;
      injury: string;
      maternity: string;
      housingFund: string;
    };
    city?: string;
    taxDeductions?: {
      children: string;
      education: string;
      housing: string;
      elderly: string;
      continuing: string;
    };
  };
  result?: {
    grossIncome: number;
    taxableIncome: number;
    tax: number;
    netIncome: number;
    insuranceTotal: number;
    taxDeductionsTotal: number;
  };
  overtimeResult?: {
    workdayOT: number;
    weekendOT: number;
    holidayOT: number;
    totalOT: number;
  };
}

export function SalaryResults({ formData, result, overtimeResult }: SalaryResultsProps) {
  if (!formData || !result) {
    return null;
  }

  const formatPercentage = (value: number) => {
    return `${(value * 100).toFixed(1)}%`;
  };

  const calculateTaxRate = () => {
    if (!result.taxableIncome || !result.tax) return 0;
    return result.tax / result.taxableIncome;
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <h3 className="text-lg font-semibold mb-6 text-center">计算结果</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">税前收入</p>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            {formatCurrency(result.grossIncome)}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-green-600 dark:text-green-400 mb-2">五险一金</p>
          <p className="text-2xl font-bold text-green-700 dark:text-green-300">
            {formatCurrency(result.insuranceTotal)}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-red-600 dark:text-red-400 mb-2">个人所得税</p>
          <p className="text-2xl font-bold text-red-700 dark:text-red-300">
            {formatCurrency(result.tax)}
            <span className="text-sm ml-2">
              ({formatPercentage(calculateTaxRate())})
            </span>
          </p>
        </div>

        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">税后收入</p>
          <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            {formatCurrency(result.netIncome)}
          </p>
        </div>
      </div>

      {overtimeResult && (
        <div className="mt-6">
          <h4 className="text-md font-semibold mb-4">加班费明细</h4>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/30">
              <p className="text-sm text-amber-600 dark:text-amber-400">工作日加班</p>
              <p className="text-lg font-semibold text-amber-700 dark:text-amber-300">
                {formatCurrency(overtimeResult.workdayOT)}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/30">
              <p className="text-sm text-amber-600 dark:text-amber-400">周末加班</p>
              <p className="text-lg font-semibold text-amber-700 dark:text-amber-300">
                {formatCurrency(overtimeResult.weekendOT)}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/30">
              <p className="text-sm text-amber-600 dark:text-amber-400">节假日加班</p>
              <p className="text-lg font-semibold text-amber-700 dark:text-amber-300">
                {formatCurrency(overtimeResult.holidayOT)}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/30">
              <p className="text-sm text-amber-600 dark:text-amber-400">加班费总计</p>
              <p className="text-lg font-semibold text-amber-700 dark:text-amber-300">
                {formatCurrency(overtimeResult.totalOT)}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 text-sm text-muted-foreground">
        <p>* 以上计算结果仅供参考，实际金额以公司人事部门核算为准</p>
        <p>* 个税计算基于最新的个人所得税法规定</p>
      </div>
    </Card>
  );
}