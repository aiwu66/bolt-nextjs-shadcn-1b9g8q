"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface ScheduleItem {
  period: number;
  principal: number;
  interest: number;
  balance: number;
}

interface DepositScheduleProps {
  schedule: ScheduleItem[];
}

export function DepositSchedule({ schedule }: DepositScheduleProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">收益明细表</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>期数</TableHead>
              <TableHead>本金</TableHead>
              <TableHead>利息</TableHead>
              <TableHead>本息余额</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule.map((item) => (
              <TableRow key={item.period}>
                <TableCell>第{item.period}期</TableCell>
                <TableCell>{formatCurrency(item.principal)}</TableCell>
                <TableCell>{formatCurrency(item.interest)}</TableCell>
                <TableCell>{formatCurrency(item.balance)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}