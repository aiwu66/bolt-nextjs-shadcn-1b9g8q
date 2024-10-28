import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://yourcalculator.com'),
  title: {
    default: '在线计算器 - 免费好用的计算工具',
    template: '%s | 在线计算器'
  },
  description: '提供简单易用的在线计算器工具，支持基础运算、科学计算、单位换算等多种功能。完全免费，界面简洁，操作方便。',
  keywords: ['在线计算器', '科学计算器', '单位换算', '免费计算器', '计算工具', '房贷计算器', '工资计算器'],
  authors: [{ name: '在线计算器' }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://yourcalculator.com',
    title: '在线计算器 - 免费好用的计算工具',
    description: '提供简单易用的在线计算器工具，支持基础运算、科学计算、单位换算等多种功能。',
    siteName: '在线计算器'
  },
  twitter: {
    card: 'summary_large_image',
    title: '在线计算器 - 免费好用的计算工具',
    description: '提供简单易用的在线计算器工具，支持基础运算、科学计算、单位换算等多种功能。'
  },
  alternates: {
    canonical: 'https://yourcalculator.com'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="baidu-site-verification" content="your-verification-code" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourcalculator.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <MainNav />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}