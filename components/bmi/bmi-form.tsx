"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BMIFormProps {
  onCalculate: (result: any) => void;
}

export function BMIForm({ onCalculate }: BMIFormProps) {
  const [formData, setFormData] = useState({
    age: "",
    gender: "male",
    height: "",
    weight: "",
    activityLevel: "moderate",
    bodyType: "normal",
    waist: "",
    neck: "",
    hip: "", // 女性需要
  });

  const calculateBMI = () => {
    const height = Number(formData.height) / 100; // 转换为米
    const weight = Number(formData.weight);
    const bmi = weight / (height * height);
    
    // BMI分类
    let category = "";
    if (bmi < 18.5) {
      category = "偏瘦";
    } else if (bmi < 24) {
      category = "正常";
    } else if (bmi < 28) {
      category = "超重";
    } else {
      category = "肥胖";
    }

    // 理想体重范围
    const idealMin = 18.5 * height * height;
    const idealMax = 23.9 * height * height;

    // 体脂率计算（海军法）
    let bodyFat = 0;
    if (formData.gender === "male") {
      bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(Number(formData.waist) - Number(formData.neck)) + 0.15456 * Math.log10(height * 100)) - 450;
    } else {
      bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(Number(formData.waist) + Number(formData.hip) - Number(formData.neck)) + 0.22100 * Math.log10(height * 100)) - 450;
    }

    // 健康风险评估
    const healthRisks = [];
    if (bmi >= 28) {
      healthRisks.push("心血管疾病风险增加");
      healthRisks.push("糖尿病风险增加");
      healthRisks.push("关节负担加重");
    } else if (bmi < 18.5) {
      healthRisks.push("免疫力可能下降");
      healthRisks.push("营养不良风险");
    }

    // 个性化建议
    const recommendations = {
      diet: [
        "保持均衡饮食",
        "控制热量摄入",
        "增加蛋白质摄入",
        "多吃蔬菜水果",
      ],
      exercise: [
        "每周进行150分钟中等强度运动",
        "进行力量训练",
        "保持运动习惯",
        "循序渐进增加运动量",
      ],
    };

    return {
      bmi,
      category,
      idealWeight: {
        min: idealMin,
        max: idealMax,
      },
      bodyFat,
      healthRisks,
      recommendations,
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateBMI();
    onCalculate(result);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="age">年龄（岁）</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              min="2"
              max="120"
              placeholder="请输入年龄"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>性别</Label>
            <RadioGroup
              value={formData.gender}
              onValueChange={(value) => setFormData({ ...formData, gender: value })}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">男</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">女</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="height">身高（厘米）</Label>
            <Input
              id="height"
              type="number"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
              min="50"
              max="250"
              placeholder="请输入身高"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight">体重（公斤）</Label>
            <Input
              id="weight"
              type="number"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              min="2"
              max="300"
              step="0.1"
              placeholder="请输入体重"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="waist">腰围（厘米）</Label>
            <Input
              id="waist"
              type="number"
              value={formData.waist}
              onChange={(e) => setFormData({ ...formData, waist: e.target.value })}
              min="30"
              max="200"
              placeholder="请输入腰围"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="neck">颈围（厘米）</Label>
            <Input
              id="neck"
              type="number"
              value={formData.neck}
              onChange={(e) => setFormData({ ...formData, neck: e.target.value })}
              min="20"
              max="100"
              placeholder="请输入颈围"
              required
            />
          </div>

          {formData.gender === "female" && (
            <div className="space-y-2">
              <Label htmlFor="hip">臀围（厘米）</Label>
              <Input
                id="hip"
                type="number"
                value={formData.hip}
                onChange={(e) => setFormData({ ...formData, hip: e.target.value })}
                min="50"
                max="200"
                placeholder="请输入臀围"
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="activityLevel">活动水平</Label>
            <Select
              value={formData.activityLevel}
              onValueChange={(value) => setFormData({ ...formData, activityLevel: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择活动水平" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">久坐不动</SelectItem>
                <SelectItem value="light">轻度活动</SelectItem>
                <SelectItem value="moderate">中度活动</SelectItem>
                <SelectItem value="active">重度活动</SelectItem>
                <SelectItem value="veryActive">剧烈运动</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bodyType">体型</Label>
            <Select
              value={formData.bodyType}
              onValueChange={(value) => setFormData({ ...formData, bodyType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择体型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="slim">偏瘦</SelectItem>
                <SelectItem value="normal">正常</SelectItem>
                <SelectItem value="muscular">肌肉型</SelectItem>
                <SelectItem value="overweight">偏胖</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
        >
          <Calculator className="w-4 h-4 mr-2" />
          开始计算
        </Button>
      </form>
    </Card>
  );
}