"use client";

import { Card } from "@/components/ui/card";

interface MortgageResult {
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

interface MortgageResultsProps {
  result: MortgageResult;
}

export function MortgageResults({ result }: MortgageResultsProps) {
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
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">首月还款</p>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            {formatCurrency(result.monthlyPayment)}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-green-600 dark:text-green-400 mb-2">支付利息总额</p>
          <p className="text-2xl font-bold text-green-700 dark:text-green-300">
            {formatCurrency(result.totalInterest)}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/30 transform transition-all duration-300 hover:scale-105">
          <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">还款总额</p>
          <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            {formatCurrency(result.totalPayment)}
          </p>
        </div>
      </div>
    </Card>
  );
}