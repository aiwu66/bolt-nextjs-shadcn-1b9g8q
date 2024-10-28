"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Calculator, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface DepositFormProps {
  onCalculate: (result: any) => void;
  onAddComparison: (result: any) => void;
}

export function DepositForm({ onCalculate, onAddComparison }: DepositFormProps) {
  const [formData, setFormData] = useState({
    depositType: "fixed",
    amount: "",
    term: "12",
    interestRate: "1.65",
    interestPayment: "onMaturity",
    autoRenew: false,
    compoundInterest: false,
    customRate: "",
  });

  const calculateDeposit = () => {
    const amount = Number(formData.amount);
    const rate = formData.customRate ? Number(formData.customRate) : Number(formData.interestRate);
    const term = Number(formData.term);
    const monthlyRate = rate / 100 / 12;
    const months = formData.depositType === "demand" ? 12 : term;
    
    let interest = 0;
    let total = amount;
    const schedule = [];

    if (formData.compoundInterest) {
      total = amount * Math.pow(1 + monthlyRate, months);
      interest = total - amount;

      for (let i = 1; i <= months; i++) {
        const currentTotal = amount * Math.pow(1 + monthlyRate, i);
        const currentInterest = currentTotal - amount;
        schedule.push({
          period: i,
          principal: amount,
          interest: currentInterest,
          balance: currentTotal,
        });
      }
    } else {
      interest = amount * rate / 100 * (months / 12);
      total = amount + interest;

      for (let i = 1; i <= months; i++) {
        const periodInterest = amount * monthlyRate;
        schedule.push({
          period: i,
          principal: amount,
          interest: periodInterest,
          balance: amount + (periodInterest * i),
        });
      }
    }

    return {
      principal: amount,
      interest,
      total,
      schedule,
    };
  };

  const handleSubmit = (e: React.FormEvent, isComparison = false) => {
    e.preventDefault();
    const result = calculateDeposit();
    
    if (isComparison) {
      onAddComparison(result);
    } else {
      onCalculate(result);
    }
  };

  const handleDepositTypeChange = (value: string) => {
    let rate = "1.65"; // 默认一年期利率
    if (value === "demand") {
      rate = "0.25"; // 活期利率
    }
    setFormData({ ...formData, depositType: value, interestRate: rate });
  };

  const handleTermChange = (value: string) => {
    let rate = "1.65";
    switch (value) {
      case "3": rate = "1.25"; break;  // 三个月
      case "6": rate = "1.45"; break;  // 半年
      case "12": rate = "1.65"; break; // 一年
      case "24": rate = "2.15"; break; // 二年
      case "36": rate = "2.65"; break; // 三年
      case "60": rate = "2.65"; break; // 五年
    }
    setFormData({ ...formData, term: value, interestRate: rate });
  };

  return (
    <Card className="p-6">
      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>存款类型</Label>
            <RadioGroup
              value={formData.depositType}
              onValueChange={handleDepositTypeChange}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fixed" id="fixed" />
                <Label htmlFor="fixed">定期存款</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="demand" id="demand" />
                <Label htmlFor="demand">活期存款</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">存款金额（元）</Label>
            <div className="relative">
              <Input
                id="amount"
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                min="0"
                step="0.01"
                placeholder="请输入存款金额"
                className="pl-10"
                required
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">¥</span>
            </div>
          </div>

          {formData.depositType === "fixed" && (
            <div className="space-y-2">
              <Label htmlFor="term">存款期限</Label>
              <Select
                value={formData.term}
                onValueChange={handleTermChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="选择存款期限" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">三个月</SelectItem>
                  <SelectItem value="6">六个月</SelectItem>
                  <SelectItem value="12">一年</SelectItem>
                  <SelectItem value="24">二年</SelectItem>
                  <SelectItem value="36">三年</SelectItem>
                  <SelectItem value="60">五年</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="interestRate">年利率（%）</Label>
            <div className="relative">
              <Input
                id="customRate"
                type="number"
                value={formData.customRate || formData.interestRate}
                onChange={(e) => setFormData({ ...formData, customRate: e.target.value })}
                step="0.01"
                min="0"
                max="100"
                placeholder="请输入年利率"
                className="pr-8"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
            </div>
            <p className="text-sm text-muted-foreground">
              当前参考利率：{formData.interestRate}%
            </p>
          </div>

          {formData.depositType === "fixed" && (
            <div className="space-y-2">
              <Label>利息支付方式</Label>
              <Select
                value={formData.interestPayment}
                onValueChange={(value) => setFormData({ ...formData, interestPayment: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="选择利息支付方式" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">按月支付</SelectItem>
                  <SelectItem value="quarterly">按季支付</SelectItem>
                  <SelectItem value="yearly">按年支付</SelectItem>
                  <SelectItem value="onMaturity">到期支付</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="compoundInterest"
              checked={formData.compoundInterest}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, compoundInterest: checked as boolean })
              }
            />
            <Label htmlFor="compoundInterest">复利计算</Label>
          </div>

          {formData.depositType === "fixed" && (
            <div className="flex items-center space-x-2">
              <Checkbox
                id="autoRenew"
                checked={formData.autoRenew}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, autoRenew: checked as boolean })
                }
              />
              <Label htmlFor="autoRenew">到期自动续存</Label>
            </div>
          )}
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