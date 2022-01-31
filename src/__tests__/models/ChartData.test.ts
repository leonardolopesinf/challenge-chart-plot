import ChartData from '../../models/ChartData';

const select = ['min', 'max'];
const group = ['identifier', 'section'];

const eventListMock: EventInput[] = [
  {
    type: 'start',
    timestamp: 1,
    select: select,
    group: group,
  },
  {
    type: 'span',
    timestamp: 1,
    begin: 0,
    end: 9,
  },
  {
    type: 'data',
    timestamp: 2,
    identifier: 'a',
    section: 'b',
    min: 0,
    max: 1,
  },

  /**
   * Out of range
   */

  {
    type: 'data',
    timestamp: 10,
    identifier: 'c',
    section: 'd',
    min: 0,
    max: 1,
    other: '',
  },
  {
    type: 'stop',
    timestamp: 2,
  },
];

const chartData = new ChartData(eventListMock);

const series = chartData.series;

describe('should create chart data', () => {
  it('should contain a formatted id', () => {
    const areValidIds = series.every((serie) => {
      const validIdRegex = /^([A-Z]([a-zA-Z]+)? )+[A-Z][a-zA-Z]+$/;

      const idIsValid = validIdRegex.test(serie.id as string);

      return idIsValid;
    });

    expect(areValidIds).toBeTruthy();
  });

  it('should contain x and y in data prop', () => {
    const allDataHasXY = series.every((serie) => {
      const dataHasXY = serie.data.every(
        (datum) => datum.x !== undefined && datum.y !== undefined
      );

      return dataHasXY;
    });

    expect(allDataHasXY).toBeTruthy();
  });
});
