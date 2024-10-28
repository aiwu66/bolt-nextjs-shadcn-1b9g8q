"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cityConfigs } from "./city-configs";

interface SalaryFormProps {
  onCalculate: (result: any) => void;
  selectedCity: string;
}

export function SalaryForm({ onCalculate, selectedCity }: SalaryFormProps) {
  const [formData, setFormData] = useState({
    baseSalary: "",
    bonus: "",
    allowance: "",
    insurance: {
      pension: true,
      medical: true,
      unemployment: true,
      housingFund: true,
    },
    insuranceBase: "minimum", // minimum, average, custom
    customBase: "",
    additionalHousingFund: false,
    housingFundRate: "12",
  });

  const cityConfig = cityConfigs[selectedCity];

  const calculateSalary = () => {
    const baseSalary = Number(formData.baseSalary);
    const bonus = Number(formData.bonus) || 0;
    const allowance = Number(formData.allowance) || 0;
    
    // 计算社保基数
    let insuranceBase = 0;
    if (formData.insuranceBase === "minimum") {
      insuranceBase = cityConfig.insuranceBase.minimum;
    } else if (formData.insuranceBase === "average") {
      insuranceBase = cityConfig.insuranceBase.average;
    } else {
      insuranceBase = Number(formData.customBase);
    }

    // 计算五险一金
    const pension = formData.insurance.pension ? insuranceBase * 0.08 : 0;
    const medical = formData.insurance.medical ? insuranceBase * 0.02 : 0;
    const unemployment = formData.insurance.unemployment ? insuranceBase * 0.005 : 0;
    const housingFund = formData.insurance.housingFund 
      ? insuranceBase * (Number(formData.housingFundRate) / 100)
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

    const result = {
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
      deductions: {
        base: 5000,
        insurance: totalInsurance,
        tax,
      },
      details: {
        baseSalary,
        bonus,
        allowance,
      },
    };

    onCalculate(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateSalary();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="baseSalary">基本工资（元）</Label>
          <div className="relative">
            <Input
              id="baseSalary"
              type="number"
              value={formData.baseSalary}
              onChange={(e) => setFormData({ ...formData, baseSalary: e.target.value })}
              min="0"
              placeholder="请输入基本工资"
              className="pl-10"
              required
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">¥</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bonus">奖金（元）</Label>
          <div className="relative">
            <Input
              id="bonus"
              type="number"
              value={formData.bonus}
              onChange={(e) => setFormData({ ...formData, bonus: e.target.value })}
              min="0"
              placeholder="请输入奖金"
              className="pl-10"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">¥</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="allowance">津贴补贴（元）</Label>
          <div className="relative">
            <Input
              id="allowance"
              type="number"
              value={formData.allowance}
              onChange={(e) => setFormData({ ...formData, allowance: e.target.value })}
              min="0"
              placeholder="请输入津贴补贴"
              className="pl-10"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">¥</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="insuranceBase">社保基数</Label>
          <Select
            value={formData.insuranceBase}
            onValueChange={(value) => setFormData({ ...formData, insuranceBase: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="选择社保基数" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="minimum">最低基数</SelectItem>
              <SelectItem value="average">平均工资</SelectItem>
              <SelectItem value="custom">自定义基数</SelectItem>
            </SelectContent>
          </Select>
          {formData.insuranceBase === "custom" && (
            <div className="mt-2">
              <Input
                type="number"
                value={formData.customBase}
                onChange={(e) => setFormData({ ...formData, customBase: e.target.value })}
                placeholder="请输入自定义基数"
              />
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <Label>社保公积金项目</Label>
        <div className="grid grid-cols-2 gap-4">
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
            <Label htmlFor="housingFund" className="cursor-pointer">住房公积金</Label>
          </div>
        </div>

        {formData.insurance.housingFund && (
          <div className="space-y-2">
            <Label htmlFor="housingFundRate">公积金缴存比例</Label>
            <Select
              value={formData.housingFundRate}
              onValueChange={(value) => setFormData({ ...formData, housingFundRate: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择缴存比例" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5%</SelectItem>
                <SelectItem value="7">7%</SelectItem>
                <SelectItem value="8">8%</SelectItem>
                <SelectItem value="10">10%</SelectItem>
                <SelectItem value="12">12%</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
      >
        <Calculator className="w-4 h-4 mr-2" />
        计算税后工资
      </Button>
    </form>
  );
}