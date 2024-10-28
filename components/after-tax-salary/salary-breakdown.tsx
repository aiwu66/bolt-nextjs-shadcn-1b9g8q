"use client";

import { Card } from "@/components/ui/card";

interface SalaryResult {
  beforeTax: number;
  afterTax: number;
  tax: number;
  insurance: {
    pension: number;
    medical: number;
    unemployment: number;
    housingFund: number;
    total: number;
  };
  details: {
    baseSalary: number;
    bonus: number;
    allowance: number;
  };
}

interface SalaryBreakdownProps {
  result: SalaryResult;
}

export function SalaryBreakdown({ result }: SalaryBreakdownProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <Card className="p-6 bg-white dark:bg-gray-800">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">工资条</h3>
        
        <div className="space-y-8">
          <section>
            <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">收入项目</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>基本工资</span>
                <span>{formatCurrency(result.details.baseSalary)}</span>
              </div>
              {result.details.bonus > 0 && (
                <div className="flex justify-between">
                  <span>奖金</span>
                  <span>{formatCurrency(result.details.bonus)}</span>
                </div>
              )}
              {result.details.allowance > 0 && (
                <div className="flex justify-between">
                  <span>津贴补贴</span>
                  <span>{formatCurrency(result.details.allowance)}</span>
                </div>
              )}
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">应发工资</span>
                <span className="font-semibold">{formatCurrency(result.beforeTax)}</span>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-lg font-semibold mb-4 text-red-600 dark:text-red-400">扣除项目</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>养老保险</span>
                <span>{formatCurrency(result.insurance.pension)}</span>
              </div>
              <div className="flex justify-between">
                <span>医疗保险</span>
                <span>{formatCurrency(result.insurance.medical)}</span>
              </div>
              <div className="flex justify-between">
                <span>失业保险</span>
                <span>{formatCurrency(result.insurance.unemployment)}</span>
              </div>
              <div className="flex justify-between">
                <span>住房公积金</span>
                <span>{formatCurrency(result.insurance.housingFund)}</span>
              </div>
              <div className="flex justify-between">
                <span>个人所得税</span>
                <span>{formatCurrency(result.tax)}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">扣除合计</span>
                <span className="font-semibold">{formatCurrency(result.insurance.total + result.tax)}</span>
              </div>
            </div>
          </section>

          <section className="border-t pt-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">实发工资</span>
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                {formatCurrency(result.afterTax)}
              </span>
            </div>
          </section>
        </div>

        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p className="text-center">本工资条仅供参考，实际工资以公司人力资源部门核算为准</p>
          <p className="text-center mt-1">统计期间：{new Date().toLocaleDateString('zh-CN')}</p>
        </div>
      </div>
    </Card>
  );
}