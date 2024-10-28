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
    type: "首套房",
    baseRate: "4.20%",
    adjustment: "-30~+30个基点",
    notes: "基准利率，可上浮或下浮",
  },
  {
    type: "二套房",
    baseRate: "4.50%",
    adjustment: "-30~+50个基点",
    notes: "基准利率上浮0.3个百分点",
  },
  {
    type: "商用房",
    baseRate: "4.75%",
    adjustment: "0~+100个基点",
    notes: "基准利率上浮较多",
  },
  {
    type: "经营性贷款",
    baseRate: "4.85%",
    adjustment: "+50~+200个基点",
    notes: "风险定价，上浮幅度大",
  },
];

export function CommercialLoanRateTable() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">2024年最新商业贷款利率参考表</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>贷款类型</TableHead>
              <TableHead>基准利率</TableHead>
              <TableHead>浮动区间</TableHead>
              <TableHead>备注说明</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rates.map((rate, index) => (
              <TableRow key={index}>
                <TableCell>{rate.type}</TableCell>
                <TableCell>{rate.baseRate}</TableCell>
                <TableCell>{rate.adjustment}</TableCell>
                <TableCell>{rate.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-sm text-muted-foreground mt-4">
        注：以上利率仅供参考，实际执行利率以各银行具体政策为准。利率可能因地区、银行、个人条件等因素有所调整。LPR调整可能影响基准利率。
      </p>
    </Card>
  );
}