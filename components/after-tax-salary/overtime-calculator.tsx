"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OvertimeCalculatorProps {
  onCalculate: (result: {
    workdayOT: number;
    weekendOT: number;
    holidayOT: number;
    totalOT: number;
  }) => void;
}

export function OvertimeCalculator({ onCalculate }: OvertimeCalculatorProps) {
  const [formData, setFormData] = useState({
    baseSalary: "",
    workingDays: "21.75",
    workingHours: "8",
    overtimeHours: {
      workday: "",
      weekend: "",
      holiday: "",
    },
  });

  const calculateOvertimePayment = () => {
    const hourlyRate = Number(formData.baseSalary) / (Number(formData.workingDays) * Number(formData.workingHours));
    
    const workdayOT = Number(formData.overtimeHours.workday) * hourlyRate * 1.5;
    const weekendOT = Number(formData.overtimeHours.weekend) * hourlyRate * 2;
    const holidayOT = Number(formData.overtimeHours.holiday) * hourlyRate * 3;
    
    return {
      workdayOT,
      weekendOT,
      holidayOT,
      totalOT: workdayOT + weekendOT + holidayOT,
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateOvertimePayment();
    onCalculate(result);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="baseSalary">基本工资（元）</Label>
            <Input
              id="baseSalary"
              type="number"
              value={formData.baseSalary}
              onChange={(e) => setFormData({ ...formData, baseSalary: e.target.value })}
              min="0"
              placeholder="请输入基本工资"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="workingDays">月标准工作天数</Label>
            <Select
              value={formData.workingDays}
              onValueChange={(value) => setFormData({ ...formData, workingDays: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择工作天数" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="21.75">21.75天（标准）</SelectItem>
                <SelectItem value="21">21天</SelectItem>
                <SelectItem value="22">22天</SelectItem>
                <SelectItem value="23">23天</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="workingHours">日标准工作时长</Label>
            <Select
              value={formData.workingHours}
              onValueChange={(value) => setFormData({ ...formData, workingHours: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择工作时长" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8">8小时（标准）</SelectItem>
                <SelectItem value="7">7小时</SelectItem>
                <SelectItem value="9">9小时</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="workdayOT">工作日加班时长（小时）</Label>
            <Input
              id="workdayOT"
              type="number"
              value={formData.overtimeHours.workday}
              onChange={(e) => setFormData({
                ...formData,
                overtimeHours: { ...formData.overtimeHours, workday: e.target.value }
              })}
              min="0"
              placeholder="1.5倍工资"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="weekendOT">周末加班时长（小时）</Label>
            <Input
              id="weekendOT"
              type="number"
              value={formData.overtimeHours.weekend}
              onChange={(e) => setFormData({
                ...formData,
                overtimeHours: { ...formData.overtimeHours, weekend: e.target.value }
              })}
              min="0"
              placeholder="2倍工资"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="holidayOT">节假日加班时长（小时）</Label>
            <Input
              id="holidayOT"
              type="number"
              value={formData.overtimeHours.holiday}
              onChange={(e) => setFormData({
                ...formData,
                overtimeHours: { ...formData.overtimeHours, holiday: e.target.value }
              })}
              min="0"
              placeholder="3倍工资"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          <Calculator className="w-4 h-4 mr-2" />
          计算加班工资
        </Button>

        <p className="text-sm text-muted-foreground mt-2">
          说明：工作日加班1.5倍工资，周末加班2倍工资，节假日加班3倍工资
        </p>
      </form>
    </Card>
  );
}