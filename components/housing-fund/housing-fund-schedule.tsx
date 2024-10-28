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
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

interface HousingFundScheduleProps {
  schedule: ScheduleItem[];
}

export function HousingFundSchedule({ schedule }: HousingFundScheduleProps) {
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
      <h3 className="text-lg font-semibold mb-4">还款计划表</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>期数</TableHead>
              <TableHead>月供</TableHead>
              <TableHead>本金</TableHead>
              <TableHead>利息</TableHead>
              <TableHead>剩余本金</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule.map((item) => (
              <TableRow key={item.month}>
                <TableCell>{item.month}</TableCell>
                <TableCell>{formatCurrency(item.payment)}</TableCell>
                <TableCell>{formatCurrency(item.principal)}</TableCell>
                <TableCell>{formatCurrency(item.interest)}</TableCell>
                <TableCell>{formatCurrency(item.remainingBalance)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}