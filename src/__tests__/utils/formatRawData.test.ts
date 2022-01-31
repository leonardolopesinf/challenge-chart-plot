import formatRawData from '../../utils/formatRawData';
import isValidEvent from '../../utils/isValidEvent';

const rawDataMock = `
{type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}
{type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862600000}

1231231
dsadasdas
{type: 'data', timestamp: 1519862600000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}
{type: 'stop', timestamp: 1519862600000}
`;

describe('should format raw data form code editor', () => {
  it('should all events to be valid', () => {
    const formattedRawData = formatRawData(rawDataMock);

    const isValid = formattedRawData.every(isValidEvent);

    expect(isValid).toBeTruthy();
  });
});
