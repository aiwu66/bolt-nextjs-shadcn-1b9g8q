"use client";

import { Card } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

interface SalaryResult {
  beforeTax: number;
  afterTax: number;
  tax: number;
  insurance: {
    pension: number;
    medical: number;
    unemployment: number;
    housingFund: number;
    total: number;
  };
}

interface SalaryChartProps {
  result: SalaryResult;
}

export function SalaryChart({ result }: SalaryChartProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const data = [
    { name: "税后收入", value: result.afterTax },
    { name: "个人所得税", value: result.tax },
    { name: "养老保险", value: result.insurance.pension },
    { name: "医疗保险", value: result.insurance.medical },
    { name: "失业保险", value: result.insurance.unemployment },
    { name: "住房公积金", value: result.insurance.housingFund },
  ].filter(item => item.value > 0);

  const COLORS = [
    "#22c55e", // 税后收入
    "#ef4444", // 个税
    "#3b82f6", // 养老
    "#8b5cf6", // 医疗
    "#f59e0b", // 失业
    "#06b6d4", // 公积金
  ];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

    return percent > 0.05 ? (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    ) : null;
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">收入分配分析</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => formatCurrency(value)}
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '10px',
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}