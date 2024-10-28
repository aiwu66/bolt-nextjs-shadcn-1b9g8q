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

const salaryTaxRates = [
  {
    level: 1,
    range: "不超过36,000元",
    rate: 3,
    quickDeduction: 0,
  },
  {
    level: 2,
    range: "36,000元至144,000元",
    rate: 10,
    quickDeduction: 2520,
  },
  {
    level: 3,
    range: "144,000元至300,000元",
    rate: 20,
    quickDeduction: 16920,
  },
  {
    level: 4,
    range: "300,000元至420,000元",
    rate: 25,
    quickDeduction: 31920,
  },
  {
    level: 5,
    range: "420,000元至660,000元",
    rate: 30,
    quickDeduction: 52920,
  },
  {
    level: 6,
    range: "660,000元至960,000元",
    rate: 35,
    quickDeduction: 85920,
  },
  {
    level: 7,
    range: "超过960,000元",
    rate: 45,
    quickDeduction: 181920,
  },
];

export function TaxRateTable() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">个人所得税税率表（2024年）</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>级数</TableHead>
              <TableHead>全年应纳税所得额</TableHead>
              <TableHead>税率（%）</TableHead>
              <TableHead>速算扣除数（元）</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salaryTaxRates.map((rate) => (
              <TableRow key={rate.level}>
                <TableCell>{rate.level}</TableCell>
                <TableCell>{rate.range}</TableCell>
                <TableCell>{rate.rate}</TableCell>
                <TableCell>{rate.quickDeduction.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        注：本表所称全年应纳税所得额是指依据税法规定，扣除基本减除费用、专项扣除、专项附加扣除和依法确定的其他扣除后的所得额。
      </p>
    </Card>
  );
}