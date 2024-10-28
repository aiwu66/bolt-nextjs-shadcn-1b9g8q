export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex h-14 items-center justify-center text-sm">
        <div className="flex flex-col items-center space-y-1 text-center">
          <p>© {new Date().getFullYear()} 在线计算器 版权所有</p>
          <p className="text-xs text-muted-foreground">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              京ICP备XXXXXXXX号-1
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}