"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { addDays, format, parse } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Checkbox } from "@/components/ui/checkbox";

interface OvulationFormProps {
  onCalculate: (result: any) => void;
}

export function OvulationForm({ onCalculate }: OvulationFormProps) {
  const [formData, setFormData] = useState({
    calculationMethod: "period", // period: 月经周期, temperature: 体温, test: 试纸
    lastPeriodDate: "",
    cycleLength: "28",
    periodLength: "5",
    regularCycle: true,
    temperature: "",
    testResult: "",
    symptoms: {
      cervicalMucus: false,
      breastTenderness: false,
      ovarianPain: false,
      moodChanges: false,
    },
  });

  const calculateOvulation = () => {
    const lastPeriod = parse(formData.lastPeriodDate, "yyyy-MM-dd", new Date());
    const cycleLength = Number(formData.cycleLength);
    const ovulationDay = cycleLength - 14;
    
    const ovulationDate = addDays(lastPeriod, ovulationDay);
    const fertileStart = addDays(ovulationDate, -5);
    const fertileEnd = addDays(ovulationDate, 1);
    const nextPeriod = addDays(lastPeriod, cycleLength);

    let phase = "";
    const today = new Date();
    if (today < addDays(lastPeriod, Number(formData.periodLength))) {
      phase = "月经期";
    } else if (today >= fertileStart && today <= fertileEnd) {
      phase = "排卵期";
    } else if (today > fertileEnd && today < nextPeriod) {
      phase = "黄体期";
    } else {
      phase = "卵泡期";
    }

    return {
      ovulationDate,
      fertileWindow: {
        start: fertileStart,
        end: fertileEnd,
      },
      nextPeriod,
      cycle: {
        phase,
        length: cycleLength,
      },
      recommendations: {
        lifestyle: [
          "保持规律作息",
          "适量运动",
          "避免熬夜",
          "保持心情愉悦",
        ],
        nutrition: [
          "补充叶酸",
          "均衡饮食",
          "适量补充维生素",
          "控制咖啡因摄入",
        ],
        timing: [
          "排卵日前后同房",
          "保持适度频率",
          "避免过度疲劳",
          "注意保暖",
        ],
      },
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateOvulation();
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
                <RadioGroupItem value="period" id="period" />
                <Label htmlFor="period">月经周期</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="temperature" id="temperature" />
                <Label htmlFor="temperature">基础体温</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="test" id="test" />
                <Label htmlFor="test">排卵试纸</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.calculationMethod === "period" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="lastPeriodDate">末次月经第一天</Label>
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
                <Label htmlFor="periodLength">月经持续天数</Label>
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
            </>
          )}

          {formData.calculationMethod === "temperature" && (
            <div className="space-y-2">
              <Label htmlFor="temperature">基础体温（℃）</Label>
              <Input
                id="temperature"
                type="number"
                value={formData.temperature}
                onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
                step="0.01"
                min="35"
                max="38"
                placeholder="请输入基础体温"
                required
              />
            </div>
          )}

          {formData.calculationMethod === "test" && (
            <div className="space-y-2">
              <Label htmlFor="testResult">试纸结果</Label>
              <RadioGroup
                value={formData.testResult}
                onValueChange={(value) => setFormData({ ...formData, testResult: value })}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="positive" id="positive" />
                  <Label htmlFor="positive">阳性</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="negative" id="negative" />
                  <Label htmlFor="negative">阴性</Label>
                </div>
              </RadioGroup>
            </div>
          )}

          <div className="space-y-2">
            <Label>排卵症状（可多选）</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="cervicalMucus"
                  checked={formData.symptoms.cervicalMucus}
                  onCheckedChange={(checked) => 
                    setFormData({
                      ...formData,
                      symptoms: { ...formData.symptoms, cervicalMucus: checked as boolean }
                    })
                  }
                />
                <Label htmlFor="cervicalMucus">宫颈粘液增多</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="breastTenderness"
                  checked={formData.symptoms.breastTenderness}
                  onCheckedChange={(checked) => 
                    setFormData({
                      ...formData,
                      symptoms: { ...formData.symptoms, breastTenderness: checked as boolean }
                    })
                  }
                />
                <Label htmlFor="breastTenderness">乳房胀痛</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="ovarianPain"
                  checked={formData.symptoms.ovarianPain}
                  onCheckedChange={(checked) => 
                    setFormData({
                      ...formData,
                      symptoms: { ...formData.symptoms, ovarianPain: checked as boolean }
                    })
                  }
                />
                <Label htmlFor="ovarianPain">排卵痛</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="moodChanges"
                  checked={formData.symptoms.moodChanges}
                  onCheckedChange={(checked) => 
                    setFormData({
                      ...formData,
                      symptoms: { ...formData.symptoms, moodChanges: checked as boolean }
                    })
                  }
                />
                <Label htmlFor="moodChanges">情绪波动</Label>
              </div>
            </div>
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