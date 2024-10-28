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

const weightStandards = [
  { week: 20, p3: 260, p10: 280, p50: 320, p90: 360, p97: 380 },
  { week: 24, p3: 490, p10: 520, p50: 600, p90: 680, p97: 710 },
  { week: 28, p3: 850, p10: 900, p50: 1000, p90: 1100, p97: 1150 },
  { week: 32, p3: 1400, p10: 1500, p50: 1700, p90: 1900, p97: 2000 },
  { week: 36, p3: 2100, p10: 2300, p50: 2600, p90: 2900, p97: 3100 },
  { week: 40, p3: 2700, p10: 3000, p50: 3400, p90: 3800, p97: 4000 },
];

export function FetalWeightStandard() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">胎儿体重发育标准参考表</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>孕周（周）</TableHead>
              <TableHead>极低体重（g）</TableHead>
              <TableHead>偏低体重（g）</TableHead>
              <TableHead>标准体重（g）</TableHead>
              <TableHead>偏高体重（g）</TableHead>
              <TableHead>极高体重（g）</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {weightStandards.map((standard) => (
              <TableRow key={standard.week}>
                <TableCell>{standard.week}</TableCell>
                <TableCell>{standard.p3}</TableCell>
                <TableCell>{standard.p10}</TableCell>
                <TableCell className="font-medium">{standard.p50}</TableCell>
                <TableCell>{standard.p90}</TableCell>
                <TableCell>{standard.p97}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
        <p>说明：</p>
        <ul className="list-disc list-inside space-y-1">
          <li>数据来源：WHO胎儿生长标准</li>
          <li>P3-P97表示不同百分位数范围</li>
          <li>P50为标准体重（50百分位）</li>
          <li>不同人种可能存在5-10%的差异</li>
          <li>多胎妊娠需要专门的生长曲线评估</li>
        </ul>
      </div>
    </Card>
  );
}