"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
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

interface VehicleTaxFormProps {
  onCalculate: (result: any) => void;
  onAddComparison: (result: any) => void;
}

export function VehicleTaxForm({ onCalculate, onAddComparison }: VehicleTaxFormProps) {
  const [formData, setFormData] = useState({
    priceType: "invoice", // invoice, naked, guide
    vehiclePrice: "",
    vehicleType: "traditional", // traditional, newEnergy, secondHand
    hasVatInvoice: true,
    vatRate: "13",
    otherDeductions: "",
    isImported: false,
  });

  const calculateTax = () => {
    const price = Number(formData.vehiclePrice);
    let taxablePrice = price;
    let vatDeduction = 0;
    let otherDeductions = Number(formData.otherDeductions) || 0;

    // 增值税发票抵扣
    if (formData.hasVatInvoice) {
      vatDeduction = price * Number(formData.vatRate) / (100 + Number(formData.vatRate));
      taxablePrice -= vatDeduction;
    }

    // 其他抵扣项
    taxablePrice -= otherDeductions;

    // 计算税额
    let taxRate = 0.05; // 基础税率5%
    
    // 根据车辆类型调整
    if (formData.vehicleType === "newEnergy") {
      taxRate = 0; // 新能源免税
    } else if (formData.vehicleType === "secondHand") {
      taxRate = 0.025; // 二手车减半
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

  const handleSubmit = (e: React.FormEvent, isComparison = false) => {
    e.preventDefault();
    const result = calculateTax();
    
    if (isComparison) {
      onAddComparison(result);
    } else {
      onCalculate(result);
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="priceType">价格类型</Label>
            <Select
              value={formData.priceType}
              onValueChange={(value) => setFormData({ ...formData, priceType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择价格类型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="invoice">发票价</SelectItem>
                <SelectItem value="naked">裸车价</SelectItem>
                <SelectItem value="guide">厂商指导价</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="vehiclePrice">车辆价格（元）</Label>
            <div className="relative">
              <Input
                id="vehiclePrice"
                type="number"
                value={formData.vehiclePrice}
                onChange={(e) => setFormData({ ...formData, vehiclePrice: e.target.value })}
                min="0"
                step="0.01"
                placeholder="请输入车辆价格"
                className="pl-10"
                required
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">¥</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="vehicleType">车辆类型</Label>
            <Select
              value={formData.vehicleType}
              onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择车辆类型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="traditional">传统燃油车</SelectItem>
                <SelectItem value="newEnergy">新能源汽车</SelectItem>
                <SelectItem value="secondHand">二手车</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="hasVatInvoice"
                checked={formData.hasVatInvoice}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, hasVatInvoice: checked as boolean })
                }
              />
              <Label htmlFor="hasVatInvoice">有增值税专用发票</Label>
            </div>

            {formData.hasVatInvoice && (
              <div className="space-y-2">
                <Label htmlFor="vatRate">增值税税率</Label>
                <Select
                  value={formData.vatRate}
                  onValueChange={(value) => setFormData({ ...formData, vatRate: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="选择增值税税率" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="13">13%</SelectItem>
                    <SelectItem value="9">9%</SelectItem>
                    <SelectItem value="6">6%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="otherDeductions">其他抵扣金额（元）</Label>
            <div className="relative">
              <Input
                id="otherDeductions"
                type="number"
                value={formData.otherDeductions}
                onChange={(e) => setFormData({ ...formData, otherDeductions: e.target.value })}
                min="0"
                step="0.01"
                placeholder="请输入其他抵扣金额"
                className="pl-10"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">¥</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isImported"
                checked={formData.isImported}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, isImported: checked as boolean })
                }
              />
              <Label htmlFor="isImported">进口车辆</Label>
            </div>
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