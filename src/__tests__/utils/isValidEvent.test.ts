import isValidEvent from '../../utils/isValidEvent';

describe('should validate an event', () => {
  it('should be an object', () => {
    const event: EventInput = {
      type: 'data',
      timestamp: 123456,
    };

    let isValid = isValidEvent(event);

    expect(isValid).toBeTruthy();

    isValid = isValidEvent(null);

    expect(isValid).toBeFalsy();

    isValid = isValidEvent(123 as any);

    expect(isValid).toBeFalsy();

    isValid = isValidEvent('123' as any);

    expect(isValid).toBeFalsy();
  });

  it('should contain properties type and timestamp', () => {
    const event: EventInput = {
      type: 'stop',
      timestamp: 654321,
    };

    let isValid = isValidEvent(event);

    expect(isValid).toBeTruthy();

    const noType: any = {
      timestamp: 123456,
    };

    isValid = isValidEvent(noType);

    expect(isValid).toBeFalsy();

    const noTimestamp: any = {
      type: 'stop',
    };

    isValid = isValidEvent(noTimestamp);

    expect(isValid).toBeFalsy();
  });

  it('should contain select and group when type is start', () => {
    const event: EventInput = {
      type: 'start',
      timestamp: 654321,
      select: ['l', 'e', 'o'],
      group: ['a', 'b'],
    };

    let isValid = isValidEvent(event);

    expect(isValid).toBeTruthy();

    const noSelect: EventInput = {
      type: 'start',
      timestamp: 654321,
      group: ['a', 'b'],
    };

    isValid = isValidEvent(noSelect);

    expect(isValid).toBeFalsy();

    const noGroup: EventInput = {
      type: 'start',
      timestamp: 654321,
      select: ['l', 'e', 'o'],
    };

    isValid = isValidEvent(noGroup);

    expect(isValid).toBeFalsy();
  });

  it('should contain begin and end when type is span', () => {
    const event: EventInput = {
      type: 'span',
      timestamp: 654321,
      begin: 1,
      end: 2,
    };

    let isValid = isValidEvent(event);

    expect(isValid).toBeTruthy();

    const noBegin: EventInput = {
      type: 'span',
      timestamp: 654321,
      end: 2,
    };

    isValid = isValidEvent(noBegin);

    expect(isValid).toBeFalsy();

    const noEnd: EventInput = {
      type: 'span',
      timestamp: 654321,
      begin: 1,
    };

    isValid = isValidEvent(noEnd);

    expect(isValid).toBeFalsy();
  });
});
