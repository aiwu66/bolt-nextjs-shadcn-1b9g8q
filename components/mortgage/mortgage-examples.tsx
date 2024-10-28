"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MortgageExample {
  title: string;
  description: string;
  data: {
    loanAmount: number;
    loanTerm: number;
    interestRate: number;
    paymentMethod: "equal" | "principal";
  };
}

interface MortgageExamplesProps {
  onUseExample: (result: any) => void;
  onAddComparison: (result: any) => void;
}

const examples: MortgageExample[] = [
  {
    title: "首套房商业贷款",
    description: "100万元30年期等额本息还款",
    data: {
      loanAmount: 100,
      loanTerm: 30,
      interestRate: 4.2,
      paymentMethod: "equal",
    },
  },
  {
    title: "二套房商业贷款",
    description: "200万元20年期等额本金还款",
    data: {
      loanAmount: 200,
      loanTerm: 20,
      interestRate: 4.5,
      paymentMethod: "principal",
    },
  },
  {
    title: "公积金贷款",
    description: "50万元25年期等额本息还款",
    data: {
      loanAmount: 50,
      loanTerm: 25,
      interestRate: 3.1,
      paymentMethod: "equal",
    },
  },
];

export function MortgageExamples({ onUseExample, onAddComparison }: MortgageExamplesProps) {
  const calculateMortgage = (example: MortgageExample["data"]) => {
    const monthlyRate = example.interestRate / 100 / 12;
    const totalMonths = example.loanTerm * 12;
    const loanAmountYuan = example.loanAmount * 10000;

    let monthlyPayment = 0;
    let totalPayment = 0;
    let totalInterest = 0;
    const paymentSchedule = [];

    if (example.paymentMethod === "equal") {
      monthlyPayment =
        (loanAmountYuan * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

      let remainingBalance = loanAmountYuan;
      for (let month = 1; month <= totalMonths; month++) {
        const interest = remainingBalance * monthlyRate;
        const principal = monthlyPayment - interest;
        remainingBalance -= principal;

        paymentSchedule.push({
          month,
          payment: monthlyPayment,
          principal,
          interest,
          remainingBalance: Math.max(0, remainingBalance),
        });
      }
    } else {
      const monthlyPrincipal = loanAmountYuan / totalMonths;
      let remainingBalance = loanAmountYuan;

      for (let month = 1; month <= totalMonths; month++) {
        const interest = remainingBalance * monthlyRate;
        const payment = monthlyPrincipal + interest;
        remainingBalance -= monthlyPrincipal;

        paymentSchedule.push({
          month,
          payment,
          principal: monthlyPrincipal,
          interest,
          remainingBalance: Math.max(0, remainingBalance),
        });

        if (month === 1) {
          monthlyPayment = payment;
        }
      }
    }

    totalPayment = paymentSchedule.reduce((sum, { payment }) => sum + payment, 0);
    totalInterest = totalPayment - loanAmountYuan;

    return {
      monthlyPayment,
      totalInterest,
      totalPayment,
      paymentSchedule,
    };
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">计算案例</h3>
      <div className="space-y-4">
        {examples.map((example) => (
          <Card key={example.title} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{example.title}</h4>
                <p className="text-sm text-muted-foreground">{example.description}</p>
                <ul className="mt-2 text-sm">
                  <li>贷款金额：{example.data.loanAmount}万元</li>
                  <li>贷款期限：{example.data.loanTerm}年</li>
                  <li>年利率：{example.data.interestRate}%</li>
                  <li>还款方式：{example.data.paymentMethod === "equal" ? "等额本息" : "等额本金"}</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onUseExample(calculateMortgage(example.data))}
                >
                  使用此例
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onAddComparison(calculateMortgage(example.data))}
                >
                  添加对比
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}