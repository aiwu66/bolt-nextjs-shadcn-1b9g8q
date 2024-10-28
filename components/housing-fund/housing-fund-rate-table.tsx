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

const loanRates = [
  { type: "住房公积金贷款", rate: "3.1%", note: "统一执行" },
  { type: "公积金组合贷款", rate: "3.1% + 4.2%", note: "公积金+商业贷款" },
];

const depositRates = [
  { type: "一线城市", min: "5%", max: "12%", note: "北上广深" },
  { type: "二线城市", min: "5%", max: "12%", note: "省会城市" },
  { type: "三线城市", min: "5%", max: "12%", note: "地级市" },
];

export function HousingFundRateTable() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">2024年公积金政策参考</h3>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h4 className="text-md font-medium mb-4">贷款利率</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>贷款类型</TableHead>
                <TableHead>年利率</TableHead>
                <TableHead>说明</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loanRates.map((rate) => (
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
          <h4 className="text-md font-medium mb-4">缴存比例</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>城市等级</TableHead>
                <TableHead>缴存区间</TableHead>
                <TableHead>说明</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {depositRates.map((rate) => (
                <TableRow key={rate.type}>
                  <TableCell>{rate.type}</TableCell>
                  <TableCell>{rate.min}-{rate.max}</TableCell>
                  <TableCell>{rate.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="md:col-span-2">
          <p className="text-sm text-muted-foreground mt-4">
            注：具体政策可能因地区不同有所调整，请以当地住房公积金管理中心政策为准。部分城市可能有补充公积金政策。
          </p>
        </div>
      </div>
    </Card>
  );
}