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

interface BMIResult {
  bmi: number;
  category: string;
}

interface BMIChartProps {
  result: BMIResult;
}

export function BMIChart({ result }: BMIChartProps) {
  const bmiRanges = [
    { bmi: 16, category: "严重偏瘦" },
    { bmi: 18.5, category: "偏瘦" },
    { bmi: 24, category: "正常" },
    { bmi: 28, category: "超重" },
    { bmi: 32, category: "肥胖" },
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">BMI分布图</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={bmiRanges}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis domain={[15, 35]} />
            <Tooltip />
            <Legend />
            <ReferenceLine
              x={result.category}
              stroke="#ff4d4f"
              label={{
                value: "当前BMI",
                position: "top",
              }}
            />
            <Line
              type="monotone"
              dataKey="bmi"
              stroke="#8884d8"
              name="BMI值"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        <p>BMI参考范围：</p>
        <ul className="list-disc list-inside mt-2">
          <li>{"<18.5：偏瘦"}</li>
          <li>18.5-23.9：正常</li>
          <li>24.0-27.9：超重</li>
          <li>{">28.0：肥胖"}</li>
        </ul>
      </div>
    </Card>
  );
}