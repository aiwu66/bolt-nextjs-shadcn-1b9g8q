"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface CitySelectorProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export function CitySelector({ selectedCity, onCityChange }: CitySelectorProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="city">选择城市</Label>
      <Select value={selectedCity} onValueChange={onCityChange}>
        <SelectTrigger>
          <SelectValue placeholder="选择城市" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="beijing">北京</SelectItem>
          <SelectItem value="shanghai">上海</SelectItem>
          <SelectItem value="guangzhou">广州</SelectItem>
          <SelectItem value="shenzhen">深圳</SelectItem>
          <SelectItem value="hangzhou">杭州</SelectItem>
          <SelectItem value="nanjing">南京</SelectItem>
          <SelectItem value="chengdu">成都</SelectItem>
          <SelectItem value="wuhan">武汉</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}