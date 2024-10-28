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

const rates = [
  {
    type: "商业贷款",
    category: "首套房",
    rate: "4.20%",
    notes: "基准利率，可上浮或下浮",
  },
  {
    type: "商业贷款",
    category: "二套房",
    rate: "4.50%",
    notes: "基准利率上浮0.3个百分点",
  },
  {
    type: "公积金贷款",
    category: "首套房",
    rate: "3.10%",
    notes: "全国统一执行",
  },
  {
    type: "公积金贷款",
    category: "二套房",
    rate: "3.10%",
    notes: "部分城市可能有限制",
  },
  {
    type: "组合贷款",
    category: "首套房",
    rate: "3.10% + 4.20%",
    notes: "公积金+商贷组合",
  },
  {
    type: "组合贷款",
    category: "二套房",
    rate: "3.10% + 4.50%",
    notes: "部分城市可能有限制",
  },
];

export function MortgageRateTable() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">2024年最新房贷利率参考表</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>贷款类型</TableHead>
              <TableHead>房产类型</TableHead>
              <TableHead>基准利率</TableHead>
              <TableHead>备注说明</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rates.map((rate, index) => (
              <TableRow key={index}>
                <TableCell>{rate.type}</TableCell>
                <TableCell>{rate.category}</TableCell>
                <TableCell>{rate.rate}</TableCell>
                <TableCell>{rate.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-sm text-muted-foreground mt-4">
        注：以上利率仅供参考，实际执行利率以各银行具体政策为准。利率可能因地区、银行、个人条件等因素有所调整。
      </p>
    </Card>
  );
}