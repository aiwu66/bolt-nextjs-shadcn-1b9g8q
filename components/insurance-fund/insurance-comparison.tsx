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

interface InsuranceResult {
  personalTotal: number;
  companyTotal: number;
  personal: {
    pension: number;
    medical: number;
    unemployment: number;
    housingFund: number;
  };
  company: {
    pension: number;
    medical: number;
    unemployment: number;
    injury: number;
    maternity: number;
    housingFund: number;
  };
}

interface InsuranceComparisonProps {
  results?: InsuranceResult[];
  onClear: () => void;
}

export function InsuranceComparison({ results = [], onClear }: InsuranceComparisonProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  if (!results || results.length === 0) {
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
            <TableHead>个人缴费</TableHead>
            <TableHead>单位缴费</TableHead>
            <TableHead>合计缴费</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result, index) => (
            <TableRow key={index}>
              <TableCell>方案 {index + 1}</TableCell>
              <TableCell>{formatCurrency(result.personalTotal)}</TableCell>
              <TableCell>{formatCurrency(result.companyTotal)}</TableCell>
              <TableCell>{formatCurrency(result.personalTotal + result.companyTotal)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-6">
        <h4 className="font-medium mb-2">对比分析：</h4>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            个人缴费差异：
            {formatCurrency(
              Math.max(...results.map((r) => r.personalTotal)) -
              Math.min(...results.map((r) => r.personalTotal))
            )}
          </li>
          <li>
            单位缴费差异：
            {formatCurrency(
              Math.max(...results.map((r) => r.companyTotal)) -
              Math.min(...results.map((r) => r.companyTotal))
            )}
          </li>
          <li>
            总缴费差异：
            {formatCurrency(
              Math.max(...results.map((r) => r.personalTotal + r.companyTotal)) -
              Math.min(...results.map((r) => r.personalTotal + r.companyTotal))
            )}
          </li>
        </ul>
      </div>
    </Card>
  );
}