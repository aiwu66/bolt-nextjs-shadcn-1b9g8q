export const cityConfigs: Record<string, {
  insuranceBase: {
    minimum: number;
    maximum: number;
    average: number;
  };
  housingFund: {
    minimum: number;
    maximum: number;
    rate: {
      min: number;
      max: number;
    };
  };
}> = {
  beijing: {
    insuranceBase: {
      minimum: 3613,
      maximum: 31884,
      average: 9613,
    },
    housingFund: {
      minimum: 2320,
      maximum: 31884,
      rate: {
        min: 5,
        max: 12,
      },
    },
  },
  shanghai: {
    insuranceBase: {
      minimum: 5975,
      maximum: 34188,
      average: 10338,
    },
    housingFund: {
      minimum: 2590,
      maximum: 34188,
      rate: {
        min: 5,
        max: 12,
      },
    },
  },
  guangzhou: {
    insuranceBase: {
      minimum: 3321,
      maximum: 28017,
      average: 8860,
    },
    housingFund: {
      minimum: 2100,
      maximum: 28017,
      rate: {
        min: 5,
        max: 12,
      },
    },
  },
  shenzhen: {
    insuranceBase: {
      minimum: 3613,
      maximum: 31884,
      average: 9613,
    },
    housingFund: {
      minimum: 2320,
      maximum: 31884,
      rate: {
        min: 5,
        max: 12,
      },
    },
  },
  // 可以继续添加其他城市的配置
};