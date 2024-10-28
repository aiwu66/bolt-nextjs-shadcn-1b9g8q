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

interface BonusTaxFormProps {
  onCalculate: (result: any) => void;
}

export function BonusTaxForm({ onCalculate }: BonusTaxFormProps) {
  const [formData, setFormData] = useState({
    bonus: "",
    calculationType: "separate",
  });

  const calculateBonusTax = () => {
    const bonusAmount = Number(formData.bonus);
    const monthlyBonus = bonusAmount / 12;
    
    let taxRate = 0;
    let quickDeduction = 0;

    if (monthlyBonus <= 3000) {
      taxRate = 0.03;
      quickDeduction = 0;
    } else if (monthlyBonus <= 12000) {
      taxRate = 0.1;
      quickDeduction = 210;
    } else if (monthlyBonus <= 25000) {
      taxRate = 0.2;
      quickDeduction = 1410;
    } else if (monthlyBonus <= 35000) {
      taxRate = 0.25;
      quickDeduction = 2660;
    } else if (monthlyBonus <= 55000) {
      taxRate = 0.3;
      quickDeduction = 4410;
    } else if (monthlyBonus <= 80000) {
      taxRate = 0.35;
      quickDeduction = 7160;
    } else {
      taxRate = 0.45;
      quickDeduction = 15160;
    }

    const tax = bonusAmount * taxRate - quickDeduction;
    const afterTax = bonusAmount - tax;

    const result = {
      taxableIncome: bonusAmount,
      tax,
      afterTax,
      taxRate: taxRate * 100,
      quickDeduction,
      deductions: {
        insurance: 0,
        special: 0,
        base: 0,
      },
    };

    onCalculate(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBonusTax();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="bonus">年终奖金额（元）</Label>
          <div className="relative">
            <Input
              id="bonus"
              type="number"
              value={formData.bonus}
              onChange={(e) => setFormData({ ...formData, bonus: e.target.value })}
              min="0"
              step="0.01"
              placeholder="请输入年终奖金额"
              className="pl-10"
              required
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">¥</span>
          </div>
        </div>

        <div>
          <Label htmlFor="calculationType">计税方式</Label>
          <Select
            value={formData.calculationType}
            onValueChange={(value) => setFormData({ ...formData, calculationType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="选择计税方式" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="separate">单独计税</SelectItem>
              <SelectItem value="combined">并入当月工资计税</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground mt-1">
            {formData.calculationType === "separate" 
              ? "年终奖除以12个月，按月工资对应的税率计税" 
              : "年终奖与当月工资合并，一起计算个人所得税"}
          </p>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
      >
        <Calculator className="w-4 h-4 mr-2" />
        计算年终奖个税
      </Button>
    </form>
  );
}