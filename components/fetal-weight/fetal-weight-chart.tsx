"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

interface FetalWeightResult {
  weight: number;
  gestationalAge: number;
}

interface FetalWeightChartProps {
  result: FetalWeightResult;
}

export function FetalWeightChart({ result }: FetalWeightChartProps) {
  // 生成标准生长曲线数据
  const generateGrowthData = () => {
    const data = [];
    for (let week = 20; week <= 40; week++) {
      const standardWeight = Math.exp(0.578 + 0.332 * week - 0.00354 * week * week);
      const p10 = standardWeight * 0.9;
      const p90 = standardWeight * 1.1;
      data.push({
        week,
        p50: Math.round(standardWeight),
        p10: Math.round(p10),
        p90: Math.round(p90),
      });
    }
    return data;
  };

  const growthData = generateGrowthData();

  const formatWeight = (value: number) => `${Math.round(value)}g`;
  const formatWeek = (value: number) => `${value}周`;

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">胎儿生长曲线</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={growthData}
            margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="week"
              label={{ 
                value: "孕周", 
                position: "bottom",
                offset: 0
              }}
              tickFormatter={formatWeek}
            />
            <YAxis
              label={{ 
                value: "体重(g)", 
                angle: -90, 
                position: "left",
                offset: 10
              }}
              tickFormatter={formatWeight}
            />
            <Tooltip 
              formatter={formatWeight}
              labelFormatter={formatWeek}
            />
            <Legend 
              verticalAlign="top"
              height={36}
            />
            <Line
              type="monotone"
              dataKey="p50"
              name="标准体重"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="p10"
              name="下限"
              stroke="#82ca9d"
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="p90"
              name="上限"
              stroke="#ffc658"
              strokeDasharray="5 5"
            />
            <ReferenceLine
              x={result.gestationalAge}
              stroke="#ff4d4f"
              label={{
                value: "当前孕周",
                position: "top",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}