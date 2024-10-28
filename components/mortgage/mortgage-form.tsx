"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MortgageFormProps {
  onCalculate: (result: any) => void;
  onAddComparison: (result: any) => void;
}

export function MortgageForm({ onCalculate, onAddComparison }: MortgageFormProps) {
  const [formData, setFormData] = useState({
    loanAmount: "",
    loanTerm: "30",
    interestRate: "4.2",
    paymentMethod: "equal",
    loanType: "commercial",
    propertyType: "first",
  });

  const calculateMortgage = (
    loanAmount: number,
    loanTerm: number,
    interestRate: number,
    paymentMethod: string
  ) => {
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = loanTerm * 12;
    const loanAmountYuan = loanAmount * 10000;

    let monthlyPayment = 0;
    let totalPayment = 0;
    let totalInterest = 0;
    const paymentSchedule = [];

    if (paymentMethod === "equal") {
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

  const handleSubmit = (e: React.FormEvent, isComparison = false) => {
    e.preventDefault();
    const result = calculateMortgage(
      Number(formData.loanAmount),
      Number(formData.loanTerm),
      Number(formData.interestRate),
      formData.paymentMethod
    );
    
    if (isComparison) {
      onAddComparison(result);
    } else {
      onCalculate(result);
    }
  };

  const handleLoanTypeChange = (value: string) => {
    let interestRate = "4.2";
    if (value === "fund") {
      interestRate = "3.1";
    } else if (value === "commercial" && formData.propertyType === "second") {
      interestRate = "4.5";
    }
    setFormData({ ...formData, loanType: value, interestRate });
  };

  const handlePropertyTypeChange = (value: string) => {
    let interestRate = "4.2";
    if (formData.loanType === "commercial" && value === "second") {
      interestRate = "4.5";
    } else if (formData.loanType === "fund") {
      interestRate = "3.1";
    }
    setFormData({ ...formData, propertyType: value, interestRate });
  };

  return (
    <Card className="p-6">
      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="loanType">贷款类型</Label>
            <Select
              value={formData.loanType}
              onValueChange={handleLoanTypeChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择贷款类型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="commercial">商业贷款</SelectItem>
                <SelectItem value="fund">公积金贷款</SelectItem>
                <SelectItem value="combined">组合贷款</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="propertyType">房产类型</Label>
            <Select
              value={formData.propertyType}
              onValueChange={handlePropertyTypeChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择房产类型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first">首套房</SelectItem>
                <SelectItem value="second">二套房</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanAmount">贷款金额（万元）</Label>
            <div className="relative">
              <Input
                id="loanAmount"
                type="number"
                value={formData.loanAmount}
                onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                min="0"
                step="0.01"
                placeholder="请输入贷款金额"
                className="pl-10"
                required
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">¥</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanTerm">贷款期限（年）</Label>
            <div className="space-y-4">
              <Slider
                value={[Number(formData.loanTerm)]}
                onValueChange={(value) => setFormData({ ...formData, loanTerm: value[0].toString() })}
                min={1}
                max={30}
                step={1}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>1年</span>
                <span>{formData.loanTerm}年</span>
                <span>30年</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interestRate">年利率（%）</Label>
            <div className="relative">
              <Input
                id="interestRate"
                type="number"
                step="0.01"
                value={formData.interestRate}
                onChange={(e) => setFormData({ ...formData, interestRate: e.target.value })}
                min="0"
                placeholder="请输入年利率"
                className="pr-8"
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label>还款方式</Label>
            <RadioGroup
              value={formData.paymentMethod}
              onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
              className="grid grid-cols-2 gap-4 pt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="equal" id="equal" />
                <Label htmlFor="equal" className="cursor-pointer">等额本息</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="principal" id="principal" />
                <Label htmlFor="principal" className="cursor-pointer">等额本金</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            type="submit"
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            <Calculator className="w-4 h-4 mr-2" />
            开始计算
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={(e) => handleSubmit(e, true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            添加对比
          </Button>
        </div>
      </form>
    </Card>
  );
}