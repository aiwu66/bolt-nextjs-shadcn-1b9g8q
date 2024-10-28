"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";

interface LoanResult {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
}

interface CommercialLoanComparisonProps {
  results: LoanResult[];
  onClear: () => void;
}

export function CommercialLoanComparison({ results, onClear }: CommercialLoanComparisonProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  if (results.length === 0) {
    return (
      <Card className="p-6 text-center">
        <p className="text-muted-foreground mb-4">
          还没有添加对比方案，请在计算器中添加方案进行对比
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">方案对比</h3>
        <Button variant="destructive" size="sm" onClick={onClear}>
          <Trash2 className="w-4 h-4 mr-2" />
          清空对比
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>方案</TableHead>
            <TableHead>月供</TableHead>
            <TableHead>支付利息</TableHead>
            <TableHead>还款总额</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result, index) => (
            <TableRow key={index}>
              <TableCell>方案 {index + 1}</TableCell>
              <TableCell>{formatCurrency(result.monthlyPayment)}</TableCell>
              <TableCell>{formatCurrency(result.totalInterest)}</TableCell>
              <TableCell>{formatCurrency(result.totalPayment)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-6">
        <h4 className="font-medium mb-2">对比分析：</h4>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            月供差异：
            {formatCurrency(
              Math.max(...results.map((r) => r.monthlyPayment)) -
              Math.min(...results.map((r) => r.monthlyPayment))
            )}
          </li>
          <li>
            总利息差异：
            {formatCurrency(
              Math.max(...results.map((r) => r.totalInterest)) -
              Math.min(...results.map((r) => r.totalInterest))
            )}
          </li>
          <li>
            还款总额差异：
            {formatCurrency(
              Math.max(...results.map((r) => r.totalPayment)) -
              Math.min(...results.map((r) => r.totalPayment))
            )}
          </li>
        </ul>
      </div>
    </Card>
  );
}