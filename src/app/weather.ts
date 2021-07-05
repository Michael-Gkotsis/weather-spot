export interface Weather{

  message: string;
  cod : number;
  count: number;
  list: {
    clouds: {
      all: number;
    };
    coord: {
      lat: number;
      lon: number;
    };
    dt: number;
    id: number;
    main: {
      feels_like: number;
      humidity: number;
      pressure: number;
      temp: number;
      temp_max: number;
      temp_min: number;
    };
    name: string;
    rain: number | string;
    snow: number | string;
    sys: {
      country: string;
    }
    weather: [
      {
        description: string;
        icon: string;
        id: number;
        main: string;
      }
    ];
    wind: {
      deg: number;
      speed: number;
    }
  }
};
