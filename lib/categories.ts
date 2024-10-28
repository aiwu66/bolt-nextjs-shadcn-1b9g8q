import {
  Wallet,
  Heart,
  Clock,
  Binary,
  Network,
  MoreHorizontal,
  PiggyBank,
  Calculator,
  Car,
  Building2,
  Receipt,
  BadgeDollarSign,
  Building,
  CircleDollarSign,
  Coins,
  FileSpreadsheet,
  Weight,
  CalendarDays,
  Timer,
  Hash,
  Divide,
  LayoutGrid,
  Banknote,
  Calendar,
  Baby,
} from "lucide-react";

export const categories = [
  {
    name: "贷款与税务",
    href: "/daikuan",
    icon: Wallet,
    color: "green",
    items: [
      { 
        name: "房贷计算器", 
        href: "/fangdai",
        description: "快速计算房贷月供、总利息，支持等额本息和等额本金两种还款方式"
      },
      { 
        name: "商业贷款计算器", 
        href: "/shangyedaikuan",
        description: "精确计算商业贷款利息和还款计划，帮助您合理规划资金"
      },
      { 
        name: "车贷计算器", 
        href: "/chedai",
        description: "轻松计算车贷月供和总成本，助您选择最优贷款方案"
      },
      { 
        name: "公积金贷款计算器", 
        href: "/gongjijin",
        description: "准确估算公积金可贷额度，计算月供，优化贷款方案"
      },
      { 
        name: "个人所得税计算器", 
        href: "/gerensuodeshui",
        description: "根据最新税率政策，准确计算应缴个税，轻松理财规划"
      },
      { 
        name: "税后工资计算器", 
        href: "/shuihougongzi",
        description: "全面计算税后实际工资，包含各项扣除项目明细"
      },
      { 
        name: "五险一金计算器", 
        href: "/wuxianyijin",
        description: "详细计算社保公积金缴费金额，了解每月实际缴纳费用"
      },
      { 
        name: "存款计算器", 
        href: "/cunkuan",
        description: "计算定期存款、活期存款利息收益，支持多种存款方式对比"
      },
      { 
        name: "购置税计算器", 
        href: "/gouzhishui",
        description: "准确计算车辆购置税，提前了解购车成本"
      },
    ],
  },
  {
    name: "健康与生育",
    href: "/jiankang",
    icon: Heart,
    color: "rose",
    items: [
      { 
        name: "BMI计算器", 
        href: "/bmi",
        description: "科学计算身体质量指数，评估健康状况"
      },
      { 
        name: "胎儿体重计算器", 
        href: "/taiertizhong",
        description: "根据孕周估算胎儿体重，监测胎儿发育情况"
      },
      { 
        name: "预产期计算器", 
        href: "/yuchanqi",
        description: "准确计算预产期，帮助准妈妈做好生产准备"
      },
      { 
        name: "排卵期计算器", 
        href: "/pailvnqi",
        description: "科学预测排卵期和易孕期，提高怀孕几率"
      },
      { 
        name: "月经计算器", 
        href: "/yuejing",
        description: "科学计算月经周期，预测经期和排卵期"
      },
      { 
        name: "安全期计算器", 
        href: "/anquanqi",
        description: "准确计算女性安全期，科学避孕"
      },
    ],
  },
  {
    name: "时间与日期",
    href: "/shijian",
    icon: Clock,
    color: "blue",
    items: [
      { 
        name: "日期计算器", 
        href: "/riqi",
        description: "计算两个日期间隔天数，或特定天数后的日期"
      },
      { 
        name: "时间计算器", 
        href: "/shijian",
        description: "精确计算时间差值，支持多种时间单位转换"
      },
      { 
        name: "年龄计算器", 
        href: "/nianling",
        description: "根据出生日期计算准确年龄，包含虚岁和周岁"
      },
    ],
  },
  {
    name: "数学与科学",
    href: "/shuxue",
    icon: Binary,
    color: "indigo",
    items: [
      { 
        name: "科学计算器", 
        href: "/kexuejisuanqi",
        description: "支持高级数学运算，适用于科学计算和工程计算"
      },
      { 
        name: "解方程计算器", 
        href: "/jiefangcheng",
        description: "求解一元二次方程，支持多种方程类型"
      },
      { 
        name: "三角函数计算器", 
        href: "/sanjiaohanshu",
        description: "计算各种三角函数值，支持角度和弧度"
      },
      { 
        name: "开根号计算器", 
        href: "/kaigenghao",
        description: "计算任意次方根，支持高精度运算"
      },
      { 
        name: "十六进制转换计算器", 
        href: "/shiliujinzhi",
        description: "在各种进制间快速转换，支持二进制到十六进制"
      },
      { 
        name: "对数计算器", 
        href: "/duishu",
        description: "计算自然对数和常用对数，支持任意底数"
      },
      { 
        name: "方差计算器", 
        href: "/fangcha",
        description: "计算数据的方差和标准差，统计分析必备"
      },
      { 
        name: "阶乘计算器", 
        href: "/jiecheng",
        description: "快速计算大数阶乘，支持高精度运算"
      },
      { 
        name: "行列式计算器", 
        href: "/hanglieshi",
        description: "计算二阶、三阶行列式，矩阵运算助手"
      },
    ],
  },
  {
    name: "网络与单位换算",
    href: "/wangluo",
    icon: Network,
    color: "sky",
    items: [
      { 
        name: "子网掩码计算器", 
        href: "/ziwangyanma",
        description: "计算IP地址范围和子网信息，网络规划必备"
      },
      { 
        name: "单位换算计算器", 
        href: "/danweihuansuan",
        description: "支持长度、重量、面积等多种单位间的转换"
      },
      { 
        name: "电源功率计算器", 
        href: "/dianyuan",
        description: "计算电器功率消耗，估算用电成本"
      },
    ],
  },
  {
    name: "其他计算器",
    href: "/qita",
    icon: MoreHorizontal,
    color: "amber",
    items: [
      { 
        name: "亲戚称呼计算器", 
        href: "/qinqichenghu",
        description: "快速查找亲戚关系称谓，解决称呼难题"
      },
      { 
        name: "数独计算器", 
        href: "/shudou",
        description: "智能解决数独难题，提供详细解题步骤"
      },
      { 
        name: "买房计算器", 
        href: "/maifang",
        description: "全面评估购房成本，包括首付、税费等"
      },
    ],
  },
];