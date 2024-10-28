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
  ResponsiveContainer,
} from "recharts";

interface LoanResult {
  paymentSchedule: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    remainingBalance: number;
  }>;
}

interface HousingFundChartProps {
  result: LoanResult;
}

export function HousingFundChart({ result }: HousingFundChartProps) {
  const yearlyData = result.paymentSchedule.filter(
    (item) => item.month % 12 === 0 || item.month === 1
  );

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatXAxis = (value: number) => `${Math.floor(value / 12)}年`;
  const formatTooltipLabel = (value: number) => `第${value}期 (${Math.floor(value / 12)}年)`;

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">还款趋势分析</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={yearlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              tickFormatter={formatXAxis}
              padding={{ left: 30, right: 30 }}
              allowDecimals={false}
            />
            <YAxis 
              tickFormatter={formatCurrency}
              width={80}
            />
            <Tooltip 
              formatter={formatCurrency}
              labelFormatter={formatTooltipLabel}
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '10px',
              }}
            />
            <Legend 
              verticalAlign="top" 
              height={36}
              iconType="circle"
            />
            <Line
              type="monotone"
              dataKey="payment"
              name="月供"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="principal"
              name="本金"
              stroke="#22c55e"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="interest"
              name="利息"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="remainingBalance"
              name="剩余本金"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}