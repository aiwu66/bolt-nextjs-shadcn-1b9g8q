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

const deductions = [
  {
    item: "增值税",
    rate: "13%",
    description: "需要增值税专用发票",
    notes: "一般纳税人可抵扣"
  },
  {
    item: "运输费用",
    rate: "100%",
    description: "单独开具的运输费发票",
    notes: "不计入计税价格"
  },
  {
    item: "保险费",
    rate: "100%",
    description: "单独缴纳的保险费",
    notes: "不计入计税价格"
  },
  {
    item: "上牌费用",
    rate: "100%",
    description: "车辆上牌相关费用",
    notes: "不计入计税价格"
  },
  {
    item: "加装配件",
    rate: "100%",
    description: "单独购买的加装配件",
    notes: "需单独开具发票"
  }
];

export function VehicleTaxDeductionGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">抵扣项目指南</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>抵扣项目</TableHead>
              <TableHead>抵扣比例</TableHead>
              <TableHead>说明</TableHead>
              <TableHead>备注</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deductions.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.item}</TableCell>
                <TableCell>{item.rate}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-sm text-muted-foreground mt-4">
        注：抵扣项目需要有合法有效的票据支持，且必须符合相关政策规定。建议咨询专业人士或当地税务部门确认具体抵扣政策。
      </p>
    </Card>
  );
}