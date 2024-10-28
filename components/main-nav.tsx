"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calculator, Menu, Home, ChevronRight } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { CommandMenu } from "@/components/command-menu";
import { categories } from "@/lib/categories";
import { calculatorIcons } from "@/lib/calculator-icons";

export function MainNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="font-bold hidden sm:inline-block">在线计算器</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
              pathname === "/" ? "bg-accent" : "transparent"
            )}
          >
            <Home className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            首页
          </Link>
          {categories.map((category) => (
            <div key={category.href} className="relative group">
              <div className="flex items-center gap-1 cursor-pointer py-2">
                <category.icon 
                  className={`h-4 w-4 ${
                    category.color === "green" ? "text-green-600 dark:text-green-400" :
                    category.color === "rose" ? "text-rose-600 dark:text-rose-400" :
                    category.color === "blue" ? "text-blue-600 dark:text-blue-400" :
                    category.color === "indigo" ? "text-indigo-600 dark:text-indigo-400" :
                    category.color === "sky" ? "text-sky-600 dark:text-sky-400" :
                    "text-amber-600 dark:text-amber-400"
                  }`}
                />
                <span className="text-sm font-medium">{category.name}</span>
              </div>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-popover rounded-lg shadow-lg border p-2 w-[240px]">
                  <div className="grid gap-1">
                    {category.items.map((item) => {
                      const Icon = calculatorIcons[item.href] || Calculator;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent",
                            pathname === item.href ? "bg-accent" : "transparent"
                          )}
                        >
                          <Icon 
                            className={`h-4 w-4 ${
                              category.color === "green" ? "text-green-600 dark:text-green-400" :
                              category.color === "rose" ? "text-rose-600 dark:text-rose-400" :
                              category.color === "blue" ? "text-blue-600 dark:text-blue-400" :
                              category.color === "indigo" ? "text-indigo-600 dark:text-indigo-400" :
                              category.color === "sky" ? "text-sky-600 dark:text-sky-400" :
                              "text-amber-600 dark:text-amber-400"
                            }`}
                          />
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search, Theme Toggle and Mobile Menu */}
        <div className="flex items-center gap-2">
          <CommandMenu />
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <div className="flex h-14 items-center border-b px-4">
                <Link 
                  href="/" 
                  className="flex items-center gap-2 font-bold"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveCategory(null);
                  }}
                >
                  <Calculator className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>在线计算器</span>
                </Link>
              </div>
              <ScrollArea className="h-[calc(100vh-4rem)]">
                <div className="px-2 py-4">
                  <Link
                    href="/"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveCategory(null);
                    }}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                      pathname === "/" ? "bg-accent" : "transparent"
                    )}
                  >
                    <Home className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    首页
                  </Link>

                  <div className="mt-4 space-y-1">
                    {categories.map((category) => (
                      <div key={category.href}>
                        <button
                          onClick={() => setActiveCategory(activeCategory === category.href ? null : category.href)}
                          className={cn(
                            "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent",
                            activeCategory === category.href ? "bg-accent" : "transparent"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <category.icon 
                              className={`h-4 w-4 ${
                                category.color === "green" ? "text-green-600 dark:text-green-400" :
                                category.color === "rose" ? "text-rose-600 dark:text-rose-400" :
                                category.color === "blue" ? "text-blue-600 dark:text-blue-400" :
                                category.color === "indigo" ? "text-indigo-600 dark:text-indigo-400" :
                                category.color === "sky" ? "text-sky-600 dark:text-sky-400" :
                                "text-amber-600 dark:text-amber-400"
                              }`}
                            />
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <ChevronRight className={cn(
                            "h-4 w-4 transition-transform",
                            activeCategory === category.href ? "rotate-90" : ""
                          )} />
                        </button>
                        
                        {activeCategory === category.href && (
                          <div className="mt-1 ml-4 pl-4 border-l space-y-1">
                            {category.items.map((item) => {
                              const Icon = calculatorIcons[item.href] || Calculator;
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setIsOpen(false)}
                                  className={cn(
                                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent",
                                    pathname === item.href ? "bg-accent" : "transparent"
                                  )}
                                >
                                  <Icon 
                                    className={`h-4 w-4 ${
                                      category.color === "green" ? "text-green-600 dark:text-green-400" :
                                      category.color === "rose" ? "text-rose-600 dark:text-rose-400" :
                                      category.color === "blue" ? "text-blue-600 dark:text-blue-400" :
                                      category.color === "indigo" ? "text-indigo-600 dark:text-indigo-400" :
                                      category.color === "sky" ? "text-sky-600 dark:text-sky-400" :
                                      "text-amber-600 dark:text-amber-400"
                                    }`}
                                  />
                                  {item.name}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}