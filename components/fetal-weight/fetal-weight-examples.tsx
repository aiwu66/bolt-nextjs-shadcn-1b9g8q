"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FetalWeightExample {
  title: string;
  description: string;
  data: {
    calculationMethod: string;
    gestationalAge: string;
    biparietal?: string;
    headCircumference?: string;
    abdominalCircumference?: string;
    femurLength?: string;
    fundalHeight?: string;
    abdominalGirth?: string;
  };
}

interface FetalWeightExamplesProps {
  onUseExample: (result: any) => void;
}

const examples: FetalWeightExample[] = [
  {
    title: "B超数据示例",
    description: "32周胎儿B超数据计算",
    data: {
      calculationMethod: "ultrasound",
      gestationalAge: "32",
      biparietal: "82",
      headCircumference: "295",
      abdominalCircumference: "278",
      femurLength: "62",
    },
  },
  {
    title: "宫高腹围示例",
    description: "36周宫高腹围测量",
    data: {
      calculationMethod: "fundal",
      gestationalAge: "36",
      fundalHeight: "34",
      abdominalGirth: "98",
    },
  },
  {
    title: "孕周估算示例",
    description: "28周胎儿体重估算",
    data: {
      calculationMethod: "gestational",
      gestationalAge: "28",
    },
  },
];

export function FetalWeightExamples({ onUseExample }: FetalWeightExamplesProps) {
  return (
    <div className="grid gap-6">
      {examples.map((example) => (
        <Card key={example.title} className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold">{example.title}</h4>
              <p className="text-sm text-muted-foreground">{example.description}</p>
              <ul className="mt-2 text-sm">
                <li>孕周：{example.data.gestationalAge}周</li>
                {example.data.calculationMethod === "ultrasound" && (
                  <>
                    <li>双顶径：{example.data.biparietal}mm</li>
                    <li>头围：{example.data.headCircumference}mm</li>
                    <li>腹围：{example.data.abdominalCircumference}mm</li>
                    <li>股骨长：{example.data.femurLength}mm</li>
                  </>
                )}
                {example.data.calculationMethod === "fundal" && (
                  <>
                    <li>宫高：{example.data.fundalHeight}cm</li>
                    <li>腹围：{example.data.abdominalGirth}cm</li>
                  </>
                )}
              </ul>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onUseExample(example.data)}
              className="w-32"
            >
              使用此例
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}