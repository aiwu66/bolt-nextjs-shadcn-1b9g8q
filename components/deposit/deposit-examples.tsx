"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DepositExample {
  title: string;
  description: string;
  data: {
    amount: number;
    term: number;
    rate: number;
    type: "fixed" | "demand";
    compound: boolean;
  };
}

interface DepositExamplesProps {
  onUseExample: (result: any) => void;
  onAddComparison: (result: any) => void;
}

const examples: DepositExample[] = [
  {
    title: "一年定期存款",
    description: "10万元一年期定期存款，年利率1.65%",
    data: {
      amount: 100000,
      term: 12,
      rate: 1.65,
      type: "fixed",
      compound: false,
    },
  },
  {
    title: "三年定期存款",
    description: "20万元三年期定期存款，年利率2.65%",
    data: {
      amount: 200000,
      term: 36,
      rate: 2.65,
      type: "fixed",
      compound: true,
    },
  },
  {
    title: "五年定期存款",
    description: "50万元五年期定期存款，年利率2.65%",
    data: {
      amount: 500000,
      term: 60,
      rate: 2.65,
      type: "fixed",
      compound: true,
    },
  },
];

export function DepositExamples({ onUseExample, onAddComparison }: DepositExamplesProps) {
  const calculateDeposit = (example: DepositExample["data"]) => {
    const years = example.term / 12;
    let interest = 0;
    let total = 0;

    if (example.compound) {
      total = example.amount * Math.pow(1 + example.rate / 100, years);
      interest = total - example.amount;
    } else {
      interest = example.amount * (example.rate / 100) * years;
      total = example.amount + interest;
    }

    const monthlyData = [];
    for (let month = 1; month <= example.term; month++) {
      const periodInterest = interest * (month / example.term);
      monthlyData.push({
        period: month,
        principal: example.amount,
        interest: periodInterest,
        balance: example.amount + periodInterest,
      });
    }

    return {
      principal: example.amount,
      interest,
      total,
      schedule: monthlyData,
    };
  };

  return (
    <div className="grid gap-6">
      {examples.map((example) => (
        <Card key={example.title} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">{example.title}</h3>
              <p className="text-sm text-muted-foreground">{example.description}</p>
              <ul className="mt-2 text-sm">
                <li>存款金额：{example.data.amount.toLocaleString()}元</li>
                <li>存款期限：{example.data.term}个月</li>
                <li>年利率：{example.data.rate}%</li>
                <li>计息方式：{example.data.compound ? "复利" : "单利"}</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                onClick={() => onUseExample(calculateDeposit(example.data))}
                className="w-32"
              >
                使用此案例
              </Button>
              <Button
                variant="outline"
                onClick={() => onAddComparison(calculateDeposit(example.data))}
                className="w-32"
              >
                添加对比
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}