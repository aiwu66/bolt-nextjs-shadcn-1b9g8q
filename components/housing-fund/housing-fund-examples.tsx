"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LoanExample {
  title: string;
  description: string;
  data: {
    monthlyDeposit: number;
    depositYears: number;
    loanAmount: number;
    loanTerm: number;
    interestRate: number;
    paymentMethod: "equal" | "principal";
    cityTier: string;
  };
}

interface HousingFundExamplesProps {
  onUseExample: (result: any) => void;
  onAddComparison: (result: any) => void;
}

const examples: LoanExample[] = [
  {
    title: "一线城市首套房",
    description: "月缴存3000元，缴存5年，贷款30年",
    data: {
      monthlyDeposit: 3000,
      depositYears: 5,
      loanAmount: 100,
      loanTerm: 30,
      interestRate: 3.1,
      paymentMethod: "equal",
      cityTier: "first",
    },
  },
  {
    title: "二线城市首套房",
    description: "月缴存2000元，缴存3年，贷款20年",
    data: {
      monthlyDeposit: 2000,
      depositYears: 3,
      loanAmount: 50,
      loanTerm: 20,
      interestRate: 3.1,
      paymentMethod: "principal",
      cityTier: "second",
    },
  },
  {
    title: "夫妻共同贷款",
    description: "双方月缴存5000元，缴存5年，贷款25年",
    data: {
      monthlyDeposit: 5000,
      depositYears: 5,
      loanAmount: 120,
      loanTerm: 25,
      interestRate: 3.1,
      paymentMethod: "equal",
      cityTier: "first",
    },
  },
];

export function HousingFundExamples({ onUseExample, onAddComparison }: HousingFundExamplesProps) {
  const calculateLoan = (example: LoanExample["data"]) => {
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
    <div className="grid gap-6">
      {examples.map((example) => (
        <Card key={example.title} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">{example.title}</h3>
              <p className="text-sm text-muted-foreground">{example.description}</p>
              <ul className="mt-2 text-sm">
                <li>月缴存：{example.data.monthlyDeposit}元</li>
                <li>缴存年限：{example.data.depositYears}年</li>
                <li>贷款金额：{example.data.loanAmount}万元</li>
                <li>贷款期限：{example.data.loanTerm}年</li>
                <li>还款方式：{example.data.paymentMethod === "equal" ? "等额本息" : "等额本金"}</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                onClick={() => onUseExample(calculateLoan(example.data))}
                className="w-32"
              >
                使用此案例
              </Button>
              <Button
                variant="outline"
                onClick={() => onAddComparison(calculateLoan(example.data))}
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