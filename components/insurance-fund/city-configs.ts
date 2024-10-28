export const cityConfigs: Record<string, {
  insuranceBase: {
    minimum: number;
    maximum: number;
    average: number;
  };
  rates: {
    personal: {
      pension: number;
      medical: number;
      unemployment: number;
      housingFund: {
        min: number;
        max: number;
      };
    };
    company: {
      pension: number;
      medical: number;
      unemployment: number;
      injury: number;
      maternity: number;
      housingFund: {
        min: number;
        max: number;
      };
    };
  };
}> = {
  beijing: {
    insuranceBase: {
      minimum: 3613,
      maximum: 31884,
      average: 9613,
    },
    rates: {
      personal: {
        pension: 8,
        medical: 2,
        unemployment: 0.5,
        housingFund: {
          min: 5,
          max: 12,
        },
      },
      company: {
        pension: 16,
        medical: 10,
        unemployment: 0.8,
        injury: 0.4,
        maternity: 0.8,
        housingFund: {
          min: 5,
          max: 12,
        },
      },
    },
  },
  shanghai: {
    insuranceBase: {
      minimum: 5975,
      maximum: 34188,
      average: 10338,
    },
    rates: {
      personal: {
        pension: 8,
        medical: 2,
        unemployment: 0.5,
        housingFund: {
          min: 5,
          max: 12,
        },
      },
      company: {
        pension: 16,
        medical: 9.5,
        unemployment: 0.5,
        injury: 0.2,
        maternity: 1,
        housingFund: {
          min: 5,
          max: 12,
        },
      },
    },
  },
  // 可以继续添加其他城市的配置
};