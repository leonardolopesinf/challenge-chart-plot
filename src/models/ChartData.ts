import { Serie } from '@nivo/line';

class ChartData {
  private _sequenceStarted = false;

  private _sequenceBegin: number = 0;
  private _sequenceEnd: number = 0;

  private _fields: string[] = [];
  private _groups: string[] = [];

  private _currentEvent: EventInput = {
    timestamp: 0,
    type: 'start',
  };

  private _abstractSeries: AbstractSeries = {};
  private _series: Serie[] = [];

  constructor(private _sequence: EventInput[]) {}

  public get series() {
    return this._series;
  }
}

export default ChartData;
