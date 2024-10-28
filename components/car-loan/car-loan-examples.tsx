"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CarLoanExample {
  title: string;
  description: string;
  data: {
    carPrice: number;
    downPaymentRatio: number;
    loanTerm: number;
    interestRate: number;
    paymentMethod: "equal" | "principal";
    loanType: string;
  };
}

interface CarLoanExamplesProps {
  onUseExample: (result: any) => void;
  onAddComparison: (result: any) => void;
}

const examples: CarLoanExample[] = [
  {
    title: "银行贷款案例",
    description: "20万元车贷3年期等额本息还款",
    data: {
      carPrice: 200000,
      downPaymentRatio: 30,
      loanTerm: 36,
      interestRate: 4.35,
      paymentMethod: "equal",
      loanType: "bank",
    },
  },
  {
    title: "汽车金融案例",
    description: "15万元车贷2年期等额本金还款",
    data: {
      carPrice: 150000,
      downPaymentRatio: 20,
      loanTerm: 24,
      interestRate: 7.5,
      paymentMethod: "principal",
      loanType: "finance",
    },
  },
  {
    title: "豪华车贷款案例",
    description: "50万元车贷5年期等额本息还款",
    data: {
      carPrice: 500000,
      downPaymentRatio: 40,
      loanTerm: 60,
      interestRate: 4.35,
      paymentMethod: "equal",
      loanType: "bank",
    },
  },
];

export function CarLoanExamples({ onUseExample, onAddComparison }: CarLoanExamplesProps) {
  const calculateLoan = (example: CarLoanExample["data"]) => {
    const loanAmount = example.carPrice * (1 - example.downPaymentRatio / 100);
    const monthlyRate = example.interestRate / 100 / 12;
    const totalMonths = example.loanTerm;

    let monthlyPayment = 0;
    let totalPayment = 0;
    let totalInterest = 0;
    const paymentSchedule = [];

    if (example.paymentMethod === "equal") {
      monthlyPayment =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

      let remainingBalance = loanAmount;
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
      const monthlyPrincipal = loanAmount / totalMonths;
      let remainingBalance = loanAmount;

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
    totalInterest = totalPayment - loanAmount;

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
                  <li>车辆价格：{example.data.carPrice.toLocaleString()}元</li>
                  <li>首付比例：{example.data.downPaymentRatio}%</li>
                  <li>贷款期限：{example.data.loanTerm}个月</li>
                  <li>年利率：{example.data.interestRate}%</li>
                  <li>还款方式：{example.data.paymentMethod === "equal" ? "等额本息" : "等额本金"}</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onUseExample(calculateLoan(example.data))}
                >
                  使用此例
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onAddComparison(calculateLoan(example.data))}
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