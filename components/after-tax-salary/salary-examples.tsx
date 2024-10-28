"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SalaryExample {
  title: string;
  description: string;
  data: {
    baseSalary: number;
    bonus: number;
    allowance: number;
    insurance: {
      pension: boolean;
      medical: boolean;
      unemployment: boolean;
      housingFund: boolean;
    };
    insuranceBase: string;
    housingFundRate: string;
  };
}

interface SalaryExamplesProps {
  onUseExample: (result: any) => void;
}

const examples: SalaryExample[] = [
  {
    title: "普通白领",
    description: "月薪10000元，五险一金全缴",
    data: {
      baseSalary: 10000,
      bonus: 0,
      allowance: 0,
      insurance: {
        pension: true,
        medical: true,
        unemployment: true,
        housingFund: true,
      },
      insuranceBase: "average",
      housingFundRate: "12",
    },
  },
  {
    title: "技术人员",
    description: "月薪20000元，含绩效奖金",
    data: {
      baseSalary: 15000,
      bonus: 5000,
      allowance: 0,
      insurance: {
        pension: true,
        medical: true,
        unemployment: true,
        housingFund: true,
      },
      insuranceBase: "average",
      housingFundRate: "12",
    },
  },
  {
    title: "管理人员",
    description: "月薪30000元，含津贴补贴",
    data: {
      baseSalary: 25000,
      bonus: 0,
      allowance: 5000,
      insurance: {
        pension: true,
        medical: true,
        unemployment: true,
        housingFund: true,
      },
      insuranceBase: "maximum",
      housingFundRate: "12",
    },
  },
];

export function SalaryExamples({ onUseExample }: SalaryExamplesProps) {
  const calculateSalary = (example: SalaryExample["data"]) => {
    const baseSalary = example.baseSalary;
    const bonus = example.bonus;
    const allowance = example.allowance;
    
    // 计算社保基数
    let insuranceBase = 0;
    if (example.insuranceBase === "minimum") {
      insuranceBase = 3613; // 使用北京最低基数作为示例
    } else if (example.insuranceBase === "average") {
      insuranceBase = 9613; // 使用北京平均基数作为示例
    } else {
      insuranceBase = 31884; // 使用北京最高基数作为示例
    }

    // 计算五险一金
    const pension = example.insurance.pension ? insuranceBase * 0.08 : 0;
    const medical = example.insurance.medical ? insuranceBase * 0.02 : 0;
    const unemployment = example.insurance.unemployment ? insuranceBase * 0.005 : 0;
    const housingFund = example.insurance.housingFund 
      ? insuranceBase * (Number(example.housingFundRate) / 100)
      : 0;

    const totalInsurance = pension + medical + unemployment + housingFund;

    // 计算应纳税所得额
    const taxableIncome = baseSalary + bonus + allowance - totalInsurance - 5000;

    // 计算个税
    let tax = 0;
    if (taxableIncome > 0) {
      if (taxableIncome <= 3000) {
        tax = taxableIncome * 0.03;
      } else if (taxableIncome <= 12000) {
        tax = taxableIncome * 0.1 - 210;
      } else if (taxableIncome <= 25000) {
        tax = taxableIncome * 0.2 - 1410;
      } else if (taxableIncome <= 35000) {
        tax = taxableIncome * 0.25 - 2660;
      } else if (taxableIncome <= 55000) {
        tax = taxableIncome * 0.3 - 4410;
      } else if (taxableIncome <= 80000) {
        tax = taxableIncome * 0.35 - 7160;
      } else {
        tax = taxableIncome * 0.45 - 15160;
      }
    }

    const beforeTax = baseSalary + bonus + allowance;
    const afterTax = beforeTax - totalInsurance - tax;

    return {
      beforeTax,
      afterTax,
      tax,
      insurance: {
        pension,
        medical,
        unemployment,
        housingFund,
        total: totalInsurance,
      },
      details: {
        baseSalary,
        bonus,
        allowance,
      },
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
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onUseExample(calculateSalary(example.data))}
              >
                使用此例
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}