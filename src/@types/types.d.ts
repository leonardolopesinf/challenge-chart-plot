interface EventInput {
  type: 'start' | 'span' | 'data' | 'stop';
  timestamp: number;
  [key: string]: any;
}

interface AbstractSerie {
  timestamp: number;
  value: number;
}

interface AbstractSeries {
  [key: string]: {
    [key: string]: AbstractSerie[];
  };
}
