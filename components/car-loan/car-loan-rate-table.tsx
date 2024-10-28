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

const bankRates = [
  { type: "新车贷款", rate: "4.35%", note: "基准利率" },
  { type: "二手车贷款", rate: "4.75%", note: "上浮10%" },
  { type: "信用贷款", rate: "5.25%", note: "上浮20%" },
];

const financeRates = [
  { type: "标准方案", rate: "7.5%", note: "一般车型" },
  { type: "优惠方案", rate: "5.99%", note: "特定车型" },
  { type: "零利率", rate: "0%", note: "限时活动" },
];

export function CarLoanRateTable() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">2024年最新车贷利率参考</h3>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h4 className="text-md font-medium mb-4">银行贷款利率</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>贷款类型</TableHead>
                <TableHead>年利率</TableHead>
                <TableHead>说明</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bankRates.map((rate) => (
                <TableRow key={rate.type}>
                  <TableCell>{rate.type}</TableCell>
                  <TableCell>{rate.rate}</TableCell>
                  <TableCell>{rate.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div>
          <h4 className="text-md font-medium mb-4">汽车金融利率</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>方案类型</TableHead>
                <TableHead>年利率</TableHead>
                <TableHead>说明</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {financeRates.map((rate) => (
                <TableRow key={rate.type}>
                  <TableCell>{rate.type}</TableCell>
                  <TableCell>{rate.rate}</TableCell>
                  <TableCell>{rate.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="md:col-span-2">
          <p className="text-sm text-muted-foreground mt-4">
            注：实际利率可能因银行政策、个人资信、车型等因素有所调整，请以银行实际审批为准。
          </p>
        </div>
      </div>
    </Card>
  );
}