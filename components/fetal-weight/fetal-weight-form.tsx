"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FetalWeightFormProps {
  onCalculate: (result: any) => void;
}

export function FetalWeightForm({ onCalculate }: FetalWeightFormProps) {
  const [formData, setFormData] = useState({
    calculationMethod: "ultrasound",
    gestationalAge: "",
    biparietal: "",
    headCircumference: "",
    abdominalCircumference: "",
    femurLength: "",
    fundalHeight: "",
    abdominalGirth: "",
  });

  const calculateWeight = () => {
    let weight = 0;
    let percentile = 50;
    let weightRange = { min: 0, max: 0 };
    let growthStatus = "正常";
    
    const gestationalAge = Number(formData.gestationalAge);

    if (formData.calculationMethod === "ultrasound") {
      // Hadlock公式计算（单位：克）
      const bpd = Number(formData.biparietal) / 10; // 转换为厘米
      const hc = Number(formData.headCircumference) / 10;
      const ac = Number(formData.abdominalCircumference) / 10;
      const fl = Number(formData.femurLength) / 10;
      
      // 使用Hadlock公式计算（结果单位：克）
      weight = Math.exp(2.695 + 0.253 * ac + 0.006 * ac * fl + 0.020 * hc + 0.018 * bpd);
    } else if (formData.calculationMethod === "fundal") {
      // 宫高腹围法（单位：克）
      const fh = Number(formData.fundalHeight);
      const ag = Number(formData.abdominalGirth);
      weight = fh * ag * 10;
    } else {
      // 孕周估算（单位：克）
      if (gestationalAge >= 20 && gestationalAge <= 40) {
        weight = Math.exp(0.578 + 0.332 * gestationalAge - 0.00354 * gestationalAge * gestationalAge) * 1000;
      }
    }

    // 设置正常范围（±10%）
    weightRange = {
      min: Math.round(weight * 0.9),
      max: Math.round(weight * 1.1)
    };

    // 评估生长状态
    if (weight < weightRange.min) {
      growthStatus = "偏小";
    } else if (weight > weightRange.max) {
      growthStatus = "偏大";
    } else {
      growthStatus = "正常";
    }

    // 四舍五入到整数
    weight = Math.round(weight);

    return {
      weight,
      gestationalAge,
      method: formData.calculationMethod,
      percentile,
      weightRange,
      growthStatus,
      recommendations: {
        nutrition: [
          "增加优质蛋白质摄入",
          "补充叶酸和铁剂",
          "保证充足的水果蔬菜",
          "适量补充DHA",
        ],
        lifestyle: [
          "保持适度运动",
          "充足睡眠",
          "避免剧烈运动",
          "保持心情愉悦",
        ],
        monitoring: [
          "定期产检",
          "监测胎动",
          "记录体重变化",
          "关注胎儿发育",
        ],
      },
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateWeight();
    onCalculate(result);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label>计算方式</Label>
            <RadioGroup
              value={formData.calculationMethod}
              onValueChange={(value) => setFormData({ ...formData, calculationMethod: value })}
              className="grid grid-cols-3 gap-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ultrasound" id="ultrasound" />
                <Label htmlFor="ultrasound">B超数据</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fundal" id="fundal" />
                <Label htmlFor="fundal">宫高腹围</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gestational" id="gestational" />
                <Label htmlFor="gestational">孕周估算</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="gestationalAge">孕周（周）</Label>
            <Input
              id="gestationalAge"
              type="number"
              value={formData.gestationalAge}
              onChange={(e) => setFormData({ ...formData, gestationalAge: e.target.value })}
              min="20"
              max="40"
              step="0.1"
              placeholder="请输入孕周"
              required
            />
          </div>

          {formData.calculationMethod === "ultrasound" && (
            <>
              <div>
                <Label htmlFor="biparietal">双顶径（mm）</Label>
                <Input
                  id="biparietal"
                  type="number"
                  value={formData.biparietal}
                  onChange={(e) => setFormData({ ...formData, biparietal: e.target.value })}
                  placeholder="请输入双顶径"
                  required
                />
              </div>
              <div>
                <Label htmlFor="headCircumference">头围（mm）</Label>
                <Input
                  id="headCircumference"
                  type="number"
                  value={formData.headCircumference}
                  onChange={(e) => setFormData({ ...formData, headCircumference: e.target.value })}
                  placeholder="请输入头围"
                  required
                />
              </div>
              <div>
                <Label htmlFor="abdominalCircumference">腹围（mm）</Label>
                <Input
                  id="abdominalCircumference"
                  type="number"
                  value={formData.abdominalCircumference}
                  onChange={(e) => setFormData({ ...formData, abdominalCircumference: e.target.value })}
                  placeholder="请输入腹围"
                  required
                />
              </div>
              <div>
                <Label htmlFor="femurLength">股骨长（mm）</Label>
                <Input
                  id="femurLength"
                  type="number"
                  value={formData.femurLength}
                  onChange={(e) => setFormData({ ...formData, femurLength: e.target.value })}
                  placeholder="请输入股骨长"
                  required
                />
              </div>
            </>
          )}

          {formData.calculationMethod === "fundal" && (
            <>
              <div>
                <Label htmlFor="fundalHeight">宫高（cm）</Label>
                <Input
                  id="fundalHeight"
                  type="number"
                  value={formData.fundalHeight}
                  onChange={(e) => setFormData({ ...formData, fundalHeight: e.target.value })}
                  placeholder="请输入宫高"
                  required
                />
              </div>
              <div>
                <Label htmlFor="abdominalGirth">腹围（cm）</Label>
                <Input
                  id="abdominalGirth"
                  type="number"
                  value={formData.abdominalGirth}
                  onChange={(e) => setFormData({ ...formData, abdominalGirth: e.target.value })}
                  placeholder="请输入腹围"
                  required
                />
              </div>
            </>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700"
        >
          <Calculator className="w-4 h-4 mr-2" />
          开始计算
        </Button>
      </form>
    </Card>
  );
}