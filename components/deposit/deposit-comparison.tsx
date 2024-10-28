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

interface DepositResult {
  principal: number;
  interest: number;
  total: number;
}

interface DepositComparisonProps {
  results: DepositResult[];
  onClear: () => void;
}

export function DepositComparison({ results, onClear }: DepositComparisonProps) {
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
            <TableHead>本金</TableHead>
            <TableHead>利息收益</TableHead>
            <TableHead>到期本息</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result, index) => (
            <TableRow key={index}>
              <TableCell>方案 {index + 1}</TableCell>
              <TableCell>{formatCurrency(result.principal)}</TableCell>
              <TableCell>{formatCurrency(result.interest)}</TableCell>
              <TableCell>{formatCurrency(result.total)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-6">
        <h4 className="font-medium mb-2">对比分析：</h4>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            本金差异：
            {formatCurrency(
              Math.max(...results.map((r) => r.principal)) -
              Math.min(...results.map((r) => r.principal))
            )}
          </li>
          <li>
            利息差异：
            {formatCurrency(
              Math.max(...results.map((r) => r.interest)) -
              Math.min(...results.map((r) => r.interest))
            )}
          </li>
          <li>
            总收益差异：
            {formatCurrency(
              Math.max(...results.map((r) => r.total)) -
              Math.min(...results.map((r) => r.total))
            )}
          </li>
        </ul>
      </div>
    </Card>
  );
}