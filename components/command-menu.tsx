"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { DialogTitle } from "@/components/ui/dialog";
import { categories } from "@/lib/categories";
import { calculatorIcons } from "@/lib/calculator-icons";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">搜索计算器...</span>
        <span className="sr-only">搜索计算器</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="sr-only">搜索计算器</DialogTitle>
        <CommandInput placeholder="输入计算器名称或拼音搜索..." />
        <CommandList>
          <CommandEmpty>未找到相关计算器</CommandEmpty>
          {categories.map((category) => (
            <CommandGroup key={category.href} heading={category.name}>
              {category.items.map((item) => {
                const Icon = calculatorIcons[item.href] || Calculator;
                return (
                  <CommandItem
                    key={item.href}
                    onSelect={() => runCommand(() => router.push(item.href))}
                  >
                    <Icon className={`mr-2 h-4 w-4 ${
                      category.color === "green" ? "text-green-600 dark:text-green-400" :
                      category.color === "rose" ? "text-rose-600 dark:text-rose-400" :
                      category.color === "blue" ? "text-blue-600 dark:text-blue-400" :
                      category.color === "indigo" ? "text-indigo-600 dark:text-indigo-400" :
                      category.color === "sky" ? "text-sky-600 dark:text-sky-400" :
                      "text-amber-600 dark:text-amber-400"
                    }`} />
                    {item.name}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}