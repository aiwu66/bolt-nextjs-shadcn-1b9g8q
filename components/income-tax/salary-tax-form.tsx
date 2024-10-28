"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface SalaryTaxFormProps {
  onCalculate: (result: any) => void;
}

interface DeductionItem {
  id: string;
  label: string;
  amount: number;
}

const specialDeductions: DeductionItem[] = [
  { id: "children", label: "子女教育", amount: 1000 },
  { id: "education", label: "继续教育", amount: 400 },
  { id: "mortgage", label: "住房贷款利息", amount: 1000 },
  { id: "rent", label: "住房租金", amount: 1500 },
  { id: "elderly", label: "赡养老人", amount: 2000 },
];

export function SalaryTaxForm({ onCalculate }: SalaryTaxFormProps) {
  const [formData, setFormData] = useState({
    salary: "",
    insurance: {
      pension: true,
      medical: true,
      unemployment: true,
      housingFund: true,
    },
    deductions: [] as string[],
  });

  const calculateTax = () => {
    const monthlySalary = Number(formData.salary);
    
    // 计算社保和公积金
    let insuranceDeduction = 0;
    if (formData.insurance.pension) insuranceDeduction += monthlySalary * 0.08;
    if (formData.insurance.medical) insuranceDeduction += monthlySalary * 0.02;
    if (formData.insurance.unemployment) insuranceDeduction += monthlySalary * 0.005;
    if (formData.insurance.housingFund) insuranceDeduction += monthlySalary * 0.12;

    // 计算专项附加扣除
    const specialDeductionAmount = formData.deductions.reduce((sum, id) => {
      const deduction = specialDeductions.find(d => d.id === id);
      return sum + (deduction ? deduction.amount : 0);
    }, 0);

    // 计算应纳税所得额
    const baseDeduction = 5000; // 基本减除费用
    const taxableIncome = Math.max(0, monthlySalary - insuranceDeduction - baseDeduction - specialDeductionAmount);

    // 计算税率和速算扣除数
    let taxRate = 0;
    let quickDeduction = 0;
    const annualTaxableIncome = taxableIncome * 12;

    if (annualTaxableIncome <= 36000) {
      taxRate = 0.03;
      quickDeduction = 0;
    } else if (annualTaxableIncome <= 144000) {
      taxRate = 0.1;
      quickDeduction = 2520;
    } else if (annualTaxableIncome <= 300000) {
      taxRate = 0.2;
      quickDeduction = 16920;
    } else if (annualTaxableIncome <= 420000) {
      taxRate = 0.25;
      quickDeduction = 31920;
    } else if (annualTaxableIncome <= 660000) {
      taxRate = 0.3;
      quickDeduction = 52920;
    } else if (annualTaxableIncome <= 960000) {
      taxRate = 0.35;
      quickDeduction = 85920;
    } else {
      taxRate = 0.45;
      quickDeduction = 181920;
    }

    // 计算月度应纳税额
    const monthlyTax = (taxableIncome * 12 * taxRate - quickDeduction) / 12;
    const afterTax = monthlySalary - monthlyTax - insuranceDeduction;

    const result = {
      taxableIncome,
      tax: monthlyTax,
      afterTax,
      taxRate: taxRate * 100,
      quickDeduction,
      deductions: {
        insurance: insuranceDeduction,
        special: specialDeductionAmount,
        base: baseDeduction,
      },
    };

    onCalculate(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateTax();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="salary">月收入（元）</Label>
          <div className="relative">
            <Input
              id="salary"
              type="number"
              value={formData.salary}
              onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
              min="0"
              step="0.01"
              placeholder="请输入税前月收入"
              className="pl-10"
              required
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">¥</span>
          </div>
        </div>

        <div>
          <Label>社保公积金项目</Label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="pension"
                checked={formData.insurance.pension}
                onCheckedChange={(checked) => 
                  setFormData({
                    ...formData,
                    insurance: { ...formData.insurance, pension: checked as boolean }
                  })
                }
              />
              <Label htmlFor="pension" className="cursor-pointer">养老保险(8%)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="medical"
                checked={formData.insurance.medical}
                onCheckedChange={(checked) => 
                  setFormData({
                    ...formData,
                    insurance: { ...formData.insurance, medical: checked as boolean }
                  })
                }
              />
              <Label htmlFor="medical" className="cursor-pointer">医疗保险(2%)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="unemployment"
                checked={formData.insurance.unemployment}
                onCheckedChange={(checked) => 
                  setFormData({
                    ...formData,
                    insurance: { ...formData.insurance, unemployment: checked as boolean }
                  })
                }
              />
              <Label htmlFor="unemployment" className="cursor-pointer">失业保险(0.5%)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="housingFund"
                checked={formData.insurance.housingFund}
                onCheckedChange={(checked) => 
                  setFormData({
                    ...formData,
                    insurance: { ...formData.insurance, housingFund: checked as boolean }
                  })
                }
              />
              <Label htmlFor="housingFund" className="cursor-pointer">住房公积金(12%)</Label>
            </div>
          </div>
        </div>

        <div>
          <Label>专项附加扣除</Label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {specialDeductions.map((deduction) => (
              <div key={deduction.id} className="flex items-center space-x-2">
                <Checkbox
                  id={deduction.id}
                  checked={formData.deductions.includes(deduction.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFormData({
                        ...formData,
                        deductions: [...formData.deductions, deduction.id],
                      });
                    } else {
                      setFormData({
                        ...formData,
                        deductions: formData.deductions.filter((id) => id !== deduction.id),
                      });
                    }
                  }}
                />
                <Label htmlFor={deduction.id} className="cursor-pointer">
                  {deduction.label} ({deduction.amount}元/月)
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
      >
        <Calculator className="w-4 h-4 mr-2" />
        计算个税
      </Button>
    </form>
  );
}