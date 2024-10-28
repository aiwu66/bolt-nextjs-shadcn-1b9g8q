"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface InsuranceResult {
  personal: {
    pension: number;
    medical: number;
    unemployment: number;
    housingFund: number;
    total: number;
  };
  company: {
    pension: number;
    medical: number;
    unemployment: number;
    injury: number;
    maternity: number;
    housingFund: number;
    total: number;
  };
  base: {
    insurance: number;
    housingFund: number;
  };
}

interface InsuranceBreakdownProps {
  result: InsuranceResult;
}

export function InsuranceBreakdown({ result }: InsuranceBreakdownProps) {
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
      <h3 className="text-lg font-semibold mb-4">缴费明细表</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>险种</TableHead>
              <TableHead>缴费基数</TableHead>
              <TableHead>个人缴费</TableHead>
              <TableHead>单位缴费</TableHead>
              <TableHead>合计</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>养老保险</TableCell>
              <TableCell>{formatCurrency(result.base.insurance)}</TableCell>
              <TableCell>{formatCurrency(result.personal.pension)}</TableCell>
              <TableCell>{formatCurrency(result.company.pension)}</TableCell>
              <TableCell>{formatCurrency(result.personal.pension + result.company.pension)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>医疗保险</TableCell>
              <TableCell>{formatCurrency(result.base.insurance)}</TableCell>
              <TableCell>{formatCurrency(result.personal.medical)}</TableCell>
              <TableCell>{formatCurrency(result.company.medical)}</TableCell>
              <TableCell>{formatCurrency(result.personal.medical + result.company.medical)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>失业保险</TableCell>
              <TableCell>{formatCurrency(result.base.insurance)}</TableCell>
              <TableCell>{formatCurrency(result.personal.unemployment)}</TableCell>
              <TableCell>{formatCurrency(result.company.unemployment)}</TableCell>
              <TableCell>{formatCurrency(result.personal.unemployment + result.company.unemployment)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>工伤保险</TableCell>
              <TableCell>{formatCurrency(result.base.insurance)}</TableCell>
              <TableCell>-</TableCell>
              <TableCell>{formatCurrency(result.company.injury)}</TableCell>
              <TableCell>{formatCurrency(result.company.injury)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>生育保险</TableCell>
              <TableCell>{formatCurrency(result.base.insurance)}</TableCell>
              <TableCell>-</TableCell>
              <TableCell>{formatCurrency(result.company.maternity)}</TableCell>
              <TableCell>{formatCurrency(result.company.maternity)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>住房公积金</TableCell>
              <TableCell>{formatCurrency(result.base.housingFund)}</TableCell>
              <TableCell>{formatCurrency(result.personal.housingFund)}</TableCell>
              <TableCell>{formatCurrency(result.company.housingFund)}</TableCell>
              <TableCell>{formatCurrency(result.personal.housingFund + result.company.housingFund)}</TableCell>
            </TableRow>
            <TableRow className="font-bold">
              <TableCell>合计</TableCell>
              <TableCell>-</TableCell>
              <TableCell>{formatCurrency(result.personal.total)}</TableCell>
              <TableCell>{formatCurrency(result.company.total)}</TableCell>
              <TableCell>{formatCurrency(result.personal.total + result.company.total)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}