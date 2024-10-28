"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FreelanceTaxFormProps {
  onCalculate: (result: any) => void;
}

export function FreelanceTaxForm({ onCalculate }: FreelanceTaxFormProps) {
  const [formData, setFormData] = useState({
    income: "",
    expenseRate: "20",
  });

  const calculateFreelanceTax = () => {
    const income = Number(formData.income);
    const expenseRate = Number(formData.expenseRate) / 100;
    
    // 计算应纳税所得额
    const expenses = income * expenseRate;
    const taxableIncome = income - expenses;
    
    // 计算税率和速算扣除数
    let taxRate = 0;
    let quickDeduction = 0;

    if (taxableIncome <= 20000) {
      taxRate = 0.2;
      quickDeduction = 0;
    } else if (taxableIncome <= 50000) {
      taxRate = 0.3;
      quickDeduction = 2000;
    } else {
      taxRate = 0.4;
      quickDeduction = 7000;
    }

    const tax = taxableIncome * taxRate - quickDeduction;
    const afterTax = income - tax;

    const result = {
      taxableIncome,
      tax,
      afterTax,
      taxRate: taxRate * 100,
      quickDeduction,
      deductions: {
        insurance: 0,
        special: 0,
        base: expenses,
      },
    };

    onCalculate(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateFreelanceTax();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="income">劳务报酬收入（元）</Label>
          <div className="relative">
            <Input
              id="income"
              type="number"
              value={formData.income}
              onChange={(e) => setFormData({ ...formData, income: e.target.value })}
              min="0"
              step="0.01"
              placeholder="请输入劳务报酬金额"
              className="pl-10"
              required
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">¥</span>
          </div>
        </div>

        <div>
          <Label htmlFor="expenseRate">费用扣除比例</Label>
          <Select
            value={formData.expenseRate}
            onValueChange={(value) => setFormData({ ...formData, expenseRate: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="选择费用扣除比例" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="20">20%（稿酬所得）</SelectItem>
              <SelectItem value="30">30%（特许权使用费）</SelectItem>
              <SelectItem value="40">40%（劳务报酬）</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground mt-1">
            不同类型的劳务所得适用不同的费用扣除比例
          </p>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
      >
        <Calculator className="w-4 h-4 mr-2" />
        计算劳务所得税
      </Button>
    </form>
  );
}