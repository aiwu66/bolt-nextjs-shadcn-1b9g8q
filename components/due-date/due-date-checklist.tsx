"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface ChecklistItem {
  category: string;
  items: Array<{
    id: string;
    label: string;
    description?: string;
  }>;
}

const checklist: ChecklistItem[] = [
  {
    category: "孕妇用品",
    items: [
      { id: "maternity-clothes", label: "孕妇装", description: "宽松舒适的衣物" },
      { id: "maternity-bra", label: "孕妇内衣", description: "无钢圈、可调节" },
      { id: "maternity-belt", label: "托腹带", description: "减轻腰部压力" },
      { id: "slippers", label: "防滑拖鞋", description: "室内防滑" },
    ],
  },
  {
    category: "待产用品",
    items: [
      { id: "hospital-bag", label: "待产包", description: "准备住院必需品" },
      { id: "documents", label: "证件资料", description: "身份证、孕妇手册等" },
      { id: "sanitary-pads", label: "产褥垫", description: "产后使用" },
      { id: "nursing-bra", label: "哺乳内衣", description: "方便哺乳" },
    ],
  },
  {
    category: "婴儿用品",
    items: [
      { id: "diapers", label: "纸尿裤", description: "新生儿尺码" },
      { id: "clothes", label: "婴儿衣服", description: "纯棉、易穿脱" },
      { id: "blankets", label: "包被", description: "保暖必需品" },
      { id: "wipes", label: "湿巾", description: "清洁护理用" },
    ],
  },
  {
    category: "护理用品",
    items: [
      { id: "toiletries", label: "洗护用品", description: "婴儿专用" },
      { id: "thermometer", label: "体温计", description: "电子体温计" },
      { id: "cotton-swabs", label: "棉签", description: "清洁用" },
      { id: "nail-scissors", label: "指甲剪", description: "婴儿专用" },
    ],
  },
];

export function DueDateCheckList() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const getProgress = () => {
    const totalItems = checklist.reduce((sum, category) => sum + category.items.length, 0);
    return Math.round((checkedItems.length / totalItems) * 100);
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">待产准备清单</h3>
        <div className="text-sm text-muted-foreground">
          完成进度: {getProgress()}%
        </div>
      </div>

      <div className="space-y-8">
        {checklist.map((category) => (
          <div key={category.category}>
            <h4 className="font-medium mb-4 text-rose-600 dark:text-rose-400">
              {category.category}
            </h4>
            <div className="grid gap-4 sm:grid-cols-2">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <Checkbox
                    id={item.id}
                    checked={checkedItems.includes(item.id)}
                    onCheckedChange={() => toggleItem(item.id)}
                  />
                  <div className="space-y-1">
                    <Label
                      htmlFor={item.id}
                      className="text-sm font-medium cursor-pointer"
                    >
                      {item.label}
                    </Label>
                    {item.description && (
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          建议：
        </p>
        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
          <li>• 建议在预产期前1-2个月准备待产物品</li>
          <li>• 可以根据实际需求调整清单内容</li>
          <li>• 重要物品建议准备多件备用</li>
          <li>• 定期检查物品是否齐全完好</li>
        </ul>
      </div>
    </Card>
  );
}