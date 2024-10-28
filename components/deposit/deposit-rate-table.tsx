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

const depositRates = [
  {
    bank: "工商银行",
    demand: 0.25,
    threeMonth: 1.25,
    sixMonth: 1.45,
    oneYear: 1.65,
    twoYear: 2.15,
    threeYear: 2.65,
    fiveYear: 2.65,
  },
  {
    bank: "农业银行",
    demand: 0.25,
    threeMonth: 1.25,
    sixMonth: 1.45,
    oneYear: 1.65,
    twoYear: 2.15,
    threeYear: 2.65,
    fiveYear: 2.65,
  },
  {
    bank: "中国银行",
    demand: 0.25,
    threeMonth: 1.25,
    sixMonth: 1.45,
    oneYear: 1.65,
    twoYear: 2.15,
    threeYear: 2.65,
    fiveYear: 2.65,
  },
  {
    bank: "建设银行",
    demand: 0.25,
    threeMonth: 1.25,
    sixMonth: 1.45,
    oneYear: 1.65,
    twoYear: 2.15,
    threeYear: 2.65,
    fiveYear: 2.65,
  },
];

export function DepositRateTable() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">2024年最新存款利率表</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>银行</TableHead>
              <TableHead>活期</TableHead>
              <TableHead>三个月</TableHead>
              <TableHead>六个月</TableHead>
              <TableHead>一年</TableHead>
              <TableHead>二年</TableHead>
              <TableHead>三年</TableHead>
              <TableHead>五年</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {depositRates.map((rate) => (
              <TableRow key={rate.bank}>
                <TableCell>{rate.bank}</TableCell>
                <TableCell>{rate.demand}%</TableCell>
                <TableCell>{rate.threeMonth}%</TableCell>
                <TableCell>{rate.sixMonth}%</TableCell>
                <TableCell>{rate.oneYear}%</TableCell>
                <TableCell>{rate.twoYear}%</TableCell>
                <TableCell>{rate.threeYear}%</TableCell>
                <TableCell>{rate.fiveYear}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        注：以上利率仅供参考，实际执行利率以各银行官方公布为准。大额存单、结构性存款等特殊产品利率可能更高。
      </p>
    </Card>
  );
}