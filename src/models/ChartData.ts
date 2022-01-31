import { Serie } from '@nivo/line';
import moment from 'moment';

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

  private _getGroup() {
    return this._groups.reduce((previous, current, currentIndex) => {
      if (currentIndex === 1)
        return `${this._currentEvent[previous]}_${this._currentEvent[current]}`;

      return `${previous}_${this._currentEvent[current]}`;
    });
  }

  private _setFieldsByGroup(group: string) {
    this._fields.forEach((field) => {
      let groupFields = this._abstractSeries[group][field];

      const fieldValue = {
        timestamp: this._currentEvent.timestamp,
        value: this._currentEvent[field],
      };

      if (groupFields) groupFields.push(fieldValue);
      else groupFields = [fieldValue];

      this._abstractSeries[group][field] = groupFields;
    });
  }

  private _getLegend(group: string, field: string) {
    const groupField = `${group}_${field}`;

    let words = groupField.split('_');

    words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

    const legend = words.join(' ');

    return legend;
  }

  private _generateSeries() {
    const series = this._abstractSeries;

    for (const groupName in series) {
      const fieldNames = Object.keys(series[groupName]);

      fieldNames.forEach((fieldName) => {
        const legend = this._getLegend(groupName, fieldName);

        const serieData = series[groupName][fieldName].map(
          ({ timestamp, value }) => ({
            x: moment(timestamp).format('HH:mm'),
            y: value,
          })
        );

        const serie: Serie = {
          id: legend,
          data: serieData,
        };

        this._series.push(serie);
      });
    }
  }

  private _start() {
    if (!this._sequenceStarted) {
      this._sequenceStarted = true;
      this._fields = this._currentEvent.select;
      this._groups = this._currentEvent.group;
    }
  }

  private _span() {
    if (this._sequenceStarted) {
      this._sequenceBegin = this._currentEvent.begin;
      this._sequenceEnd = this._currentEvent.end;
    }
  }

  private _data() {
    if (
      this._sequenceStarted &&
      this._currentEvent.timestamp >= this._sequenceBegin &&
      this._currentEvent.timestamp <= this._sequenceEnd
    ) {
      const group = this._getGroup();

      if (!this._abstractSeries[group]) this._abstractSeries[group] = {};

      this._setFieldsByGroup(group);
    }
  }

  private _stop() {
    if (this._sequenceStarted) {
      this._sequenceStarted = false;
      this._sequenceBegin = 0;
      this._sequenceEnd = 0;
      this._fields = [];
      this._groups = [];
    }
  }

  private _eventAction(event: EventInput) {
    this._currentEvent = event;

    switch (event.type) {
      case 'start':
        this._start();
        return;
      case 'span':
        this._span();
        return;
      case 'data':
        this._data();
        return;
      case 'stop':
        this._stop();
        return;
    }
  }

  public get series() {
    this._abstractSeries = {};
    this._series = [];

    for (const event of this._sequence) this._eventAction(event);

    this._generateSeries();

    return this._series;
  }
}

export default ChartData;
