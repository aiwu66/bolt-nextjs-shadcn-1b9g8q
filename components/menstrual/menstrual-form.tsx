"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { addDays, format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Checkbox } from "@/components/ui/checkbox";

interface MenstrualFormProps {
  onCalculate: (result: any) => void;
}

export function MenstrualForm({ onCalculate }: MenstrualFormProps) {
  const [formData, setFormData] = useState({
    lastPeriodDate: "",
    cycleLength: "28",
    periodLength: "5",
    regularCycle: true,
    symptoms: {
      cramps: false,
      headache: false,
      breastTenderness: false,
      moodChanges: false,
      bloating: false,
    },
    birthControlUse: false,
    recentLifeChanges: false,
  });

  const calculateMenstrualCycle = () => {
    const lastPeriod = new Date(formData.lastPeriodDate);
    const cycleLength = Number(formData.cycleLength);
    
    // 计算下次月经日期
    const nextPeriod = addDays(lastPeriod, cycleLength);
    
    // 计算排卵日（通常在下次月经前14天）
    const ovulationDate = addDays(nextPeriod, -14);
    
    // 计算易孕期（排卵日前5天到后1天）
    const fertileWindow = {
      start: addDays(ovulationDate, -5),
      end: addDays(ovulationDate, 1),
    };
    
    // 计算安全期
    const safetyWindow = {
      start: addDays(lastPeriod, Number(formData.periodLength)),
      end: addDays(ovulationDate, -6),
    };

    return {
      nextPeriod,
      ovulationDate,
      fertileWindow,
      safetyWindow,
      cycle: {
        length: cycleLength,
        phase: "follicular", // 根据实际日期计算当前周期阶段
      },
      recommendations: {
        lifestyle: [
          "保持规律作息",
          "适量运动",
          "避免熬夜",
          "保持心情愉悦",
        ],
        nutrition: [
          "补充铁质",
          "增加蛋白质摄入",
          "多吃新鲜蔬果",
          "保持水分摄入",
        ],
        care: [
          "注意个人卫生",
          "保暖防寒",
          "适当休息",
          "避免剧烈运动",
        ],
      },
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateMenstrualCycle();
    onCalculate(result);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="lastPeriodDate">上次月经第一天</Label>
            <Input
              id="lastPeriodDate"
              type="date"
              value={formData.lastPeriodDate}
              onChange={(e) => setFormData({ ...formData, lastPeriodDate: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cycleLength">月经周期（天）</Label>
            <Input
              id="cycleLength"
              type="number"
              value={formData.cycleLength}
              onChange={(e) => setFormData({ ...formData, cycleLength: e.target.value })}
              min="21"
              max="35"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="periodLength">经期长度（天）</Label>
            <Input
              id="periodLength"
              type="number"
              value={formData.periodLength}
              onChange={(e) => setFormData({ ...formData, periodLength: e.target.value })}
              min="3"
              max="7"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="regularCycle"
              checked={formData.regularCycle}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, regularCycle: checked as boolean })
              }
            />
            <Label htmlFor="regularCycle">月经规律</Label>
          </div>

          <div className="space-y-2">
            <Label>经期症状（可多选）</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {Object.entries(formData.symptoms).map(([key, value]) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={value}
                    onCheckedChange={(checked) => 
                      setFormData({
                        ...formData,
                        symptoms: { ...formData.symptoms, [key]: checked as boolean }
                      })
                    }
                  />
                  <Label htmlFor={key} className="capitalize">
                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="birthControlUse"
              checked={formData.birthControlUse}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, birthControlUse: checked as boolean })
              }
            />
            <Label htmlFor="birthControlUse">正在使用避孕措施</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="recentLifeChanges"
              checked={formData.recentLifeChanges}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, recentLifeChanges: checked as boolean })
              }
            />
            <Label htmlFor="recentLifeChanges">近期有重大生活变化</Label>
          </div>
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