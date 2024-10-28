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

interface CarLoanFormProps {
  onCalculate: (result: any) => void;
  onAddComparison: (result: any) => void;
}

export function CarLoanForm({ onCalculate, onAddComparison }: CarLoanFormProps) {
  const [formData, setFormData] = useState({
    carPrice: "",
    downPaymentRatio: "30",
    loanTerm: "36",
    interestRate: "4.35",
    paymentMethod: "equal",
    loanType: "bank",
  });

  const calculateLoan = (
    carPrice: number,
    downPaymentRatio: number,
    loanTerm: number,
    interestRate: number,
    paymentMethod: string
  ) => {
    const loanAmount = carPrice * (1 - downPaymentRatio / 100);
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = loanTerm;

    let monthlyPayment = 0;
    let totalPayment = 0;
    let totalInterest = 0;
    const paymentSchedule = [];

    if (paymentMethod === "equal") {
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

  const handleSubmit = (e: React.FormEvent, isComparison = false) => {
    e.preventDefault();
    const result = calculateLoan(
      Number(formData.carPrice),
      Number(formData.downPaymentRatio),
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
    const interestRate = value === "bank" ? "4.35" : "7.5";
    setFormData({ ...formData, loanType: value, interestRate });
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
                <SelectItem value="bank">银行贷款</SelectItem>
                <SelectItem value="finance">汽车金融</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="carPrice">车辆价格（元）</Label>
            <div className="relative">
              <Input
                id="carPrice"
                type="number"
                value={formData.carPrice}
                onChange={(e) => setFormData({ ...formData, carPrice: e.target.value })}
                min="0"
                step="1000"
                placeholder="请输入车辆价格"
                className="pl-10"
                required
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">¥</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="downPaymentRatio">首付比例（%）</Label>
            <div className="space-y-4">
              <Slider
                value={[Number(formData.downPaymentRatio)]}
                onValueChange={(value) => setFormData({ ...formData, downPaymentRatio: value[0].toString() })}
                min={20}
                max={70}
                step={5}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>20%</span>
                <span>{formData.downPaymentRatio}%</span>
                <span>70%</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanTerm">贷款期限（月）</Label>
            <Select
              value={formData.loanTerm}
              onValueChange={(value) => setFormData({ ...formData, loanTerm: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择贷款期限" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">12个月</SelectItem>
                <SelectItem value="24">24个月</SelectItem>
                <SelectItem value="36">36个月</SelectItem>
                <SelectItem value="48">48个月</SelectItem>
                <SelectItem value="60">60个月</SelectItem>
              </SelectContent>
            </Select>
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