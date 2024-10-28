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

interface InsuranceResult {
  personal: {
    pension: number;
    medical: number;
    unemployment: number;
    housingFund: number;
  };
  company: {
    pension: number;
    medical: number;
    unemployment: number;
    injury: number;
    maternity: number;
    housingFund: number;
  };
}

interface InsuranceChartProps {
  result: InsuranceResult;
}

export function InsuranceChart({ result }: InsuranceChartProps) {
  const personalData = [
    { name: "养老保险", value: result.personal.pension },
    { name: "医疗保险", value: result.personal.medical },
    { name: "失业保险", value: result.personal.unemployment },
    { name: "住房公积金", value: result.personal.housingFund },
  ].filter(item => item.value > 0);

  const companyData = [
    { name: "养老保险", value: result.company.pension },
    { name: "医疗保险", value: result.company.medical },
    { name: "失业保险", value: result.company.unemployment },
    { name: "工伤保险", value: result.company.injury },
    { name: "生育保险", value: result.company.maternity },
    { name: "住房公积金", value: result.company.housingFund },
  ].filter(item => item.value > 0);

  const COLORS = [
    "#3b82f6",
    "#22c55e",
    "#ef4444",
    "#8b5cf6",
    "#f59e0b",
    "#06b6d4",
  ];

  const formatTooltip = (value: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">缴费构成分析</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-[400px]">
          <h4 className="text-center mb-4">个人缴费构成</h4>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={personalData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {personalData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={formatTooltip} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="h-[400px]">
          <h4 className="text-center mb-4">单位缴费构成</h4>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={companyData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {companyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={formatTooltip} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}