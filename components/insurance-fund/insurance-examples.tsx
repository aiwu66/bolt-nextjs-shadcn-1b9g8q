"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface InsuranceExample {
  title: string;
  description: string;
  data: {
    city: string;
    salary: number;
    baseNumber: number;
    rates: {
      pension: {
        personal: number;
        company: number;
      };
      medical: {
        personal: number;
        company: number;
      };
      unemployment: {
        personal: number;
        company: number;
      };
      injury: {
        company: number;
      };
      maternity: {
        company: number;
      };
      housingFund: {
        personal: number;
        company: number;
      };
    };
  };
}

interface InsuranceExamplesProps {
  onUseExample: (result: any) => void;
  onAddComparison?: (result: any) => void;
}

const examples: InsuranceExample[] = [
  {
    title: "北京标准案例",
    description: "月薪15000元，使用北京市最新社保公积金缴费标准",
    data: {
      city: "北京",
      salary: 15000,
      baseNumber: 15000,
      rates: {
        pension: {
          personal: 8,
          company: 16,
        },
        medical: {
          personal: 2,
          company: 10,
        },
        unemployment: {
          personal: 0.2,
          company: 0.8,
        },
        injury: {
          company: 0.4,
        },
        maternity: {
          company: 0.8,
        },
        housingFund: {
          personal: 12,
          company: 12,
        },
      },
    },
  },
  {
    title: "上海标准案例",
    description: "月薪12000元，使用上海市最新社保公积金缴费标准",
    data: {
      city: "上海",
      salary: 12000,
      baseNumber: 12000,
      rates: {
        pension: {
          personal: 8,
          company: 16,
        },
        medical: {
          personal: 2,
          company: 9.5,
        },
        unemployment: {
          personal: 0.5,
          company: 0.5,
        },
        injury: {
          company: 0.2,
        },
        maternity: {
          company: 1,
        },
        housingFund: {
          personal: 7,
          company: 7,
        },
      },
    },
  },
  {
    title: "深圳标准案例",
    description: "月薪20000元，使用深圳市最新社保公积金缴费标准",
    data: {
      city: "深圳",
      salary: 20000,
      baseNumber: 20000,
      rates: {
        pension: {
          personal: 8,
          company: 14,
        },
        medical: {
          personal: 2,
          company: 5.2,
        },
        unemployment: {
          personal: 0.3,
          company: 0.7,
        },
        injury: {
          company: 0.14,
        },
        maternity: {
          company: 0.45,
        },
        housingFund: {
          personal: 5,
          company: 5,
        },
      },
    },
  },
];

export function InsuranceExamples({ onUseExample, onAddComparison }: InsuranceExamplesProps) {
  const calculateInsurance = (example: InsuranceExample["data"]) => {
    const { baseNumber, rates } = example;
    
    const personal = {
      pension: (baseNumber * rates.pension.personal) / 100,
      medical: (baseNumber * rates.medical.personal) / 100,
      unemployment: (baseNumber * rates.unemployment.personal) / 100,
      housingFund: (baseNumber * rates.housingFund.personal) / 100,
    };

    const company = {
      pension: (baseNumber * rates.pension.company) / 100,
      medical: (baseNumber * rates.medical.company) / 100,
      unemployment: (baseNumber * rates.unemployment.company) / 100,
      injury: (baseNumber * rates.injury.company) / 100,
      maternity: (baseNumber * rates.maternity.company) / 100,
      housingFund: (baseNumber * rates.housingFund.company) / 100,
    };

    const personalTotal = Object.values(personal).reduce((a, b) => a + b, 0);
    const companyTotal = Object.values(company).reduce((a, b) => a + b, 0);

    return {
      personal,
      company,
      personalTotal,
      companyTotal,
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
                <li>月薪：{example.data.salary.toLocaleString()}元</li>
                <li>缴费基数：{example.data.baseNumber.toLocaleString()}元</li>
                <li>养老保险：个人{example.data.rates.pension.personal}%，单位{example.data.rates.pension.company}%</li>
                <li>医疗保险：个人{example.data.rates.medical.personal}%，单位{example.data.rates.medical.company}%</li>
                <li>公积金：个人{example.data.rates.housingFund.personal}%，单位{example.data.rates.housingFund.company}%</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                onClick={() => onUseExample(calculateInsurance(example.data))}
                className="w-32"
              >
                使用此案例
              </Button>
              {onAddComparison && (
                <Button
                  variant="outline"
                  onClick={() => onAddComparison(calculateInsurance(example.data))}
                  className="w-32"
                >
                  添加对比
                </Button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}