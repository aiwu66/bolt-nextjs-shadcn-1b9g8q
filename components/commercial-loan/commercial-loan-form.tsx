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

interface CommercialLoanFormProps {
  onCalculate: (result: any) => void;
  onAddComparison: (result: any) => void;
}

export function CommercialLoanForm({ onCalculate, onAddComparison }: CommercialLoanFormProps) {
  const [formData, setFormData] = useState({
    loanAmount: "",
    loanTerm: "30",
    interestRate: "4.2",
    paymentMethod: "equal",
    propertyType: "first",
    lprType: "5year",
    lprAdjustment: "0",
  });

  const calculateLoan = (
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
    const result = calculateLoan(
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

  const handlePropertyTypeChange = (value: string) => {
    const baseRate = value === "first" ? 4.2 : 4.5;
    const adjustment = Number(formData.lprAdjustment);
    setFormData({
      ...formData,
      propertyType: value,
      interestRate: (baseRate + adjustment).toString(),
    });
  };

  const handleLPRAdjustmentChange = (value: string) => {
    const baseRate = formData.propertyType === "first" ? 4.2 : 4.5;
    const adjustment = Number(value);
    setFormData({
      ...formData,
      lprAdjustment: value,
      interestRate: (baseRate + adjustment).toString(),
    });
  };

  return (
    <Card className="p-6">
      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
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
            <Label htmlFor="lprType">LPR期限</Label>
            <Select
              value={formData.lprType}
              onValueChange={(value) => setFormData({ ...formData, lprType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择LPR期限" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5year">5年期LPR</SelectItem>
                <SelectItem value="1year">1年期LPR</SelectItem>
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
            <Label htmlFor="lprAdjustment">利率调整（基点）</Label>
            <Select
              value={formData.lprAdjustment}
              onValueChange={handleLPRAdjustmentChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择利率调整" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="-30">-30个基点</SelectItem>
                <SelectItem value="-20">-20个基点</SelectItem>
                <SelectItem value="-10">-10个基点</SelectItem>
                <SelectItem value="0">不调整</SelectItem>
                <SelectItem value="10">+10个基点</SelectItem>
                <SelectItem value="20">+20个基点</SelectItem>
                <SelectItem value="30">+30个基点</SelectItem>
              </SelectContent>
            </Select>
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