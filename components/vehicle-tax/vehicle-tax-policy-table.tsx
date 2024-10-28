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

const policies = [
  {
    type: "传统燃油车",
    rate: "5%",
    basis: "不含税价格",
    notes: "标准税率",
  },
  {
    type: "新能源汽车",
    rate: "0%",
    basis: "-",
    notes: "免征购置税",
  },
  {
    type: "二手车",
    rate: "2.5%",
    basis: "交易价格",
    notes: "减半征收",
  },
  {
    type: "插电式混动",
    rate: "0%",
    basis: "-",
    notes: "符合条件免税",
  },
  {
    type: "进口车",
    rate: "5%",
    basis: "完税价格",
    notes: "以海关完税价为准",
  },
  {
    type: "特殊用途车",
    rate: "0%",
    basis: "-",
    notes: "符合条件免税",
  },
];

export function VehicleTaxPolicyTable() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">2024年购置税政策速查表</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>车辆类型</TableHead>
              <TableHead>税率</TableHead>
              <TableHead>计税依据</TableHead>
              <TableHead>备注说明</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {policies.map((policy, index) => (
              <TableRow key={index}>
                <TableCell>{policy.type}</TableCell>
                <TableCell>{policy.rate}</TableCell>
                <TableCell>{policy.basis}</TableCell>
                <TableCell>{policy.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-sm text-muted-foreground mt-4">
        注：以上政策仅供参考，具体执行标准以当地税务部门规定为准。部分地区可能有特殊优惠政策。
      </p>
    </Card>
  );
}