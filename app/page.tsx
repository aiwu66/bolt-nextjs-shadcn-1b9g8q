import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Calculator } from "lucide-react";
import { categories } from "@/lib/categories";
import { calculatorIcons } from "@/lib/calculator-icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 mb-6">
            <div className="relative group animate-float">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-full transform hover:scale-105 transition duration-300">
                <Calculator className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-pulse" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 mb-6 animate-gradient">
            让计算变得简单高效
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            提供超过30种专业计算工具，覆盖金融理财、健康生活、科学计算等多个领域。
            告别繁琐计算，轻松获取准确结果。
          </p>
        </section>

        {/* Categories Section */}
        <div className="space-y-16">
          {categories.map((category, index) => (
            <section 
              key={category.name} 
              className="space-y-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-${category.color}-100 dark:bg-${category.color}-900/30`}>
                  <category.icon className={`w-8 h-8 text-${category.color}-600 dark:text-${category.color}-400`} />
                </div>
                <h2 className="text-2xl font-bold">{category.name}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((calculator, calcIndex) => {
                  const Icon = calculatorIcons[calculator.href] || Calculator;
                  return (
                    <Link
                      key={calculator.href}
                      href={calculator.href}
                      className="group card-hover-effect"
                      style={{ animationDelay: `${(index * 0.1) + (calcIndex * 0.05)}s` }}
                      aria-label={`${calculator.name} - ${calculator.description}`}
                    >
                      <Card className="p-6 h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl dark:shadow-indigo-500/10 group-hover:bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-indigo-900/50 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className={`p-2 rounded-lg bg-${category.color}-100 dark:bg-${category.color}-900/30 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className={`w-5 h-5 text-${category.color}-600 dark:text-${category.color}-400`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold mb-2 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {calculator.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                              {calculator.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}