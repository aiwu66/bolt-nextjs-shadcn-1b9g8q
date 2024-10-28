"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CitySelectorProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
}

const cities = {
  firstTier: [
    { id: "beijing", name: "北京" },
    { id: "shanghai", name: "上海" },
    { id: "guangzhou", name: "广州" },
    { id: "shenzhen", name: "深圳" },
  ],
  secondTier: [
    { id: "hangzhou", name: "杭州" },
    { id: "nanjing", name: "南京" },
    { id: "chengdu", name: "成都" },
    { id: "wuhan", name: "武汉" },
    { id: "xian", name: "西安" },
    { id: "suzhou", name: "苏州" },
  ],
  thirdTier: [
    { id: "hefei", name: "合肥" },
    { id: "changsha", name: "长沙" },
    { id: "fuzhou", name: "福州" },
    { id: "jinan", name: "济南" },
    { id: "kunming", name: "昆明" },
  ],
};

export function CitySelector({ selectedCity, onCityChange }: CitySelectorProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">城市：</span>
      <Select value={selectedCity} onValueChange={onCityChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="选择城市" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>一线城市</SelectLabel>
            {cities.firstTier.map((city) => (
              <SelectItem key={city.id} value={city.id}>
                {city.name}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>二线城市</SelectLabel>
            {cities.secondTier.map((city) => (
              <SelectItem key={city.id} value={city.id}>
                {city.name}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>三线城市</SelectLabel>
            {cities.thirdTier.map((city) => (
              <SelectItem key={city.id} value={city.id}>
                {city.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}