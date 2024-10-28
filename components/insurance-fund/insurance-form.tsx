"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, Plus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface InsuranceFormProps {
  onCalculate: (result: any) => void;
  onAddComparison: (result: any) => void;
}

export function InsuranceForm({ onCalculate, onAddComparison }: InsuranceFormProps) {
  const [formData, setFormData] = useState({
    salary: "",
    insuranceBase: "minimum", // minimum, average, maximum, custom
    customBase: "",
    housingFundBase: "same", // same, custom
    customHousingFundBase: "",
    insurance: {
      pension: true,
      medical: true,
      unemployment: true,
      injury: true,
      maternity: true,
      housingFund: true,
    },
    housingFundRate: "12",
  });

  // 使用全国统一的基准值
  const baseConfig = {
    minimum: 3613,
    maximum: 31884,
    average: 9613,
  };

  const calculateInsurance = () => {
    const salary = Number(formData.salary);
    
    // 计算社保基数
    let insuranceBase = 0;
    if (formData.insuranceBase === "minimum") {
      insuranceBase = baseConfig.minimum;
    } else if (formData.insuranceBase === "average") {
      insuranceBase = baseConfig.average;
    } else if (formData.insuranceBase === "maximum") {
      insuranceBase = baseConfig.maximum;
    } else {
      insuranceBase = Number(formData.customBase);
    }

    // 计算公积金基数
    let housingFundBase = formData.housingFundBase === "same" 
      ? insuranceBase 
      : Number(formData.customHousingFundBase);

    // 个人缴费部分
    const personalPension = formData.insurance.pension ? insuranceBase * 0.08 : 0;
    const personalMedical = formData.insurance.medical ? insuranceBase * 0.02 : 0;
    const personalUnemployment = formData.insurance.unemployment ? insuranceBase * 0.005 : 0;
    const personalHousingFund = formData.insurance.housingFund 
      ? housingFundBase * (Number(formData.housingFundRate) / 100)
      : 0;

    // 企业缴费部分
    const companyPension = formData.insurance.pension ? insuranceBase * 0.16 : 0;
    const companyMedical = formData.insurance.medical ? insuranceBase * 0.1 : 0;
    const companyUnemployment = formData.insurance.unemployment ? insuranceBase * 0.008 : 0;
    const companyInjury = formData.insurance.injury ? insuranceBase * 0.004 : 0;
    const companyMaternity = formData.insurance.maternity ? insuranceBase * 0.008 : 0;
    const companyHousingFund = formData.insurance.housingFund 
      ? housingFundBase * (Number(formData.housingFundRate) / 100)
      : 0;

    return {
      personalTotal: personalPension + personalMedical + personalUnemployment + personalHousingFund,
      companyTotal: companyPension + companyMedical + companyUnemployment + 
                   companyInjury + companyMaternity + companyHousingFund,
      personal: {
        pension: personalPension,
        medical: personalMedical,
        unemployment: personalUnemployment,
        housingFund: personalHousingFund,
        total: personalPension + personalMedical + personalUnemployment + personalHousingFund,
      },
      company: {
        pension: companyPension,
        medical: companyMedical,
        unemployment: companyUnemployment,
        injury: companyInjury,
        maternity: companyMaternity,
        housingFund: companyHousingFund,
        total: companyPension + companyMedical + companyUnemployment + 
               companyInjury + companyMaternity + companyHousingFund,
      },
      base: {
        insurance: insuranceBase,
        housingFund: housingFundBase,
      },
    };
  };

  const handleSubmit = (e: React.FormEvent, isComparison = false) => {
    e.preventDefault();
    const result = calculateInsurance();
    
    if (isComparison) {
      onAddComparison(result);
    } else {
      onCalculate(result);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="salary">月收入（元）</Label>
          <div className="relative">
            <Input
              id="salary"
              type="number"
              value={formData.salary}
              onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
              min="0"
              placeholder="请输入月收入"
              className="pl-10"
              required
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">¥</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="insuranceBase">社保缴费基数</Label>
          <Select
            value={formData.insuranceBase}
            onValueChange={(value) => setFormData({ ...formData, insuranceBase: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="选择缴费基数" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="minimum">最低基数 ({baseConfig.minimum}元)</SelectItem>
              <SelectItem value="average">平均工资 ({baseConfig.average}元)</SelectItem>
              <SelectItem value="maximum">最高基数 ({baseConfig.maximum}元)</SelectItem>
              <SelectItem value="custom">自定义基数</SelectItem>
            </SelectContent>
          </Select>
          {formData.insuranceBase === "custom" && (
            <Input
              type="number"
              value={formData.customBase}
              onChange={(e) => setFormData({ ...formData, customBase: e.target.value })}
              placeholder="请输入自定义基数"
              className="mt-2"
            />
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="housingFundBase">公积金缴费基数</Label>
          <Select
            value={formData.housingFundBase}
            onValueChange={(value) => setFormData({ ...formData, housingFundBase: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="选择公积金基数" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="same">与社保基数相同</SelectItem>
              <SelectItem value="custom">自定义基数</SelectItem>
            </SelectContent>
          </Select>
          {formData.housingFundBase === "custom" && (
            <Input
              type="number"
              value={formData.customHousingFundBase}
              onChange={(e) => setFormData({ ...formData, customHousingFundBase: e.target.value })}
              placeholder="请输入自定义基数"
              className="mt-2"
            />
          )}
        </div>

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
      </div>

      <div className="space-y-4">
        <Label>参保险种</Label>
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
            <Label htmlFor="pension" className="cursor-pointer">养老保险</Label>
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
            <Label htmlFor="medical" className="cursor-pointer">医疗保险</Label>
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
            <Label htmlFor="unemployment" className="cursor-pointer">失业保险</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="injury"
              checked={formData.insurance.injury}
              onCheckedChange={(checked) => 
                setFormData({
                  ...formData,
                  insurance: { ...formData.insurance, injury: checked as boolean }
                })
              }
            />
            <Label htmlFor="injury" className="cursor-pointer">工伤保险</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="maternity"
              checked={formData.insurance.maternity}
              onCheckedChange={(checked) => 
                setFormData({
                  ...formData,
                  insurance: { ...formData.insurance, maternity: checked as boolean }
                })
              }
            />
            <Label htmlFor="maternity" className="cursor-pointer">生育保险</Label>
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
      </div>

      <div className="flex gap-4">
        <Button
          type="submit"
          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          <Calculator className="w-4 h-4 mr-2" />
          计算五险一金
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={(e) => handleSubmit(e, true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          添加到对比
        </Button>
      </div>
    </form>
  );
}