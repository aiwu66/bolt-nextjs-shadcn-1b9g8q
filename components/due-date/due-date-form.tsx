"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { addDays, addWeeks, format, parse } from "date-fns";
import { zhCN } from "date-fns/locale";

interface DueDateFormProps {
  onCalculate: (result: any) => void;
}

export function DueDateForm({ onCalculate }: DueDateFormProps) {
  const [formData, setFormData] = useState({
    calculationMethod: "lmp", // lmp: 末次月经, conception: 受孕日期, ultrasound: B超检查
    lmpDate: "",
    conceptionDate: "",
    ultrasoundDate: "",
    ultrasoundWeeks: "",
    ultrasoundDays: "",
  });

  const calculateDueDate = () => {
    let dueDate: Date;
    let conception: Date;
    let gestationalAge = { weeks: 0, days: 0 };
    const today = new Date();

    if (formData.calculationMethod === "lmp") {
      const lmpDate = parse(formData.lmpDate, "yyyy-MM-dd", new Date());
      dueDate = addDays(lmpDate, 280); // 40周
      conception = addDays(lmpDate, 14); // 假设排卵日在月经第14天
    } else if (formData.calculationMethod === "conception") {
      conception = parse(formData.conceptionDate, "yyyy-MM-dd", new Date());
      dueDate = addDays(conception, 266); // 38周
    } else {
      const ultrasoundDate = parse(formData.ultrasoundDate, "yyyy-MM-dd", new Date());
      const weeksAtUltrasound = Number(formData.ultrasoundWeeks);
      const daysAtUltrasound = Number(formData.ultrasoundDays);
      const totalDaysAtUltrasound = weeksAtUltrasound * 7 + daysAtUltrasound;
      dueDate = addDays(ultrasoundDate, 280 - totalDaysAtUltrasound);
      conception = addDays(dueDate, -266);
    }

    // 计算当前孕周
    const daysSinceConception = Math.floor((today.getTime() - conception.getTime()) / (1000 * 60 * 60 * 24));
    gestationalAge.weeks = Math.floor((daysSinceConception + 14) / 7);
    gestationalAge.days = (daysSinceConception + 14) % 7;

    // 确定孕期阶段
    const trimester = gestationalAge.weeks <= 13 ? 1 : gestationalAge.weeks <= 27 ? 2 : 3;

    // 生成重要里程碑
    const milestones = [
      {
        date: addWeeks(conception, 4),
        event: "胎心开始跳动",
        description: "可通过B超观察到胎心跳动",
      },
      {
        date: addWeeks(conception, 12),
        event: "第一次产检",
        description: "建议进行首次系统产检",
      },
      {
        date: addWeeks(conception, 16),
        event: "早期筛查",
        description: "进行唐氏筛查等检查",
      },
      {
        date: addWeeks(conception, 20),
        event: "胎动明显",
        description: "可以明显感觉到胎动",
      },
      {
        date: addWeeks(conception, 24),
        event: "胎儿存活期",
        description: "胎儿已具备生存能力",
      },
      {
        date: addWeeks(conception, 28),
        event: "第三孕期开始",
        description: "进入孕晚期，需要更频繁产检",
      },
      {
        date: addWeeks(conception, 36),
        event: "准备待产",
        description: "准备待产物品，熟悉产程知识",
      },
    ];

    return {
      dueDate,
      gestationalAge,
      trimester,
      conception,
      milestones,
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateDueDate();
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
                <RadioGroupItem value="lmp" id="lmp" />
                <Label htmlFor="lmp">末次月经</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="conception" id="conception" />
                <Label htmlFor="conception">受孕日期</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ultrasound" id="ultrasound" />
                <Label htmlFor="ultrasound">B超检查</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.calculationMethod === "lmp" && (
            <div className="space-y-2">
              <Label htmlFor="lmpDate">末次月经第一天</Label>
              <Input
                id="lmpDate"
                type="date"
                value={formData.lmpDate}
                onChange={(e) => setFormData({ ...formData, lmpDate: e.target.value })}
                required
              />
            </div>
          )}

          {formData.calculationMethod === "conception" && (
            <div className="space-y-2">
              <Label htmlFor="conceptionDate">受孕日期</Label>
              <Input
                id="conceptionDate"
                type="date"
                value={formData.conceptionDate}
                onChange={(e) => setFormData({ ...formData, conceptionDate: e.target.value })}
                required
              />
            </div>
          )}

          {formData.calculationMethod === "ultrasound" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="ultrasoundDate">B超检查日期</Label>
                <Input
                  id="ultrasoundDate"
                  type="date"
                  value={formData.ultrasoundDate}
                  onChange={(e) => setFormData({ ...formData, ultrasoundDate: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ultrasoundWeeks">B超孕周</Label>
                  <Input
                    id="ultrasoundWeeks"
                    type="number"
                    min="0"
                    max="42"
                    placeholder="周"
                    value={formData.ultrasoundWeeks}
                    onChange={(e) => setFormData({ ...formData, ultrasoundWeeks: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ultrasoundDays">B超天数</Label>
                  <Input
                    id="ultrasoundDays"
                    type="number"
                    min="0"
                    max="6"
                    placeholder="天"
                    value={formData.ultrasoundDays}
                    onChange={(e) => setFormData({ ...formData, ultrasoundDays: e.target.value })}
                    required
                  />
                </div>
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