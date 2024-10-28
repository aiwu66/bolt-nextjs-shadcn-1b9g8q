"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const foodGroups = [
  {
    category: "主食类",
    examples: "米饭、面食、杂粮",
    portion: "每天250-400g",
    tips: "优选全谷物，控制精制淀粉",
  },
  {
    category: "蛋白质类",
    examples: "瘦肉、鱼、蛋、豆制品",
    portion: "每天120-200g",
    tips: "选择优质蛋白，少吃加工肉制品",
  },
  {
    category: "蔬菜类",
    examples: "各色新鲜蔬菜",
    portion: "每天300-500g",
    tips: "多样化搭配，注意深色蔬菜",
  },
  {
    category: "水果类",
    examples: "新鲜水果",
    portion: "每天200-350g",
    tips: "适量食用，控制高糖水果",
  },
  {
    category: "奶制品",
    examples: "牛奶、酸奶、奶酪",
    portion: "每天300ml",
    tips: "选择低脂或脱脂产品",
  },
];

export function BMIFoodGuide() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">健康饮食指南</h3>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>食物类别</TableHead>
              <TableHead>食物举例</TableHead>
              <TableHead>建议份量</TableHead>
              <TableHead>注意事项</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {foodGroups.map((food) => (
              <TableRow key={food.category}>
                <TableCell className="font-medium">{food.category}</TableCell>
                <TableCell>{food.examples}</TableCell>
                <TableCell>{food.portion}</TableCell>
                <TableCell>{food.tips}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6 space-y-4">
        <h4 className="font-medium">健康饮食原则：</h4>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>每天三餐规律，不要饿着</li>
          <li>食物多样化，营养均衡</li>
          <li>少油少盐少糖，清淡为主</li>
          <li>细嚼慢咽，适量饮水</li>
          <li>避免暴饮暴食，戒除零食</li>
        </ul>
      </div>
    </Card>
  );
}