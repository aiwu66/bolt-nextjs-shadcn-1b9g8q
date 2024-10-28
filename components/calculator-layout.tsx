"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CalculatorLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

export function CalculatorLayout({
  title,
  description,
  children,
  className,
}: CalculatorLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Card className={cn("p-6", className)}>
          {children}
        </Card>
      </div>
    </div>
  );
}