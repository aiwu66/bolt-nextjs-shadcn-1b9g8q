"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TaxExample {
  title: string;
  description: string;
  data: {
    priceType: string;
    vehiclePrice: number;
    vehicleType: string;
    hasVatInvoice: boolean;
    vatRate: string;
    otherDeductions: number;
    isImported: boolean;
  };
}

interface VehicleTaxExamplesProps {
  onUseExample: (result: any) => void;
  onAddComparison: (result: any) => void;
}

const examples: TaxExample[] = [
  {
    title: "普通燃油车",
    description: "20万元燃油车，含增值税发票",
    data: {
      priceType: "invoice",
      vehiclePrice: 200000,
      vehicleType: "traditional",
      hasVatInvoice: true,
      vatRate: "13",
      otherDeductions: 0,
      isImported: false,
    },
  },
  {
    title: "新能源汽车",
    description: "30万元电动车，免征购置税",
    data: {
      priceType: "invoice",
      vehiclePrice: 300000,
      vehicleType: "newEnergy",
      hasVatInvoice: true,
      vatRate: "13",
      otherDeductions: 0,
      isImported: false,
    },
  },
  {
    title: "二手车交易",
    description: "15万元二手车，减半征收",
    data: {
      priceType: "invoice",
      vehiclePrice: 150000,
      vehicleType: "secondHand",
      hasVatInvoice: false,
      vatRate: "13",
      otherDeductions: 0,
      isImported: false,
    },
  },
];

export function VehicleTaxExamples({ onUseExample, onAddComparison }: VehicleTaxExamplesProps) {
  const calculateTax = (example: TaxExample["data"]) => {
    const price = example.vehiclePrice;
    let taxablePrice = price;
    let vatDeduction = 0;
    let otherDeductions = example.otherDeductions;

    if (example.hasVatInvoice) {
      vatDeduction = price * Number(example.vatRate) / (100 + Number(example.vatRate));
      taxablePrice -= vatDeduction;
    }

    taxablePrice -= otherDeductions;

    let taxRate = 0.05;
    if (example.vehicleType === "newEnergy") {
      taxRate = 0;
    } else if (example.vehicleType === "secondHand") {
      taxRate = 0.025;
    }

    const taxAmount = taxablePrice * taxRate;
    const effectiveRate = (taxAmount / price) * 100;

    return {
      taxablePrice,
      taxAmount,
      effectiveRate,
      deduction: vatDeduction + otherDeductions,
      details: {
        originalPrice: price,
        vatDeduction,
        otherDeductions,
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
                <ul className="mt-2 text-sm">
                  <li>车辆价格：{example.data.vehiclePrice.toLocaleString()}元</li>
                  <li>车辆类型：{
                    example.data.vehicleType === "traditional" ? "传统燃油车" :
                    example.data.vehicleType === "newEnergy" ? "新能源汽车" :
                    "二手车"
                  }</li>
                  <li>增值税发票：{example.data.hasVatInvoice ? "有" : "无"}</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onUseExample(calculateTax(example.data))}
                >
                  使用此例
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onAddComparison(calculateTax(example.data))}
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